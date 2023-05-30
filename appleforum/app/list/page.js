import { connectDB } from "@/util/database"
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";
export default async function List() {
    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()
    result.map((ai, i)=>{
        result[i]._id=`${result[i]._id}`
    })
    return (
        <div className="list-bg">
        <ListItem result={result}/>
        </div>
    )
}