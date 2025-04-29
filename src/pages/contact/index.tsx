
import { contactsData } from "@/data/contactsData";
import { ContactCard } from "@/components/ContactCard";
import { Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        <Mail className="h-10 w-10" />
        Entre em Contato
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        Nossa equipe está sempre disponível para ajudar e responder dúvidas. Conecte-se com nossos instrutores e coordenadores através dos canais abaixo.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactsData.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
