export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/test" method="POST">
                <button type="submit">제출</button>
            </form>
        </div>
    )
}