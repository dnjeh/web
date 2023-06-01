import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth].js'

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    if(요청.method=="POST") {
        const client = await connectDB
        const db = client.db("forum")
        if(session) {
            요청.body.author = session.user.email
        }
        else return 응답.status(500).json("there's no user")
        if(요청.body.title=="" || 요청.body.content=="") return 응답.status(200).json("??")
        try {
            let result = await db.collection("post").insertOne(요청.body)
            return 응답.redirect(302, "/list")
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}