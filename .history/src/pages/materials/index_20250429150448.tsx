
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { materialsData } from "@/data/materialsData";
import { MaterialCard } from "@/components/MaterialCard";
import { FileText } from "lucide-react";
import { useState } from "react";

const MaterialsPage = (editionFilter?) => {
  const [editionFilter, setEditionFilter] = useState<string | null>(null);
  
  const editions = [...new Set(materialsData.map(material => material.edition))].sort().reverse();
  
  const filteredMaterials = editionFilter 
    ? materialsData.filter(material => material.edition === editionFilter)
    : materialsData;
  
  const slides = filteredMaterials.filter(material => material.type === "slide");
  const models = filteredMaterials.filter(material => material.type === "modelo");
  const resources = filteredMaterials.filter(material => material.type === "recursos");

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
        <FileText className="h-10 w-10" />
        Materiais do Curso
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
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="slides">Slides</TabsTrigger>
          <TabsTrigger value="models">Modelos Figma</TabsTrigger>
          <TabsTrigger value="resources">Recursos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, index) => (
              <MaterialCard key={index} {...material} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="slides">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((material, index) => (
              <MaterialCard key={index} {...material} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="models">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((material, index) => (
              <MaterialCard key={index} {...material} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((material, index) => (
              <MaterialCard key={index} {...material} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MaterialsPage;

import { Badge } from "@/components/ui/badge";
