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
        <Link href={link} className=" p-4 rounded-xl  dark:bg-slate-700 bg-slate-300  lg:hover:scale-110 lg:ease-in-out lg:duration-700  ">
            <Image src={image} className="p-2 rounded-3xl w-full h-[80%]" alt="website preview" width={800} height={800} />
            <h2 className="pb-2 pl-2 font-extrabold md:text-xl">{title}</h2>
            <div className="pb-2 pl-2 font-bolt md:text-mg">{tech}</div>
        </Link>
    )
}

export default Project