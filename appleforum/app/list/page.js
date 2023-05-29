import { connectDB } from "@/util/database"
import Link from "next/link";
import DetailLink from "./DetailLink";
export default async function List() {
    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()
    return (
        <div className="list-bg">
        {
            result.map((ai, i) => {
                return (
                    <div className="list-item" key={i}>
                        <Link href={`/detail/${ai._id}`}>
                            <h4>{ai.title}</h4>
                        </Link>
                        <Link href={`/edit/${ai._id}`}>✏</Link>
                        <p>{ai.content}</p>
                    </div>
                )
            })
        }
        </div>
    )
}