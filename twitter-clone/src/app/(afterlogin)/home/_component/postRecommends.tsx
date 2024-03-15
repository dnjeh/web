"use client"

import { useQuery } from "@tanstack/react-query"
import { getPostRecommend } from "../_lib/getPostRecommends"
import Post from "../../_component/Post"
import { Post as iPost} from "@/model/post"

export default function PostRecommends() {
    const {data} = useQuery<iPost[]>({queryKey: ["posts", "recommends"], queryFn: getPostRecommend})

    return data?.map((post)=>{
        <Post key={post.postId} post={post} />
    })
}