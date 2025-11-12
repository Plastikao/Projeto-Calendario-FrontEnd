import ModalTitle from "./reservComponents/title"
import InputBase from "@/Component/input"

export default function ReservPage(){
    return (
        <>
            <section className="w-full h-full flex justify-center items-center relative">
                <div className="bg-white mt-20 w-[90%] h-[750px] rounded-2xl overflow-hidden">
                    <ModalTitle title="Sala Verde"/>
                    <div className="h-[90%] flex">
                        <section className="w-[65%] bg-secondery-background py-10 px-20">
                            <InputBase InputName="Nome do solicitante" InputEmail="Informe seu nome completo" />
                        </section>

                        <section className="w-[35%] bg-[#F3FFF3] flex flex-col items-center p-5">
                            <h2 className="font-bold text-4xl">Reservas</h2>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}