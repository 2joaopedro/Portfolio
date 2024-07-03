import Image from "next/image"
import Foto from "../../assets/foto.png"

export default function Sobremin () {
  return (
    <div className="flex items-center mt-[7.5rem] w-full">
      <div>
        <h1 className="text-[2.5rem] font-bold leading-[3.75rem] text-[#F0F0F0]">Sobre Min</h1>
        <p className="w-[35.5rem] text-2xl leading-8 mt-[3.875rem] text-[#F0F0F0]">Olá! Sou João Pedro, desenvolvedor web e estudante de ADS. Tenho uma paixão por utilizar tecnologias para resolver problemas reais e impactar positivamente a vida das pessoas. 
          Meu objetivo é criar soluções inovadoras e eficientes, sempre buscando aprimorar minhas habilidades e conhecimentos.</p>
      </div>
        <Image
        src={Foto}
        alt="Foto"
        width={360}
        height={430}
        className="right-36 absolute"
      />
    </div>
  )
}