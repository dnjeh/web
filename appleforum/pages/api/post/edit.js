import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if(요청.method=="POST") {
        const client = await connectDB
        const db = client.db("forum")
        if(요청.body.title=="" || 요청.body.content=="") return 응답.status(200).json("??")
        try {
            await db.collection("post").updateOne({_id : new ObjectId(요청.body.id)}, { $set : {title : 요청.body.title, content : 요청.body.content} } ); 
            return 응답.redirect(302, "/list")
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}