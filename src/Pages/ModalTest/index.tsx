import Info from "./modal-components/info"
import ModalTitle from "./modal-components/title"
import InputBase from "@/Component/input"
import ScrollFiles from "@/Component/scroll/scrollFiles"
import ScrollParticipants from "@/Component/scroll/scrollParticipants"

const ModalPage = () => {
    const meeting = {
        meetingId: "15",
        projectName: "embriologi",
        ownerName: "Aron Enrique Vargas",
        ownerEmail: "aronvargas@gmail.com",
        meetingDate: "15/12/2025",
	    startTime: "13:00:00",
	    endTime: "15:30:00",
        participants: [
            {
                id: "12",
                owner: true,
                user: {
                    id: "14",
                    name: "Aron Enrique Vargas",
                    cpf: "111.111.111-11",
                    password: "apexlove@123.com",
                }
            },
            {
                id: "13",
                owner: false,
                user: {
                    id: "15",
                    name: "boa noite",
                    cpf: "222.222.222-22",
                    password: "apexlove@639.com",
                }
            }
        ]
    }

    const participants = meeting.participants.map(
        (participant) => {
            return participant.user.name
        }
    )

    return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondery-background w-140 h-180 rounded-2xl">
                <ModalTitle title={meeting.projectName}/>
                <div className="px-12 py-6 flex flex-col gap-5">
                        <InputBase InputName={meeting.ownerName} InputEmail={meeting.ownerEmail} InputTitle=" "/>
                        <div className="flex gap-7 justify-between">
                            <Info info={meeting.startTime}/>
                            <Info info={meeting.endTime}/>
                            <Info info={meeting.meetingDate}/>
                        </div>
                            <ScrollParticipants itens={ participants }/>
                            <ScrollFiles itens={ ["vish.mp3","eita.tsx", "laele.pdf"] }/>
                </div>
            </div> 
    )
}

export default ModalPage