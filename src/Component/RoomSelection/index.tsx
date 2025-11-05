import Rooms from '../Rooms'

const RoomSelection = () => {
    return (
        <>
            <section className="flex h-screen w-screen justify-center items-center">
                <div className="w-[93%] flex justify-center items-center bg-white h-[84%] mt-24 rounded-4xl shadow-lowShadowBanner">
                    <Rooms />
                </div>
            </section>
        </>
    )
}

export default RoomSelection
