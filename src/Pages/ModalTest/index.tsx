import Info from "./modal-components/info"
import ModalTitle from "./modal-components/title"
import InputBase from "@/Component/input"
import ScrollBase from "@/Component/scroll"

const ModalPage = () => {
    return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondery-background w-140 h-180 rounded-2xl">
                <ModalTitle />
                <div className="p-4">
                    <section className="flex flex-col gap-8">
                        <InputBase />
                        <div className="flex gap-7 justify-between">
                            <Info />
                            <Info />
                            <Info />
                        </div>
                    </section>
                    <ScrollBase />
                </div>
            </div>
    )
}

export default ModalPage