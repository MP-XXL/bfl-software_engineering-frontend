import Image from "next/image";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl ">
        <Todos/>
      </main>
    </div>
  );
}
