"use client"
import { useLangContext } from "@/context/LangContext"

export default function About() {
    const { language } = useLangContext();
    return (
        <div className="flex flex-col items-center justify-center py-2 mx-auto xl:w-1/2">
            <h2 className="pb-4 text-xl font-bold">{language === "EN" ? "A dedicated Front-end Developer based in Budapest, Hungary" : "Dedikált front-end fejlesztő Budapesten, Magyarországon"}</h2>
            <p>{language === "EN" ? "As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, Typescript, React, NextJS and  Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications." : "Junior Front-End fejlesztőként lenyűgöző készségekkel rendelkezem a HTML, CSS, Typescript, React, NextJS és  Tailwind terén. Kiemelkedem a zökkenőmentes felhasználói élményt nyújtó reszponzív weboldalak tervezésében és karbantartásában. Szakértelmem dinamikus, magával ragadó interfészek kialakításában rejlik tiszta és optimalizált kód írásán, valamint a legmodernebb fejlesztői eszközök és technikák felhasználásán keresztül. Csapatjátékos vagyok, aki boldogul a többfunkciós csapatokkal való együttműködésben, hogy kiváló webalkalmazásokat készítsek."}</p>
        </div>
    )
}
