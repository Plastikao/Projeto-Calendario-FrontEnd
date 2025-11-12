import Participante from "../../participants"

{ /* import '../../../src/bootstrap.css'*/ }

interface ListaProps {
  itens: string[]
}

const ScrollFiles = ({ itens }: ListaProps) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h2 className="text-[1.2rem]">Arquivos</h2>
                <div className="w-full bg-white flex flex-col gap-2 border-2 p-[7px] border-gray-500 rounded-md h-32 overflow-y-auto content-center px-2">
    
    <ul className="flex flex-col gap-2">
      {itens.map((item, index) => (
        <div className="flex justify-between p-2  bg-[#D9D9D9]/50"><li key={index}>{item}</li></div>
      ))}
    </ul>

                </div>
            </div>
        </>
    )
}

export default ScrollFiles