import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {
    const trend={title:"더미", count: 10281028};
    return (
    <Link href={`/search?q=${trend.title}`} className={style.container}>
        <div className={style.count}>실시간트렌드</div>
        <div className={style.title}>{trend.title}</div>
        <div className={style.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
    )
}