import Roomcard from '../Roomcard'

interface RoomcardProps{
    RoomBorder: string,
    RoomTitle: string,
    RoomIMG: string
}

const rooms = [
    {
        id: "1",
        roomColor: "1BCC3C",
        name: "Sala Verde",
        roomPhoto: "SalaVerdeFoto.jpg",
    },
    {
        id: "2",
        roomColor: "1943CD",
        name: "Sala Azul",
        roomPhoto: "SalaAzulFoto.jpg",
    },
    {
        id: "3",
        roomColor: "FFAE00",
        name: "Sala Amarela",
        roomPhoto: "SalaAmarelaFoto.jpg",
    },
        {
        id: "4",
        roomColor: "DE003F",
        name: "SQUAD",
        roomPhoto: "SalaVerdeFoto.jpg",
    },
        {
        id: "5",
        roomColor: "FFAE00",
        name: "Sala Roxa",
        roomPhoto: "SalaRoxaFoto.jpg",
    },
        {
        id: "6",
        roomColor: "3D97E0",
        name: "Sala Auditório",
        roomPhoto: "SalaVerdeFoto.jpg",
    },
        {
        id: "7",
        roomColor: "FF8000",
        name: "Sala de Treinamento",
        roomPhoto: "SalaVerdeFoto.jpg",
    },
]

const Rooms = () => {
    return (
        <main className="flex w-full justify-around px-10 ">
            <section className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center ">
                {rooms.map(room => (
                    <Roomcard
                        RoomBorder= {`border-[#${room.roomColor}]`}
                        RoomTitle={`${room.name}`}
                        RoomIMG={`/public/${room.roomPhoto}`}
                    />
                ))}
            </section>
        </main>
    )
}

export default Rooms
