
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book } from "lucide-react";

interface MemberCardProps {
  nome: string;
  curso: string;
  foto: string;
  role: "ministrante" | "assistente";
}

export const MemberCard = ({ nome, curso, foto, role }: MemberCardProps) => {
  return (
    <Card className="overflow-hidden hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{nome}</span>
          <Badge className={role === "ministrante" ? "bg-secondary" : "bg-primary"}>
            {role === "ministrante" ? "Ministrante" : "Assistente"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={foto} alt={nome} />
          <AvatarFallback>{nome.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex items-center text-sm text-muted-foreground">
          <Book className="h-4 w-4 mr-2" />
          <span>{curso}</span>
        </div>
      </CardContent>
    </Card>
  );
};

import { Badge } from "@/components/ui/badge";
