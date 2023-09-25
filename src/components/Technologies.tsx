type PropsType = {
    img: string
}
function Technologies({ img }: PropsType) {

    return (
        <div className="flex items-center justify-center py-2">
            <img src={img} className="pr-4"></img>
        </div>
    )
}

export default Technologies