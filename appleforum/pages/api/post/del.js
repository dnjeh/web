import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { getServerSession } from 'next-auth'
//글 삭제 api..?
export default async function handler(요청, 응답) {
    let session = await getServerSession(authOptions); //세션 소환 으아앗!
    if(요청.method=="POST") { //POST를 햇다면..
        console.log(요청.body)
        const client = await connectDB //대충 db 연결하고
        const db = client.db("forum") //테이블도 불러와줍니다.
        try {
            let fetchh = await db.collection("post").findOne({ _id : new ObjectId(요청.body)}) 
            if(fetchh.author==session.user.email) { //글 찾아서 본인이라면 
            let result = await db.collection("post").deleteOne({_id : new ObjectId(요청.body)})
            console.log(result) //지울수 잇개 해주고
            return 응답.redirect(302, "/list") //리다이렉
            }
            else {
                return 응답.status(500).json("no parms") //권한업음   
            }
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}