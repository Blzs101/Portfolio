import Technologies from "@/components/Technologies";
import technologies from "@/Json/infopage.json"
import About from "@/components/About";
import Image from "next/image"
export default function InfoPage() {


    return (
        <main className="flex flex-col overflow-auto">
            <section className="grid items-center justify-center h-full gap-4 py-16 mx-auto lg:grid-cols-2">
                <div className="relative w-full  md:w-4/5 aspect-video mx-auto">
                    <Image src="/front-end-developer.jpg" alt="" fill className="rounded-md object-cover " />
                </div>
                <About />
            </section>
            <footer className="bottom-0 flex flex-wrap items-center justify-center h-auto p-2 md:flex-row">
                <h2 className="pb-2 text-3xl font-bold">Tech stack:</h2>
                {technologies.map(({ img, alt }) => {
                    return <Technologies {...{ img: img, alt: alt }} key={img} />
                })}
            </footer>
        </main>
    )
}
