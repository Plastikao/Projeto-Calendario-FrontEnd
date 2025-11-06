const ScrollBase = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="text-[1.2rem]">Participantes</h2>
                <div className="w-full bg-white flex flex-col gap-2 border-[2px] p-[7px] border-gray-500 rounded-md h-32 overflow-y-auto content-center px-2">
                    <div className="flex justify-between p-3 bg-[#D9D9D9]/50">
                    <button className="btn btn-success">Clique aqui</button>
                        <h3>
                           Pedro enrique santana 
                        </h3>
                        <i>
                            X
                        </i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScrollBase