import Image from "next/image";
import { Header } from "@/components/header";

export default function Home() {
  console.log("Client page rendered");
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />
      <main>
        <h1 className="dark:invert">Hello, world!</h1>
      </main>
    </div>
  );
}
