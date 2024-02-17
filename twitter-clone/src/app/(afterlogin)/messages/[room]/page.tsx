import Link from "next/link";
import style from "./room.module.css";
import { faker } from "@faker-js/faker";
import cx from "classnames";
import BackButton from "../../_component/BackButton";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function ChatRoom() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      roomId: 123,
      id: "zerohch0",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      roomId: 123,
      id: "hero",
      content: "날씨가 좋네요.",
      createdAt: new Date(),
    },
  ];
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className={style.list}>
        {messages.map((ai, i) => (
          <div
            key={i}
            className={cx(
              ai.id === "zerohch0" ? style.myMessage : style.yourMessage,
              style.message
            )}
          >
            <div className={style.content}>{ai.content}</div>
            <div className={style.date}>{dayjs(ai.createdAt).format("YYYY년 MM월 DD일 A h시 mm분")}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
