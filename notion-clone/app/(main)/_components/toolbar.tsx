"use client"

import { Doc } from "@/convex/_generated/dataModel";
import { IconPicker } from "./icon-picker";
import TextareaAutosize from "react-textarea-autosize"
import { Button } from "@/components/ui/button";
import { ImageIcon, Smile, X } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/use-cover-image";

interface ToolbarProps {
    initalData: Doc<"documents">;
    priview?: boolean;
}

export const Toolbar = ({
    initalData,
    priview
}: ToolbarProps) => {
    const inputRef = useRef<ElementRef<"textarea">>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initalData.title);

    const update = useMutation(api.documents.update);
    const removeIcon = useMutation(api.documents.removeIcon);

    const coverImage = useCoverImage();

    const enableinput = () => {
        if (priview) return;

        setIsEditing(true);
        setTimeout(() => {
            setValue(initalData.title);
            inputRef.current?.focus();
        }, 0)
    }

    const disableInput = () => setIsEditing(false);

    const onInput = (value: string) => {
        setValue(value);
        update({
            id: initalData._id,
            title: value || "untitled"
        });
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.key === "Enter") {
            event.preventDefault();
            disableInput();
        }
    }

    const onIconSelect = (icon: string) => {
        update({
            id: initalData._id,
            icon,
        });
    }

    const OnRemoveIcon = () => { 
        removeIcon({
            id:initalData._id
        });
    };
    return (
        <div className="pl-[54px] group relative">
            {!!initalData.icon && !priview && (
                <div className="flex items-center gap-x-2 group/icon pt-6">
                    <IconPicker onChange={onIconSelect}>
                        <p className="text-6xl hover:opacity-75 transition">{initalData.icon}</p>
                    </IconPicker>
                    <Button
                        onClick={OnRemoveIcon}
                        className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs"
                        variant="outline"
                        size="icon"
                    >
                        <X className="h-4 w-4"/>
                    </Button>
                </div>
            )}
            {!!initalData.icon && priview && (
                <p className="text-6xl pt-6">
                    {initalData.icon}
                </p>
            )}
            <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4">
                {!initalData.icon && !priview && (
                    <IconPicker asChild onChange={onIconSelect}>
                        <Button className="text-muted-foreground text-xs"
                        variant="outline"
                        size="sm">
                            <Smile className="h-4 w-4 mr-2" />
                            Add icon
                        </Button>
                    </IconPicker>
                )}
                {!initalData.coverImage && !priview && (
                    <Button
                    onClick={coverImage.onOpen}
                    className="text-muted-foreground text-xs"
                    variant="outline"
                    size="sm">
                        <ImageIcon className="h-4 w-4 mr-2"/>
                        Add cover
                    </Button>
                )}
            </div>
            {isEditing && !priview ? (
                <TextareaAutosize
                    ref={inputRef}
                    onBlur={disableInput}
                    onKeyDown={onKeyDown}
                    value={value}
                    onChange={(e) => onInput(e.target.value)}
                    className="text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none"
                />
            ) : (
                <div 
                    onClick={enableinput}
                    className="pb-[11.5px] text-5xl font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF]"
                >
                    {initalData.title}
                </div>
            )}
        </div>
    )
}