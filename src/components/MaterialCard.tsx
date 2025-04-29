
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Figma, Image } from "lucide-react";

interface MaterialCardProps {
  title: string;
  description: string;
  type: "slide" | "modelo" | "recursos";
  url: string;
  icon: "presentation" | "figma" | "resources";
}

export const MaterialCard = ({ title, description, type, url, icon }: MaterialCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "presentation":
        return <FileText className="h-5 w-5" />;
      case "figma":
        return <Figma className="h-5 w-5" />;
      case "resources":
        return <Image className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getBadgeColor = () => {
    switch (type) {
      case "slide":
        return "bg-blue-500";
      case "modelo":
        return "bg-purple-500";
      case "recursos":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "slide":
        return "Slides";
      case "modelo":
        return "Modelo Figma";
      case "recursos":
        return "Recursos";
      default:
        return "Material";
    }
  };

  return (
    <Card className="overflow-hidden hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge className={`${getBadgeColor()}`}>
            {getTypeLabel()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => window.open(url, "_blank")}>
          <span className="mr-2">{getIcon()}</span>
          Acessar Material
        </Button>
      </CardFooter>
    </Card>
  );
};
