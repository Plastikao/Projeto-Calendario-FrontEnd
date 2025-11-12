interface ParticipantsProps {
    ParticipantName: string
}

export default function Participante({ ParticipantName }: ParticipantsProps){
    return(
                            <div className="flex justify-between p-2  bg-[#D9D9D9]/50">
                        <h3>
                           {ParticipantName}
                        </h3>
                        <i>
                              X
                        </i>
                    </div>
    )
}