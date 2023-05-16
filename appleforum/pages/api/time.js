export default function handler(요청, 응답) {
    let today = new Date()
    let now = today.getFullYear() + "." + today.getMonth() + "." + today.getDate() + " " + today.getHours() + ":" + today.getMinutes()
    if(요청.method == "GET")  {
        return 응답.status(200).json("현재 시간은 : " + now)
    }
}