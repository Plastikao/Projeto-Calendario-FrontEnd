import ModalTitle from "./reservComponents/title";
import InputBase from "@/Component/input";
import * as React from "react";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ReservPage() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  return (
    <>
      <section className="w-full h-full flex justify-center items-center relative">
        <div className="bg-white mt-20 w-[90%] h-[750px] rounded-2xl overflow-hidden">
          <ModalTitle title="Sala Verde" />
          <div className="h-[90%] flex">
            <section className="w-[65%] bg-secondery-background py-10 flex flex-col gap-3 px-20">
              <InputBase
                InputName="Nome do solicitante"
                InputEmail="Informe seu nome completo"
              />
              <InputBase
                InputName="Email do solicitante"
                InputEmail="Informe seu email"
              />
              <div className="flex w-full gap-3">
                <div className="w-[50%] flex flex-col gap-3">
                  <InputBase
                    InputName="Nome do Projeto"
                    InputEmail="Informe o nome do projeto"
                  />
                  <InputBase InputName="" InputEmail="Hora de início" />
                  <div className="grid w-full max-w-sm items-center gap-3">
                    <Input id="picture" type="file" />
                  </div>
                </div>
                <div className="w-[50%] flex flex-col gap-3">
                  <div className="">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="default"
                          id="date"
                          className="w-full bg-white text-start items-center text-[1.1rem] justify-baseline text-black border-2 border-gray-500 rounded-md h-16"
                        >
                          {date ? date.toLocaleDateString() : "Data da Reunião"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto bg-white overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          captionLayout="dropdown"
                          onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <InputBase InputName="" InputEmail="Hora de finalização" />
                  <div className="w-full outline-0 bg-white text-start items-center text-[1.1rem] justify-baseline text-black border-2 border-gray-500 rounded-md h-16">
                    <Field className="border-yellow-400 outline-amber-700">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Participantes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">
                            Engineering
                          </SelectItem>
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
  );
}
