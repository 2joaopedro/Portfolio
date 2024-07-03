export function Formacao() {
  return (
    <div className="flex flex-col items-center mt-[7.5rem] space-y-8 w-full">
      <h1 className="text-[2.5rem] font-bold leading-[3.75rem] text-[#F0F0F0] break-words">Formação</h1>
      <div className="flex  gap-52">
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-semibold text-[#F0F0F0]">Unimar</h1>
          <div className="flex items-center">
            <span className="text-[#F0F0F0] mr-2">Finalizando</span>
            <h2 className="text-lg font-semibold text-purple-600">Bacharel</h2>
          </div>
          <p className="text-base text-[#F0F0F0] w-96">
            Análise e desenvolvimento de sistemas.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-semibold text-[#F0F0F0]">Rockseat</h1>
          <div className="flex items-center">
            <span className="text-[#F0F0F0] mr-2">Concluido</span>
            <h2 className="text-lg font-semibold text-purple-600">Curso Intensivo</h2>
          </div>
          <p className="text-base text-[#F0F0F0] w-96">
            Aprendi muito com Front End usando diversas tecnologias mais recentes.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-semibold text-[#F0F0F0]">Origamind</h1>
          <div className="flex items-center">
            <span className="text-[#F0F0F0] mr-2">Fazendo</span>
            <h2 className="text-lg font-semibold text-purple-600">Curso Intensivo</h2>
          </div>
          <p className="text-base text-[#F0F0F0] w-96">
            Nesse curso estou aprendendo a criar projetos incriveis pegando toda parte do Front End e do UX/UI Designer. 
          </p>
        </div>
      </div>
    </div>
  );
}
