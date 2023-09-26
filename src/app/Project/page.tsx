import Project from "@/components/Project"
import project from "@/Json/projectpage.json"

type PropsType = {
    link: string,
    image: string,
    title: string,
    tech: string
}
export default async function ProjectPage() {

    return (
        <main className="flex flex-col w-auto h-auto gap-8 pb-8 lg:gap-10 lg:grid-cols-3 lg:grid lg:p-4">
            {project.map(({ link, image, title, tech }: PropsType) => {
                return <Project {...{ link: link, image: image, title: title, tech: tech }} key={title} />
            })}

        </main>
    )
}
