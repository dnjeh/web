import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
    if(요청.method=="POST") {
        const client = await connectDB
        const db = client.db("forum")
        if(요청.body.title=="" || 요청.body.content=="") return 응답.status(200).json("??")
        try {
            let result = await db.collection("post").remove({_id : 요청.body.id} , 1)
            return 응답.redirect(302, "/list")
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}