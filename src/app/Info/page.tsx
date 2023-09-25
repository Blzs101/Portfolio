import Technologies from "@/components/Technologies";
import technologies from "@/Json/infopage.json"
import About from "@/components/About";

export default function InfoPage() {


    return (
        <main className="flex flex-col">
            <section className="grid items-center justify-center h-full gap-4 py-20 mx-auto lg:grid-cols-2">
                <img src="/front-end-developer.jpg" className="rounded-md object-fit "></img>
                <About />
            </section>
            <footer className="bottom-0 flex flex-wrap items-center justify-center h-auto p-2 md:flex-row">
                <h2 className="pb-2 text-3xl font-bold">Tech stack:</h2>
                {technologies.map(({ img }) => {
                    return <Technologies {...{ img: img }} key={img} />
                })}
            </footer>
        </main>
    )
}
