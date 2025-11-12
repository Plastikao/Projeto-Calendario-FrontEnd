interface Infos{
    info: string
}
export default function Info({ info } : Infos){
    return(
        <div className="flex flex-col w-full justify-center items-center">
            <h2>
                Início
            </h2>
            <div className="w-full">
                <div className="max-w-full bg-white border-[2px] border-gray-500 rounded-md h-[4rem] text-center content-center">
                    <h2 className="text-[1.1rem]">
                        {info}
                    </h2>
                </div>
            </div>
        </div>
    )   
}