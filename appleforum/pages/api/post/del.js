import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { getServerSession } from 'next-auth'

export default async function handler(요청, 응답) {
    let session = await getServerSession(authOptions);
    if(요청.method=="POST") {
        console.log(요청.body)
        const client = await connectDB
        const db = client.db("forum")
        try {
            let fetchh = await db.collection("post").findOne({ _id : new ObjectId(요청.body)})
            if(fetchh.author==session.user.email) {
            let result = await db.collection("post").deleteOne({_id : new ObjectId(요청.body)})
            console.log(result)
            return 응답.redirect(302, "/list")
            }
            else {
                return 응답.status(500).json("no parms")    
            }
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}