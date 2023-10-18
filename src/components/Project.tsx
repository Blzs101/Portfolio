import Link from "next/link"
import Image from "next/image"
type PropsType = {
    link: string,
    image: string,
    title: string,
    tech: string
}
function Project({ link, image, title, tech }: PropsType) {

    return (
        <Link href={link} className=" p-4 rounded-xl  dark:bg-slate-700 bg-slate-300  md:hover:scale-110 md:ease-in-out md:duration-700  ">
            <Image src={image} className="p-2 rounded-3xl w-full h-[75%]" alt="website preview" width={800} height={800} loading="eager" priority />
            <h2 className="mt-4 pb-2 pl-2 font-extrabold md:text-xl">{title}</h2>
            <div className="pb-2 pl-2 font-bolt md:text-mg">{tech}</div>
        </Link>
    )
}

export default Project