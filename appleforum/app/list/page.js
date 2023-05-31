import { connectDB } from "@/util/database"
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { getServerSession } from 'next-auth'

export const dynamic = "force-dynamic"

export default async function List() {
    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()
    let session = await getServerSession(authOptions);
    let email;
    if(session) email=session.user.email;
    result.map((ai, i)=>{
        result[i]._id=`${result[i]._id}`
    })
    return (
        <div className="list-bg">
        <ListItem result={result} email={email}/>
        </div>
    )
}