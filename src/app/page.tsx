import Habilidades from "./pages/habilidades";
import Inicio from "./pages/inicio";
import Projetos from "./pages/projetos";
import Sobremin from "./pages/sobremin";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start relative">
      <Inicio />
      <Sobremin />
      <Habilidades />
      <Projetos />
    </div>
  );
}
