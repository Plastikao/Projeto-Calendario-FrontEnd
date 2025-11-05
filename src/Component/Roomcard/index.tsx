interface RoomcardProps {
    RoomTitle: string
    RoomBorder: string
    RoomIMG: string
}

const Roomcard = ({
    RoomTitle = '',
    RoomBorder = '',
    RoomIMG = '',
}: RoomcardProps) => {
    return (
        <section
            className="
        rounded-[30px]
        overflow-hidden
        shadow-lowShadowBanner
        w-full
        h-67
        text-3xl
        font-medium text-center
        flex
        flex-col
        gap-4
        duration-300
        ease-in-out
        hover:scale-103
        cursor-pointer
        "
        >
            <div className={`w-full overflow-hidden border-b-15 ${RoomBorder}`}>
                <img
                    src={RoomIMG}
                    alt="Img Sala amarela"
                    className="w-full   overflow-hidden"
                />
            </div>
            <div>
                <h2 className={`hover:border-b-2 inline-block ${RoomBorder}`}>
                    {RoomTitle}
                </h2>
            </div>
        </section>
    )
}

export default Roomcard
