import { connectDB } from "@/util/database";
import bcrypt from "bcrypt"
export default async function handler(요청, 응답) {
    if(요청.method == "POST") {
        if (요청.body.name == "" || 요청.body.email == "" || 요청.body.password == "") {
            return 응답.status(302).json("한치의 공백도 용납할 수 없어요 >:(");
        }
        let hash = await bcrypt.hash(요청.body.password, 10);
        요청.body.password = hash;
        let db = (await connectDB).db("forum");
        let result = await db
        .collection("user_cred")
        .findOne({ email: 요청.body.email });
        if (result != null) {
            return 응답.status(302).json("이미 있는 유저사마세요!");
        } else {
            await db.collection("user_cred").insertOne(요청.body);
            console.log(요청.body)
            return 응답.redirect(302, "/list");
        }
    }
}