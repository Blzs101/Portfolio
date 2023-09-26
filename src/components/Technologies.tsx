import Image from "next/image"
type PropsType = {
    img: string,
    alt: string
}
export default function Technologies({ img, alt }: PropsType) {

    return (
        <div className="flex items-center justify-center py-2">
            <Image src={img} className="pr-4" alt={alt} width={64} height={64} loading="eager" />
        </div>
    )
}



