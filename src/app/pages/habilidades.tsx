import Image from "next/image"
import Css from "../../assets/css3.svg"
import Figma from "../../assets/figma.svg"
import Js from "../../assets/js.svg"
import Next from "../../assets/nextjs2.svg"
import Tailwindcss from "../../assets/tailwindcss.svg"
import Reactjs from "../../assets/reactjs.svg"
import Typescript from "../../assets/typescript.svg"
import Html5 from "../../assets/html5.svg"

export default function Habilidades() {
  return (
    <div className="flex flex-col items-center mt-[7.5rem] w-full">
      <h1  className="text-[2.5rem] font-bold leading-[3.75rem] text-[#F0F0F0]">Habilidades</h1>
      <ul className="flex mt-[5.25rem] items-center gap-24">
        <li>
            <Image
            src={Css}
            alt="Css"
            width={52}
            height={52}
          />
        </li>
        <li>
            <Image
            src={Figma}
            alt="Figma"
            width={52}
            height={52}
          />
        </li>
        <li>
            <Image
            src={Js}
            alt="Js"
            width={52}
            height={52}
          />
        </li>
        <li>
            <Image
            src={Next}
            alt="Next"
            width={52}
            height={52}
          />
        </li>
        <li>
            <Image
            src={Tailwindcss}
            alt="Tailwindcss"
            width={52}
            height={52}
          />
        </li>
        <li>
            <Image
            src={Reactjs}
            alt="Reactjs"
            width={52}
            height={52}
          />
        </li>
        <li>
            <Image
            src={Html5}
            alt="Html5"
            width={52}
            height={52}
          />
        </li>
      </ul>
    </div>
  )
}