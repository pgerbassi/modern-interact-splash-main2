import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
//import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Check } from "lucide-react";

const features = [
  "Metodologia completa de aprendizado",
  "Conteúdo estruturado",
  "Exercícios práticos e planilhas",
  "Ferramentas de acompanhamento de progresso",
  "Acesso a todas às atualizações na plataforma",
  "Garantia de 7 dias",
];

const PricingCard = ({
  type,
  price,
  period,
  buttonText,
  variant = "default",
}: {
  type: string;
  price: number;
  period: string;
  buttonText: string;
  variant?: "default" | "outline";
}) => (
    <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#0EA5E9] rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient blur-lg"></div>
    <Card className={`relative w-full max-w-md p-6 transform transition-all duration-300 hover:scale-105 ${
      variant === "default" ? "bg-neon text-primary-foreground" : "bg-secondary"
    }`}>
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-background/20">
            {type}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">R$</span>
            <span className="text-7xl font-bold">{price}</span>
          </div>
          <p className="text-sm opacity-90">Por membro, {period}</p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <a href="https://pay.hotmart.com/D96966130K?sck=HOTMART_PRODUCT_PAGE&off=8429n4o8&hotfeature=32&_gl=1*8xt4v8*_gcl_au*Njk1MTEzNjQxLjE3MzgwMDE1OTU.*_ga*MjEwOTUzMjE1MC4xNzM4MDAxNTkw*_ga_GQH2V1F11Q*MTczODAwMTU4OS4xLjEuMTczODAwMzA0OS41OS4wLjA.&bid=1738003056723" target="_blank" rel="noopener noreferrer">
        <Button 
          className="w-full text-lg py-6 mt-6"
          variant={variant === "default" ? "secondary" : "default"}
        >
          {buttonText}
        </Button>
        </a>
      </div>
    </Card>
  </div>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Sistema Completo de Aprendizado de Idiomas
          </h2>
          <p className="text-muted-foreground text-lg">
            7 Dias de garatia.
          </p>
        </div>

        <div className="grid gap-8 items-center justify-center">
          <div className="animate-fade-up [animation-delay:200ms]">
            <PricingCard
              type="Aproveite!"
              price={397}
              period={isYearly ? "" : "para sempre."}
              buttonText="Seja Membro!"
              variant="default"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;