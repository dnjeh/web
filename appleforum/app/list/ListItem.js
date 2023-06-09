"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function ListItem(props) {
    console.log(props)
    let [Iine, setIine] = useState();
    return (
    <div>
        {
        props.result.map((ai, i) => {
            return (
                <div className="list-item" key={i}>
                    <Link href={`/detail/${ai._id}`}>
                        <h4>{ai.title} ({ai.Iine})</h4>
                    </Link>
                    {
                        props.email==ai.author?
                        <>
                    <Link href={`/edit/${ai._id}`}>✏</Link>
                    <span onClick={(e)=>{
                        /*fetch("/api/post/del", {
                            method : "POST", 
                            body : ai._id
                        }).then(()=>{
                            e.target.parentElement.style.opacity = 0
                            setTimeout(()=>{
                                e.target.parentElement.style.display = "none"
                            })
                        })*/

                        fetch(`api/post/delete?id=${ai._id}`).then(()=>{
                            e.target.parentElement.style.opacity = 0
                            setTimeout(()=>{
                                e.target.parentElement.style.display = "none"
                            }, 1000)
                        })
                        //fetch("api/apc/어쩌구")
                    }}>💫</span></>
                    :
                    <></>
                }
                    <p>{ai.content}</p>
                </div>
                )
            })
        }
    </div>
    )
}