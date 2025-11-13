import ModalTitle from "./reservComponents/title"
import InputBase from "@/Component/input"
import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ReservPage(){
const [open, setOpen] = React.useState(false)
const [date, setDate] = React.useState<Date | undefined>(undefined)
    return (
        <>
            <section className="w-full h-full flex justify-center items-center relative">
                <div className="bg-white mt-20 w-[90%] h-[750px] rounded-2xl overflow-hidden">
                    <ModalTitle title="Sala Verde"/>
                    <div className="h-[90%] flex">
                        <section className="w-[65%] bg-secondery-background py-10 flex flex-col  px-20">
                            <InputBase InputName="Nome do solicitante" InputEmail="Informe seu nome completo" />
                            <InputBase InputName="Email do solicitante" InputEmail="Informe seu email" />
                        <div className="flex w-full gap-3">
                            <div className="w-[50%]">
                                <InputBase InputName="Nome do Projeto" InputEmail="Informe o nome do projeto"/>
                                <InputBase InputName="" InputEmail="Hora de início"/>
                                <div className="grid w-full max-w-sm items-center gap-3">
      <Input id="picture" type="file" />
    </div>
                            </div>
                            <div className="w-[50%]">
                                <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 bg-white justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Data da Reunião"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
                                <InputBase InputName="" InputEmail="Hora de finalização"/>
 <div className="w-full max-w-md bg-white">
      <Field>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Participantes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
                            </div>
                        </div>
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