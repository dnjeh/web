import { connectDB } from "@/util/database"
import Link from "next/link";
export default async function List() {
    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()
    return (
        <div className="list-bg">
        {
            result.map((ai, i) => {
                return (
                    <div className="list-item" key={i}>
                        <h4><Link href={`/detail/${ai._id}`}>{ai.title}</Link></h4>
                        <p>{ai.content}</p>
                    </div>
                )
            })
        }
        </div>
    )
}