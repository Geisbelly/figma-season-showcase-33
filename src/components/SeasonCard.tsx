
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

interface SeasonCardProps {
  title: string;
  version: string;
  description: string;
  lessons: number;
}

export const SeasonCard = ({ title, version, description, lessons }: SeasonCardProps) => {
  return (
    <Card className="hover:border-primary/50 transition-colors cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge variant="secondary" className="ml-2">
            {version}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-muted-foreground text-sm">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span>{lessons} lições</span>
        </div>
      </CardContent>
    </Card>
  );
};
