import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="font-bold text-[2.5rem] leading-[3.75rem] text-[#F0F0F0]">João Pedro</h1>
      <nav>
        <ul className="flex gap-[2.875rem]">
          <Link href="" className="text-lg text-[#F0F0F0] hover:text-[#E0E0E0] focus:text-[#A78AFB]">Sobre Min</Link>
          <Link href="" className="text-lg text-[#F0F0F0] hover:text-[#E0E0E0] focus:text-[#A78AFB]">Habilidades</Link>
          <Link href="" className="text-lg text-[#F0F0F0] hover:text-[#E0E0E0] focus:text-[#A78AFB]">Projetos</Link>
          <Link href="" className="text-lg text-[#F0F0F0] hover:text-[#E0E0E0] focus:text-[#A78AFB]">Contato</Link>
        </ul>
      </nav>
    </header>
  )
}