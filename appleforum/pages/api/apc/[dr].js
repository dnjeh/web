export default function handler(요청, 응답) {
    console.log(요청.query)
    return 응답.status(200).json()
} //우리의 []는 여기서도 활약할 수 잇어요!.!