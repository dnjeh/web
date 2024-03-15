import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import PostRecommends from "./_component/postRecommends";
import { getPostRecommend } from "./_lib/getPostRecommends";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({queryKey: ["posts", "recommends"], queryFn: getPostRecommend})
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <Tab />
        <PostForm />
        <PostRecommends />
      </TabProvider></HydrationBoundary>
    </main>
  );
}
