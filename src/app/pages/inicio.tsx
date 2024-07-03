import Image from "next/image";
import Icon from "../../assets/Vector.svg"
export default function Inicio () {
  return (
    <div className="mt-20 relative w-full">
      <Image
        src={Icon}
        alt="Icon"
        width={100}
        height={100}
        className="absolute top-[-1rem] left-[-2rem] -z-10"
      />
    <h1 className="text-7xl font-bold leading-[5rem] w-[35.4375rem] text-[#F0F0F0]">
      Desenvolvedor Front End & UX/UI Designer
    </h1>
    <div className="flex gap-1 mt-[1.875rem]">
      <p className="text-2xl text-[#F0F0F0]">Localizado em</p>
      <p className="text-2xl font-semibold text-[#9071E9]">Nova Odessa 🏠</p>
    </div>
  </div>
  )
}