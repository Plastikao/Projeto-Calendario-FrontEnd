    interface InputProps{
        InputName: string,
        InputTitle?: string,
        InputEmail?: string
    }

const InputBase = ({InputName, InputEmail, InputTitle}: InputProps) => {
    
    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="text-[1.2rem]">{InputTitle}</h2>
                <div className="w-full bg-white border-[2px] border-gray-500 rounded-md h-[4rem] content-center px-2">
                    <h2 className="text-[1.1rem]">{InputName}</h2>
                    <h3 className="text-[0.9rem] text-black/50">{InputEmail}</h3>
                </div>
            </div>
        </>
    )
}

export default InputBase