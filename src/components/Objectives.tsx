import { Check, Target, Zap, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const objectives = [
  {
    icon: Brain,
    title: "Método Dual Flow",
    description:
      "Aprenda vários idiomas ao mesmo tempo com nosso exclusivo Dual Flow.",
  },
  {
    icon: Zap,
    title: "Resultados rápidos",
    description:
      "Reduza o tempo e custo do aprendizado enquanto domina múltiplas línguas.",
  },
  {
    icon: Target,
    title: "Prática ao vivo",
    description:
      "Encontros diários para conversação real e evolução acelerada.",
  },
  {
    icon: Check,
    title: "Conteúdo completo",
    description:
      "Tenha acesso imediato ao curso brasileiro com a maior diversidade de idiomas",
  },
];

const Objectives = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-up">
          Entenda o nosso <span className="text-neon">Método</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto animate-fade-up">
          Escolha o método Dual Flow e torne-se HIPER poliglota em tempo recorde, com prática diária ao vivo e aprendizado simultâneo de múltiplos idiomas.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <Card
              key={objective.title}
              className="bg-black border-secondary hover:border-neon transition-all duration-300 group animate-fade-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4 text-neon">
                  <objective.icon
                    size={32}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon transition-colors duration-300">
                  {objective.title}
                </h3>
                <p className="text-gray-400">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;