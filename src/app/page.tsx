import Link from "next/link"

export default function Home() {

  return (
    <main className="fixed flex flex-col items-center justify-center w-full font-bold h-3/4">
      <h1>Welcome!</h1>
      <h2 className="flex flex-col items-center justify-center">
        <div>My name is Kinczel Balázs,</div>
        <div>I'm a Junior Front End Developer.</div>
      </h2>
      <Link href="/Info" className="py-2 px-4  rounded-full cursor-pointer md:px-4 md:py-2 bg-slate-600 bg-opacity-30 hover:bg-opacity-50">Learn More</Link>
    </main>
  )
}
