
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lessonsData } from "@/data/lessonsData";
import { LessonCard } from "@/components/LessonCard";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ListOrdered } from "lucide-react";

const LessonsPage = () => {
  const [editionFilter, setEditionFilter] = useState<string | null>(null);
  
  const editions = [...new Set(lessonsData.map(lesson => lesson.edition))].sort().reverse();
  
  const filteredLessons = editionFilter 
    ? lessonsData.filter(lesson => lesson.edition === editionFilter)
    : lessonsData;

  // Group by type
  const conceptLessons = filteredLessons.filter(lesson => lesson.type === "conceito");
  const practiceLessons = filteredLessons.filter(lesson => lesson.type === "prática");
  const challengeLessons = filteredLessons.filter(lesson => lesson.type === "desafio");
  
  // Sort by order
  const sortedLessons = [...filteredLessons].sort((a, b) => a.order - b.order);

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
        <ListOrdered className="h-10 w-10" />
        Trilha de Aprendizado
      </h1>

      <div className="mb-6">
        <div className="text-lg font-medium mb-2">Filtrar por Edição:</div>
        <div className="flex flex-wrap gap-2">
          <Badge 
            onClick={() => setEditionFilter(null)} 
            className={`cursor-pointer px-3 py-1 ${!editionFilter ? 'bg-primary' : 'bg-secondary'}`}
          >
            Todas
          </Badge>
          {editions.map(edition => (
            <Badge 
              key={edition}
              onClick={() => setEditionFilter(edition)}
              className={`cursor-pointer px-3 py-1 ${editionFilter === edition ? 'bg-primary' : 'bg-secondary'}`}
            >
              {edition}
            </Badge>
          ))}
        </div>
      </div>
      
      <Tabs defaultValue="sequential" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="sequential">Sequencial</TabsTrigger>
          <TabsTrigger value="concepts">Conceitos</TabsTrigger>
          <TabsTrigger value="practice">Práticas</TabsTrigger>
          <TabsTrigger value="challenges">Desafios</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sequential">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedLessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="concepts">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conceptLessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="practice">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceLessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="challenges">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengeLessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LessonsPage;
