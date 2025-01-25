import { Check, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const learningPoints = {
  do: [
    "Pensar diretamente no idioma, sem traduzir.",
    "Técnicas para imersão total, mesmo no Brasil.",
    "Pronúncia fluida e natural desde o início.",
    "Gramática intuitiva e fácil de aprender."

  ],
  dont: [
    "Como manter motivação e consistência.",
    "Estudar múltiplos idiomas de forma eficiente.",
    "Memorização rápida e natural de vocabulário.",
    "Criar rotinas de estudo adaptáveis ao seu dia."
  ]
};

const Learn = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            O Que <span className="text-neon">Você</span> vai <span className="text-neon">Aprender</span>
          </h2>
          <p className="text-gray-400">
            .
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1 Section */}
          <Card className="bg-secondary border-secondary hover:border-neon transition-all duration-300 group animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-neon/10 rounded-lg">
                  <Check className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-neon">APRENDA</h3>
              </div>
              <div className="space-y-4">
                {learningPoints.do.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <Check className="w-5 h-5 mt-1 text-neon flex-shrink-0" />
                    <p className="text-gray-300 group-hover:text-neon transition-colors duration-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 2 Section */}
          
          <Card className="bg-secondary border-secondary hover:border-neon transition-all duration-300 group animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-neon/10 rounded-lg">
                  <Check className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-neon">APRENDA</h3>
              </div>
              <div className="space-y-4">
                {learningPoints.dont.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <Check className="w-5 h-5 mt-1 text-neon flex-shrink-0" />
                    <p className="text-gray-300 group-hover:text-neon transition-colors duration-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> 
        </div>
      </div>
    </section>
  );
};

export default Learn;