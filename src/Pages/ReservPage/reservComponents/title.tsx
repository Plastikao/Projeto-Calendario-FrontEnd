interface Title{
    title: string
}

export default function ModalTitle({title}: Title){
    return(
        <div className="p-50px h-[10%] w-[100%] bg-primary-green rounded-t-2xl flex justify-center items-center text-white font-bold text-shadow-2xs text-[1.7rem]">
            <h1>{title}</h1>
        </div>
    )
}