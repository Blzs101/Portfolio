import Socials from "@/components/Socials"
import Email from "@/components/Email"

export default function ContactPage() {

    return (
        <main className="flex flex-col h-auto grid-cols-2 md:items-center md:justify-center md:grid">
            <Socials />
            <Email />
        </main>
    )
}
