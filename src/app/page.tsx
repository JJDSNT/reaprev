import Image from "next/image";

//https://nextjs.org/docs/app/api-reference/next-config-js/basePath

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/reaprev/logo_reaprev.png"
          alt="Reaprev Logo"
          width={189}
          height={136}
          priority
          style={{ top: '50vh', left: '50vw' }}
        />
    </main>
  );
}
