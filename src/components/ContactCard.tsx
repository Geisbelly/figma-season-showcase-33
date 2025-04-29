
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram, Mail, Phone } from "lucide-react";

interface SocialLink {
  type: "linkedin" | "github" | "instagram" | "whatsapp" | "email" | "phone";
  url: string;
}

interface ContactCardProps {
  name: string;
  role: string;
  photo: string;
  description: string;
  socialLinks: SocialLink[];
}

export const ContactCard = ({ name, role, photo, description, socialLinks }: ContactCardProps) => {
  const getSocialIcon = (type: string) => {
    switch (type) {
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "github":
        return <Github className="h-5 w-5" />;
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "whatsapp":
        return <Phone className="h-5 w-5" />;
      case "email":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  const getSocialLabel = (type: string) => {
    switch (type) {
      case "linkedin":
        return "LinkedIn";
      case "github":
        return "GitHub";
      case "instagram":
        return "Instagram";
      case "whatsapp":
        return "WhatsApp";
      case "email":
        return "Email";
      case "phone":
        return "Telefone";
      default:
        return "Contato";
    }
  };

  return (
    <Card className="overflow-hidden hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={photo} alt={name} />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-center">{description}</p>
        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((link, index) => (
            <Button 
              key={index} 
              variant="outline" 
              className="text-xs"
              onClick={() => window.open(link.url, "_blank")}
            >
              {getSocialIcon(link.type)}
              <span className="ml-1">{getSocialLabel(link.type)}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
