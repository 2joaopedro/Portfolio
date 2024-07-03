import ProjetoCard from "@/components/ProjetoCard";
import { ExternalLink, GitHub } from "react-feather";
import IgniteTime from "../../assets/IgniteTIme.png"
import IgniteTodo from "../../assets/IgniteTodo.png"
import Pokedex from "../../assets/Pokedex.png"

export default function Projetos() {
  return (
    <div className="flex flex-col items-center mt-[7.5rem] w-full">
      <h1 className="text-[2.5rem] font-bold leading-[3.75rem] text-[#F0F0F0]">Projetos</h1>
      <div className="flex flex-col w-full mt-12">
      <ProjetoCard 
        title="Ignite-Time"
        description="Nesse projeto foi feito um pomodoro para ajudar os desenvolvedores focar em seus projetos."
        image={IgniteTime}
        tecs={["Vite", "StyledComponents", "React.Js"]}
        links={[
          { url: "https://github.com/2joaopedro/Ignite-Time?tab=readme-ov-file", icon: <GitHub className="text-[#F0F0F0]" /> },
          { url: "https://ignite-time-beta.vercel.app/", icon: <ExternalLink className="text-[#F0F0F0]" /> }
        ]}  
      />

      <ProjetoCard 
        title="Ignite-ToDo"
        description="Nesse projeto foi feito um To-Do para ajuadar a organizar suas tarefas."
        image={IgniteTodo}
        tecs={["Vite", "StyledComponents", "React.Js"]}
        links={[
          { url: "https://github.com/2joaopedro/Ignite-ToDo", icon: <GitHub className="text-[#F0F0F0]" /> },
          { url: "https://ignite-to-do-tau.vercel.app/", icon: <ExternalLink className="text-[#F0F0F0]" /> }
        ]}  
      />
       <ProjetoCard 
        title="Pokedex"
        description="Nesse projeto foi feito uma Pokedex."
        image={Pokedex}
        tecs={["Next", "Tailwnld", "React.Js"]}
        links={[
          { url: "https://github.com/2joaopedro/pokedex?tab=readme-ov-file", icon: <GitHub className="text-[#F0F0F0]" /> },
          { url: "https://pokedex-sigma-sage.vercel.app/", icon: <ExternalLink className="text-[#F0F0F0]" /> }
        ]}  
      />
      </div>
    </div>
  )
}