
import { useParams } from "react-router-dom";
import { membersData } from "@/data/membersData";
import { MemberCard } from "@/components/MemberCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const MembersPage = () => {
  const { edition } = useParams();
  const editionKey = edition;
  const members = editionKey ? membersData[editionKey] : undefined;
  
  if (!members) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertDescription>
            Edição {edition} não encontrada. Por favor, selecione uma edição válida.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
        <Users className="h-10 w-10" />
        Integrantes - Edição {edition}
      </h1>
      
      <Tabs defaultValue="ministrantes" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="ministrantes">Ministrantes</TabsTrigger>
          <TabsTrigger value="assistentes">Assistentes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ministrantes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.ministrantes.map((member) => (
              <MemberCard 
                key={member.nome} 
                nome={member.nome} 
                curso={member.curso} 
                foto={member.foto} 
                role="ministrante"
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="assistentes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.assistentes.map((member) => (
              <MemberCard 
                key={member.nome} 
                nome={member.nome} 
                curso={member.curso} 
                foto={member.foto} 
                role="assistente"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MembersPage;
