
import { Header } from "@/components/Header";
import { SeasonCard } from "@/components/SeasonCard";

const seasons = [
  {
    title: "Fundamentos do Figma",
    version: "2024.1",
    description: "Aprenda os conceitos básicos e a interface do Figma",
    lessons: 12,
  },
  {
    title: "Design Systems",
    version: "2024.1",
    description: "Crie e gerencie sistemas de design escaláveis",
    lessons: 8,
  },
  {
    title: "Prototipagem Avançada",
    version: "2024.1",
    description: "Desenvolva protótipos interativos e animações",
    lessons: 10,
  },
  {
    title: "Auto Layout & Constraints",
    version: "2024.1",
    description: "Domine layouts responsivos e constraints",
    lessons: 6,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <section className="mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold mb-4">
            Aprenda Figma do Zero ao Avançado
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Domine a ferramenta mais popular de design de interface e prototipagem. Curso atualizado com as últimas features do Figma.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-8">Temporadas Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasons.map((season) => (
              <SeasonCard key={season.title} {...season} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
