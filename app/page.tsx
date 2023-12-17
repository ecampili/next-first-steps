import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center  p-24">
      <span className="text-5xl ">Hola Mundo !!!</span>
      <Link
        className="mt-5 text-lg bg-blue-800 text-white px-4 py-2 rounded"
        href={"/about"}
      >
        About
      </Link>
    </main>
  );
}
