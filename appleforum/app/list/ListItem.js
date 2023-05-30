"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem({result}) {
    return (
    <div>
        {
        result.map((ai, i) => {
            return (
                <div className="list-item" key={i}>
                    <Link href={`/detail/${ai._id}`}>
                        <h4>{ai.title}</h4>
                    </Link>
                    <Link href={`/edit/${ai._id}`}>✏</Link>
                    <span onClick={()=>{
                        fetch("/api/post/del", {
                            method : "POST", 
                            body : ai._id
                        }).then(()=>{
                            console.log("완료")
                        })
                    }}>💫</span>
                    <p>{ai.content}</p>
                </div>
                )
            })
        }
    </div>
    )
}