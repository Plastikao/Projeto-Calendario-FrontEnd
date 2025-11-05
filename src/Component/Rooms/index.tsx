import Roomcard from '../Roomcard'

const Rooms = () => {
    return (
        <main className="flex w-full justify-around px-10 ">
            <section className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center ">
                {/* <section className="flex flex-wrap justify-center items-center gap-10"> */}
                <Roomcard
                    RoomBorder="border-primary-green"
                    RoomTitle="Sala Verde"
                    RoomIMG="/public/SalaVerdeFoto.jpg"
                />

                <Roomcard
                    RoomTitle="Sala Amarela"
                    RoomBorder="border-primary-yellow"
                    RoomIMG="/public/SalaAmarelaFoto.jpg"
                />
                <Roomcard
                    RoomBorder="border-primary-purple"
                    RoomTitle="Sala TI"
                    RoomIMG="/public/SalaRoxaFoto.jpg"
                />
                <Roomcard
                    RoomBorder="border-primary-blue"
                    RoomTitle="Sala Azul"
                    RoomIMG="/public/SalaAzulFoto.jpg"
                />

                <Roomcard
                    RoomTitle="Auditório"
                    RoomBorder="border-primary-cyan"
                    RoomIMG="/public/SalaAzulFoto.jpg"
                />
                <Roomcard
                    RoomTitle="Sala de Treinamento"
                    RoomBorder="border-primary-red"
                    RoomIMG="/public/SalaAzulFoto.jpg"
                />
                <Roomcard
                    RoomTitle="SQUAD"
                    RoomBorder="border-primary-orange"
                    RoomIMG="/public/SalaAzulFoto.jpg"
                />
            </section>
        </main>
    )
}

export default Rooms
