"use client"
import Image from "next/image"
import { useState } from "react"
export default function List() { 
    let 상품 = ["Tomatoes", "Pasta", "Coconut"]
    let [수량, set수량] = useState([0, 0, 0])
    let 어레이=[2,3,4]
    let wntjr = ["a[0]=100", "console.log(상품[2])", "let a=arr.map((arr[i], i)=>{})"]
    return (
      <div>
        <h4 className="title">상품 목록</h4>
        {
          상품.map((ai, i)=> {
            return( 
              <div className="food" key={i}>
                <img src={`/food${i}.png`} className="food-img" alt="토마토"/>
                <h4>{ai} $40</h4>
                <button onClick={()=>{
                  let t = [...수량]
                  t[i]--
                  set수량(t)
                  }}>-</button>
                <span> {수량[i]} </span>
                <button onClick={()=>{
                  let t=[...수량]
                  t[i]++
                  set수량(t)
                }}>+</button>
              </div>
            )
          })
        }
      </div>
    )
  }
  
  