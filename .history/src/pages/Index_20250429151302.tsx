
import { SeasonCard } from "@/components/SeasonCard";

const seasons = [
  {
    title: "Clone do Whatsapp com Figma",
    version: "2024.1",
    description: "Aprenda os conceitos básicos ao intermediario com a interface do Figma",
    //lessons: 25,
  },
  {
    title: "Clone do Whatsapp com Figma",
    version: "2024.2",
    description: "Aprenda os conceitos básicos com a interface do Figma",
   // lessons: 23,
  },
  {
    title: "Contruindo o Pinterest no Figma",
    version: "2025.1",
    description: "Básico do figma, para iniciantes",
    lessons: 10,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
