"use client"

import { ReactNode } from "react";
import style from "./postArticle.module.css"
import { useRouter } from "next/navigation";

interface Props {
    children: ReactNode;
    post: {
        postId: number,
        content: string,
        User: {
            id: string,
            nickname: string,
            image: string,
        },
        createdAt: Date,
        Images: any[],
    };
}

export default function PostArticle({children, post}: Props) {
    const router = useRouter();
    const onclink = () => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    }
    return (
        <article className={style.post} onClickCapture={onclink}>
        {children}
        </article>
    );
}