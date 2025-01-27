import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqData = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Desde o dia 01 você verá melhorias significativas em suas habilidades linguísticas seguindo nosso método."
  },
  {
    question: "Isso é adequado para iniciantes completos?",
    answer: "Sim! Nosso método foi projetado para funcionar em todos os níveis, desde iniciantes completos até alunos avançados que buscam aperfeiçoar suas habilidades."
  },
  {
    question: "E se eu não ficar satisfeito com o produto?",
    answer: "Oferecemos garantia de devolução do dinheiro em 7 dias. Se você não ficar completamente satisfeito, devolveremos seu dinheiro sem fazer perguntas."
  },
  {
    question: "Como funciona os encontros ao vivo?",
    answer: "Encontros com duração de 1h onde realizamos diversas atividades para alcançar a fluência conversacional."
  },
  {
    question: "Como isso é diferente de outros métodos de aprendizado de idiomas?",
    answer: "O Vitor criou e utilizou o método dual flow para destravar a fluência em diversos idiomas, criando uma abordagem única que acelera o aprendizado enquanto garante retenção a longo prazo."
  }
];

const FAQ = () => {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,185,225,0.2)_5.9%,rgba(134,172,232,0.2)_64%,rgba(246,219,245,0.2)_89%)] pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-neon uppercase bg-neon/10 rounded-full animate-fade-up">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-neon to-white animate-fade-up">
          Perguntas Frequentes
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed animate-fade-up" 
             style={{ animationDelay: "200ms" }}>
                Encontre respostas para perguntas comuns sobre nossa plataforma e serviços
          </p>
        </div>

        <div className="mx-auto max-w-4xl animate-fade-up" style={{ animationDelay: "400ms" }}>
          <Card className="border-2 border-neon/20 bg-secondary/50 backdrop-blur-sm shadow-2xl shadow-neon/10">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  value={`item-${index}`} 
                  key={index}
                  className="px-6 border-b border-neon/10 last:border-0 group"
                >
                  <AccordionTrigger 
                    className="py-6 text-lg font-medium text-white hover:text-neon transition-colors group-hover:bg-neon/5"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    <div className="pl-4 border-l-2 border-neon/20">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-neon/30 rounded-full blur-3xl opacity-20" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon/20 rounded-full blur-3xl opacity-20" />
      </div>
    </section>
  );
};

export default FAQ;