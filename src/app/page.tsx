"use client"
import { useLangContext } from "@/context/LangContext"
import Link from "next/link"

export default function Home() {
  const { language } = useLangContext()
  return (
    <main className="flex flex-col items-center justify-center w-full font-bold h-3/4">
      <h1>{language === "EN" ? "Welcome!" : "Üdvözlöm!"}</h1>
      <h2 className="flex flex-col items-center justify-center">
        <div>{language === "EN" ? "My name is Kinczel Balázs," : "Az én nevem Kinczel Balázs,"}</div>
        <div>{language === "EN" ? "I'm a Junior Front End Developer." : "Én egy Junior Front End Fejlesztő vagyok."}</div>
      </h2>
      <Link href="/Info" className="p-2 rounded-full cursor-pointer md:px-4 md:py-2 bg-slate-600 bg-opacity-30 hover:bg-opacity-50">{language === "EN" ? "Learn More" : "Még több"}</Link>
    </main>
  )
}
