
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HelpCircle, Users, BookOpen, GraduationCap, DollarSign, Clock } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        <HelpCircle className="h-10 w-10" />
        Sobre o Curso
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <Users className="h-6 w-6" />
            Por que Figma?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            O Figma revolucionou a forma como designers e equipes colaboram em projetos de design. 
            Como uma ferramenta baseada na nuvem, permite que múltiplas pessoas trabalhem simultaneamente 
            no mesmo arquivo, eliminando os problemas de versionamento e facilitando o feedback em tempo real.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Vantagens do Figma</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary/20 p-1 rounded mr-2 text-primary">✓</span>
                    Colaboração em tempo real
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 p-1 rounded mr-2 text-primary">✓</span>
                    Acessível de qualquer navegador
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 p-1 rounded mr-2 text-primary">✓</span>
                    Sistemas de design robustos
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 p-1 rounded mr-2 text-primary">✓</span>
                    Ferramentas de prototipagem avançadas
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 p-1 rounded mr-2 text-primary">✓</span>
                    Comunidade ativa e plugins
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Objetivos do Curso</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-secondary/20 p-1 rounded mr-2 text-secondary">→</span>
                    Dominar a interface do Figma
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary/20 p-1 rounded mr-2 text-secondary">→</span>
                    Criar protótipos interativos
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary/20 p-1 rounded mr-2 text-secondary">→</span>
                    Desenvolver design systems completos
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary/20 p-1 rounded mr-2 text-secondary">→</span>
                    Implementar fluxos de trabalho eficientes
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary/20 p-1 rounded mr-2 text-secondary">→</span>
                    Preparar para o mercado de trabalho
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            UI/UX Design na Prática
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            O design de interface do usuário (UI) e a experiência do usuário (UX) são fundamentais 
            no desenvolvimento de produtos digitais eficazes. Nosso curso aborda ambos os aspectos, 
            garantindo que você compreenda não apenas como criar interfaces visualmente atraentes, 
            mas também como projetar experiências que atendam às necessidades dos usuários.
          </p>
          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Conceito</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead className="text-right">Importância</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">UI Design</TableCell>
                  <TableCell>Design visual das interfaces, incluindo botões, ícones, espaçamento, tipografia, esquemas de cores e outros elementos visuais.</TableCell>
                  <TableCell className="text-right">Alta</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">UX Design</TableCell>
                  <TableCell>Foco na experiência geral que os usuários têm com um produto, garantindo que ele seja intuitivo, eficiente e agradável de usar.</TableCell>
                  <TableCell className="text-right">Alta</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Pesquisa de Usuário</TableCell>
                  <TableCell>Entender as necessidades, comportamentos e motivações dos usuários através de métodos de pesquisa.</TableCell>
                  <TableCell className="text-right">Média</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prototipagem</TableCell>
                  <TableCell>Criação de modelos interativos que simulam como o produto final irá funcionar.</TableCell>
                  <TableCell className="text-right">Alta</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Design System</TableCell>
                  <TableCell>Conjunto de padrões, componentes e diretrizes para criar produtos consistentes e escaláveis.</TableCell>
                  <TableCell className="text-right">Média</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Metodologia de Ensino
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Nosso curso combina teoria e prática, com ênfase em projetos reais que simulam um projeto simples. 
            Os alunos têm acesso a materiais didáticos e vídeo-aulas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium text-center mb-2">Aulas Teóricas</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Fundamentos do design e conceitos de UI/UX apresentados de forma clara e objetiva.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium text-center mb-2">Projetos Práticos</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Criação de interfaces reais como WhatsApp, Pinterest e outros aplicativos populares.
                </p>
              </CardContent>
            </Card>
            {/* <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium text-center mb-2">Feedback Constante</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Avaliação detalhada dos projetos com sugestões de melhorias e direcionamento.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Oportunidades de Carreira
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            O mercado para designers UI/UX está em constante crescimento, com empresas de todos os tamanhos 
            buscando profissionais que possam criar experiências digitais excepcionais. Ao dominar o Figma 
            e os conceitos de design, você estará preparado para diversas oportunidades de carreira.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Áreas de Atuação</h3>
                <ul className="space-y-2">
                  <li>UI Designer</li>
                  <li>UX Designer</li>
                  <li>Product Designer</li>
                  <li>Web Designer</li>
                  <li>Mobile Designer</li>
                  <li>Design System Specialist</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Expectativa Salarial</h3>
                <ul className="space-y-2">
                  <li>Júnior: R$ 3.000 a R$ 5.000</li>
                  <li>Pleno: R$ 5.000 a R$ 8.000</li>
                  <li>Sênior: R$ 8.000 a R$ 15.000</li>
                  <li>Especialista: R$ 15.000+</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        

      </div>
    </div>
  );
};

export default AboutPage;
