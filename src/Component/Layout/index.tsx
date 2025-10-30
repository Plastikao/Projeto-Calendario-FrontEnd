import { ArrowLeftIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RoomSelection from './RoomSelection'

const Layout = () => {
    return (
        <>
            <div className="bg-background-gray w-screen h-screen relative">
                <div className="flex bg-background-banner w-screen min-h-24  items-center shadow-shadowBanner pl-12 gap-5 absolute">
                    <div className="flex flex-col gap-8 ">
                        <Button
                            variant="secondary"
                            size="icon-sm"
                            className="rounded-full p-6 cursor-pointer "
                        >
                            <ArrowLeftIcon />
                        </Button>
                    </div>
                    <h1 className="text-white font-bold text-left text-[1.7rem] text-shadow-black-100">
                        Reserva de Salas
                    </h1>
                </div>
                <RoomSelection />
            </div>
        </>
    )
}

export default Layout
