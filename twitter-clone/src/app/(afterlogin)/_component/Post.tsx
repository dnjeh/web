import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
import PostImages from "./PostImages";
import { Post } from "@/model/post";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface Props {
  noImage?: boolean;
  post: Post;
}

export default function Post({noImage, post}: Props) {
  const target = post;
  /*if (!noImage) {
    let num=Math.round(Math.random()*4);
    for(let i=1;i<=num;i++) {
      target.Images.push({ imageId: i, link: faker.image.urlLoremFlickr() });
    }
  }*/
  console.log(target);
  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
          </Link>
          <div className={style.postShade} />
        </div>
        <div className={style.postBody}>
          <Link href={`/${target.User.id}`}>
            <span className={style.postUserName}>{target.User.nickname}</span>
            &nbsp;
            <span className={style.postUserId}>@{target.User.id}</span>
            &nbsp; · &nbsp;
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </Link>
          <div>{target.content}</div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
