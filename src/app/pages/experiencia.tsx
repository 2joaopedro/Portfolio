export function Experiencia() {
  return (
    <div className="flex flex-col items-center mt-[7.5rem] space-y-8 w-full">
      <h1 className="text-[2.5rem] font-bold leading-[3.75rem] text-[#F0F0F0] break-words">Experiência</h1>
      <div className="flex  gap-52">
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-semibold text-[#F0F0F0]">LoginServ</h1>
          <div className="flex items-center">
            <span className="text-[#F0F0F0] mr-2">2019 - 2020</span>
            <h2 className="text-lg font-semibold text-purple-600">Auxiliar Administrativo</h2>
          </div>
          <p className="text-base text-[#F0F0F0] w-96">
            Lançamentos de O.S. em sistema ERP, emissão de relatórios de produção diária em Excel
            Gerenciamento de arquivos digitais e físicos do departamento pessoal
            Fechamento de benefícios e atendimento ao público.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-semibold text-[#F0F0F0]">Acim</h1>
          <div className="flex items-center">
            <span className="text-[#F0F0F0] mr-2">2022 - 2023</span>
            <h2 className="text-lg font-semibold text-purple-600">Helpdesk</h2>
          </div>
          <p className="text-base text-[#F0F0F0] w-96">
            Formatação de computadores, cotação de materiais
            Resolução de problemas em computadores, impressoras e telefones
            Participação em reuniões de projetos para os associados.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-semibold text-[#F0F0F0]">LoginServ</h1>
          <div className="flex items-center">
            <span className="text-[#F0F0F0] mr-2">2024 - 2024</span>
            <h2 className="text-lg font-semibold text-purple-600">Desenvolvedor Full-Stack</h2>
          </div>
          <p className="text-base text-[#F0F0F0] w-96">
            Estou trabalhando em um projeto ERP para a empresa que trabalha em terceirização de serviços.
            As tecnologias que estou usando são React.js, Typescript, Next.js, Tailwind, Kotlin, Mysql, Spring Boot.
          </p>
        </div>
      </div>
    </div>
  );
}
