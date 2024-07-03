import Link from "next/link";
import { GitHub, Linkedin, Mail } from "react-feather";

export default function Contato() {
  return (
    <div className="flex flex-col items-center mt-[7.5rem] w-full">
       <h1 className="text-[2.5rem] font-bold leading-[3.75rem] text-[#F0F0F0]">Entrar em Contato</h1>
       <p className="text-2xl font-semibold leading-8 w-[46rem] text-center  mt-10 text-[#F0F0F0]">Em caso queira entrar em contato comigo, você pode enviar um email ou mandar uma mensagem nas minhas redes sociais.</p>
       <Link href="https://wa.me/5514982254049" className="flex justify-center items-center rounded-lg font-bold text-2xl mt-36 text-[#F0F0F0] bg-[#9071E9] w-[12.4375rem] h-[5.5rem]">Fale Comigo</Link>
       <div className="flex  gap-14 justify-center items-center mt-32 text-[#E0E0E0]">
          <Link href="https://www.linkedin.com/in/jo%C3%A3o-pedro-franchini-56b5821ba/"><Linkedin size={35}/></Link>
            <Link href="https://github.com/2joaopedro"> <GitHub size={35}/></Link>
          <Link href="mailto:joao.pedro.franchini.4@gmail.com "><Mail size={35}/></Link>
       </div>
       <div className="flex gap-2 justify-center items-center mt-36">
          <Link href="https://github.com/2joaopedro" className="text-[#9071E9] text-lg font-semibold leading-8">Designed & Built by</Link>
          <p className="text-[#E0E0E0] text-lg font-semibold leading-8">João Pedro Franchini</p>
       </div>
   </div>
  )
}