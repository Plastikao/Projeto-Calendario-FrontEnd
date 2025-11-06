import ModalTitle from "./modal-components/title"

const ModalPage = () => {
    return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondery-background w-130 h-180 rounded-2xl">
                <ModalTitle />
            </div>
    )
}

export default ModalPage