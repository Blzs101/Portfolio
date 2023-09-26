
import Link from "next/link";
import Image from "next/image"

export default function Socials() {

    return (
        <section className="flex flex-col items-center gap-4">
            <h2 className="text-lg font-bold">Email me:</h2>
            <a href="mailto:kinc.kb@gmail.com" className="underline">kinc.kb@gmail.com</a>
            <h2 className="text-lg font-bold">Connect with me:</h2>
            <div className="flex gap-4">
                <Link href="https://github.com/Blzs101" className="rounded-full md:p-2 hover:bg-slate-600 hover:bg-opacity-30 hidden dark:block" ><Image src="/github-light.svg" alt="github logo" width={32} height={32} /></Link>
                <Link href="https://github.com/Blzs101" className="rounded-full md:p-2 hover:bg-slate-600 hover:bg-opacity-30 block dark:hidden" ><Image src="/github-dark.svg" alt="github logo" width={32} height={32} /></Link>
                <Link href="https://www.linkedin.com/in/kinczel-bal%C3%A1zs-4714b2287/" className="rounded-md md:p-2 hover:bg-slate-600 hover:bg-opacity-30" ><Image src="/linkedin.svg" alt="linkedin logo" width={32} height={32} /></Link>
                <Link href="https://twitter.com/Blzs101" className="rounded-full md:p-2 hover:bg-slate-600 hover:bg-opacity-30" ><Image src="/twitter.svg" alt="twitter logo" width={32} height={32} /></Link>
            </div>
        </section>
    )
}