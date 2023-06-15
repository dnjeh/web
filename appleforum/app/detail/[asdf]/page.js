import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Comment from "./Comment"
import Iine from "./Iine"
export default async function Detail(props) {
    const db = (await connectDB).db("forum")
    let result = await db.collection("post").findOne({ _id : new ObjectId(props.params.asdf)})
    console.log(props)
    if (result == null) {
        return notFound()
      } else {
        return (
            <div>
                <h4>상세페이지</h4>
                <h4>{result.title}</h4>
                <p>{result.content}</p>
                <Comment id={props.params.asdf}/>
                <br></br>
                <Iine id={props.params.asdf}/>
            </div>
        )
      }
}