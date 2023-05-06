import Link from "next/link"

export default function Home() { 
  let name = "park"
  let link = "http://google.com"
  let wntjr = "style={{color:\"red\", fontSize:\"30px\"}}"
  return (
    <div>
      <h4 className="title">애플 후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <p className="title-sub">
        link: <a href={link}>google</a>
      </p>
    </div>
  )
}

