"use client"
import { faker } from "@faker-js/faker";
import style from "./room.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useRouter } from "next/navigation";
dayjs.extend(relativeTime);
dayjs.locale("ko");
export default function Room() {
    const router=useRouter();
    const user = {
      id: "hero",
      nickname: "영웅",
      Messages: [
        { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
        { roomId: 123, content: "날씨가 좋네요.", createdAt: new Date() },
      ],
    };
    const onclick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    }
    return (
      <div className={style.room} onClickCapture={onclick}>
        <div className={style.roomUserImage}>
          <img src={faker.image.avatar()} alt="" />
        </div>
        <div className={style.roomChatInfo}>
          <div>
            <b>{user.nickname}</b>
            &nbsp;
            <span>@{user.id}</span>&nbsp;·&nbsp;
            <span className={style.postDate}>
              {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
            </span>
          </div>
          <div className={style.roomLastChat}>
            {user.Messages?.at(-1)?.content}
          </div>
        </div>
      </div>
    );
  }