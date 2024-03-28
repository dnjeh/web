import Image from "next/image";
import Counter from "./_components/counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Counter />
    </div>
  );
}
