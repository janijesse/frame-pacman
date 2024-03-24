import { fetchMetadata } from "frames.js/next";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "My Page",
    other: await fetchMetadata(
      new URL("/frames", process.env.VERCEL_URL ? `https://{process.env.VERCEL_URL}` : "http://localhost:3000")
    ),
  };
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">PAC-MAN</code>
        </p>
      

      <div className="mb-8 sm:mb-16 grid text-center lg:max-w-screen-lg lg:w-full lg:text-left">
        <iframe src="https://pacman.js.org/" style={{ width:"100%", height:"90vh" }} frameBorder="0"></iframe>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          By{"Jani "}
            <Image
              src="/pac-man.png"
              alt="Pac-man Logo"
              
              width={100}
              height={24}
              priority
            />
      </div>
    </main>
  );
}