import { Rocket, Sparkles, Star, Award, Flame, Zap, Sun, Brain, ArrowRight, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const features = [
  {
    icon: Rocket,
    title: "Realização Pessoal",
    description: "Experimente a satisfação de dominar vários idiomas e juntar-se ao grupo de elite de poliglotas globais.",
    color: "text-[#F97316]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#F97316]"
  },
  {
    icon: Globe,
    title: "Dominar Múltiplos Idiomas",
    description: "Quebre barreiras linguísticas e comunique-se com confiança em vários idiomas, abrindo portas para novas culturas e oportunidades.",
    color: "text-[#D946EF]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#D946EF]"
  },
  {
    icon: Zap,
    title: "Crescer Profissionalmente",
    description: "Aumente seu valor profissional e acesse mercados de trabalho internacionais com proficiência em múltiplos idiomas.",
    color: "text-[#8B5CF6]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#8B5CF6]"
  },
  {
    icon: Brain,
    title: "Aprender de forma Acelerada",
    description: "Aprenda idiomas até 3x mais rápido com nossa metodologia poliglota comprovada e técnicas de aprimoramento cognitivo.",
    color: "text-[#0EA5E9]",
    bgGlow: "group-hover:shadow-[0_0_30px_-5px_#0EA5E9]"
  }
];

const Features = () => {
  return (
    <section className="py-12 px-4 
      android-small:mt-[50vh] 
      android-medium:mt-[40vh] 
      iphone-se:mt-[50vh] 
      iphone-x:mt-[40vh] 
      xs:mt-[40vh]
      sm:mt-10 
      md:mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 
          android-small:mt-2 
          android-medium:mt-4 
          iphone-se:mt-4 
          iphone-x:mt-4 
          md:mt-28 
          animate-fade-up">
          <h2 className="text-3xl 
            android-small:text-2xl 
            android-medium:text-3xl 
            iphone-se:text-2xl 
            iphone-x:text-3xl 
            md:text-4xl 
            font-bold mb-3">
            A Formação <span className="text-neon">Hiperpoliglota</span>
          </h2>
          <p className="text-gray-400 text-sm 
            android-small:text-xs 
            android-medium:text-sm 
            iphone-se:text-xs 
            iphone-x:text-sm 
            md:text-base 
            max-w-2xl mx-auto">
            É para você que quer <span className="text-neon font-semibold">Dominar</span> um novo idioma e abrir portas para novas oportunidades, viagens inesquecíveis e até aquela promoção no trabalho!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group bg-black border-secondary hover:border-neon transition-all duration-500 animate-fade-up overflow-hidden relative ${feature.bgGlow}`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-90" />
              <CardContent className="p-4 md:p-6 relative">
                <div className={`mb-2 md:mb-4 ${feature.color} transition-transform duration-300`}>
                  <feature.icon
                    size={24}
                    className="group-hover:scale-110 group-hover:animate-pulse transition-all duration-300"
                  />
                </div>
                <h3 className={`text-base 
                  android-small:text-sm 
                  android-medium:text-base 
                  iphone-se:text-sm 
                  iphone-x:text-base 
                  md:text-xl 
                  font-semibold mb-1 md:mb-2 
                  group-hover:${feature.color} 
                  transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs 
                  android-small:text-[10px] 
                  android-medium:text-xs 
                  iphone-se:text-[10px] 
                  iphone-x:text-xs 
                  md:text-base 
                  group-hover:text-white 
                  transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex pt-6 md:pt-10 justify-center items-center">
        <a href="https://pay.hotmart.com/D96966130K?bid=1735330800536" target="_blank" rel="noopener noreferrer">
            <Button className="bg-neon text-black hover:bg-neon/90 
              text-base 
              android-small:text-sm 
              android-medium:text-base 
              iphone-se:text-sm 
              iphone-x:text-base 
              md:text-lg 
              px-6 
              android-small:px-4 
              android-medium:px-6 
              iphone-se:px-4 
              iphone-x:px-6 
              md:px-8">
              Seja Membro
              <ArrowRight className="ml-2" size={16} />
            </Button>
        </a>
          </div>
      </div>
    </section>
  );
};

export default Features;