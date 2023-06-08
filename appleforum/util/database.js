import { MongoClient } from 'mongodb'
const url = "mongodb+srv://admin:AppleForum1028@appleforum.iygsea0.mongodb.net/?retryWrites=true&w=majority"
const options = { useNewUrlParser: true }
let connectDB
//대충 db 링크랑 옵션 설정하고 
if (process.env.NODE_ENV === 'development') { //어쩌고저쩌고
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
} //최종적으로 db를 쓰게 해줌
export { connectDB }