import { Rocket, Sparkles, Star, Award, Flame, Zap, Sun, Brain, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const features = [
  {
    icon: Rocket,
    title: "Conecte-se com o Mundo",
    description: "Fale a língua local e viva experiências únicas em qualquer lugar do mundo.",
    color: "text-[#F97316]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#F97316]"
  },
  {
    icon: Sparkles,
    title: "Garanta um futuro global",
    description: "Domine idiomas e conquiste as melhores oportunidades no mercado internacional.",
    color: "text-[#D946EF]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#D946EF]"
  },
  {
    icon: Zap,
    title: "Supere seus limites",
    description: "Ganhe confiança e destaque-se em qualquer conversa, em qualquer idioma.",
    color: "text-[#8B5CF6]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#8B5CF6]"
  },
  {
    icon: Brain,
    title: "Turbine seu cérebro",
    description: "Aprender idiomas melhora sua memória, foco e até sua criatividade.",
    color: "text-[#0EA5E9]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#0EA5E9]"
  },
  {
    icon: Flame,
    title: "Seja imbatível nos estudos",
    description: "Use o domínio de idiomas como vantagem em concursos e na vida acadêmica.",
    color: "text-[#F97316]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#F97316]"
  },
  {
    icon: Sun,
    title: "Transforme palavras em lucro",
    description: "Monetize seu conhecimento como tradutor, professor ou criador de conteúdo.",
    color: "text-[#0EA5E9]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#0EA5E9]"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className=" text-center mb-14 mt-28 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            A Formação <span className="text-neon">Hiperpoliglota</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            É para você <span className="text-neon font-semibold">Aprender</span> um novo idioma e abrir portas para novas oportunidades, viagens inesquecíveis e até aquela promoção no trabalho!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group bg-black border-secondary hover:border-neon transition-all duration-500 animate-fade-up overflow-hidden relative ${feature.bgGlow}`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-90" />
              <CardContent className="p-6 relative">
                <div className={`mb-4 ${feature.color} transition-transform duration-300`}>
                  <feature.icon
                    size={32}
                    className="group-hover:scale-110 group-hover:animate-pulse transition-all duration-300"
                  />
                </div>
                <h3 className={`text-xl font-semibold mb-2 group-hover:${feature.color} transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex pt-10 justify-center items-center">
            <Button className="bg-neon text-black hover:bg-neon/90 text-lg px-8">
              Seja Membro
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
      </div>
    </section>
  );
};

export default Features;