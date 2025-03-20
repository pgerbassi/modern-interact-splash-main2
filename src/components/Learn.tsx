import { Check, Shield, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const learningPoints = {
  do: [
    "Devolução total do investimento se não ficar satisfeito."

  ],
  dont: [
    "Atingir a fluencia utilizando o método Dual Flow.",
  ],
  does: [
    "Acesso ao material e atualizações.",
  ]
};

const Learn = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Veja sua <span className="text-neon">Garantia</span><span className="text-neon">.</span>
          </h2>
          <p className="text-gray-400">
            .
          </p>
        </div>
        
        <div className="grid min-h-screen place-items-center">
          {/* 1 Section */}
          <Card className="bg-secondary border-secondary hover:border-neon transition-all duration-300 group animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-neon/10 rounded-lg">
                  <Shield className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-neon">7 Dias de Garantia</h3>
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
          {/*
          <Card className="bg-secondary border-secondary hover:border-neon transition-all duration-300 group animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-neon/10 rounded-lg">
                  <Shield className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-neon">Garantia de Fluência</h3>
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
            */}
          {/* 3 section */}
          {/*
          <Card className="bg-secondary border-secondary hover:border-neon transition-all duration-300 group animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-neon/10 rounded-lg">
                  <Shield className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-neon">Suporte 24h</h3>
              </div>
              <div className="space-y-4">
                {learningPoints.does.map((point, index) => (
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
          */}
        </div>
      </div>
    </section>
  );
};

export default Learn;
