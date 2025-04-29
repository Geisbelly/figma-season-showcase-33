
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, BookOpen, Dumbbell, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface LessonCardProps {
  title: string;
  description: string;
  type: "conceito" | "prática" | "desafio";
  duration: number;
  difficulty: "iniciante" | "intermediário" | "avançado";
  edition: string;
  order: number;
}

export const LessonCard = ({ 
  title, 
  description, 
  type, 
  duration, 
  difficulty, 
  edition,
  order
}: LessonCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "conceito":
        return <BookOpen className="h-5 w-5" />;
      case "prática":
        return <Dumbbell className="h-5 w-5" />;
      case "desafio":
        return <Trophy className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getTypeBadgeColor = () => {
    switch (type) {
      case "conceito":
        return "bg-blue-500";
      case "prática":
        return "bg-purple-500";
      case "desafio":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const getDifficultyBadgeColor = () => {
    switch (difficulty) {
      case "iniciante":
        return "bg-green-500";
      case "intermediário":
        return "bg-yellow-500";
      case "avançado":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "conceito":
        return "Conceito";
      case "prática":
        return "Prática";
      case "desafio":
        return "Desafio";
      default:
        return "Lição";
    }
  };

  return (
    <Card className="overflow-hidden hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <Badge variant="outline" className="bg-secondary/25">
              #{order}
            </Badge>
            <Badge className={getTypeBadgeColor()}>
              {getTypeLabel()}
            </Badge>
          </div>
          <Badge className={getDifficultyBadgeColor()}>
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Edição {edition}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/lessons/${order}`}>
            <span className="mr-2">{getTypeIcon()}</span>
            Ver Conteúdo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
