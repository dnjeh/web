"use client"

import { useState } from "react";

const Counter = () => {
    const [cnt, setCnt] = useState(0);
    return (
        <div className="flex flex-col items-center">
        <div className="bg-slate-200 w-96 h-24 flex items-center justify-center text-5xl">{cnt}</div>
        <div className="flex justify-around w-full">
            <button className="bg-yellow-500 w-20 h-28 font-bold" onClick={()=>setCnt(cnt+1)}>+</button>
            <button className="bg-yellow-500 w-20 h-28 font-bold" onClick={()=>setCnt(cnt-1)}>-</button>
            <button className="bg-yellow-500 w-20 h-28 font-bold" onClick={()=>setCnt(0)}>C</button>
        </div>
        </div>
    )
}

export default Counter;