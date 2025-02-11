import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Plane from "public/airplane.png"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Globe } from "lucide-react";

// Define languages with their respective flags or names
const LANGUAGES = ["Abecásio", "Avar", "Albanês", "Alemão", "Árabe", "Armênio", "Azerbaijano", "Bashkir", "Bielorusso", "Buriata", "Búlgaro", "Bósnio", "Cantonês", "Cazaque", "Checheno", "Chinês", "Circássio", "Chuvash", "Tatar da Crimeia", "Croata", "Tcheco", "Dinamarquês", "Estoniano", "Faroês", "Finlandes", "Georgiano", "Hebraico", "Hindi", "Húngaro", "Islandês", "Indonésio", "Irlandês", "Inuktikut", "Groelandês", "Italiano", "Cazaque", "Komi", "Curdo", "Coreano", "Quirguiz", "Latgálio", "Letão", "Latim", "Lituano", "Luxemburguês", "Macedônio", "Maltês", "Malaio", "Mongol", "Norueguês", "Occitânico", "Persa", "Polonês", "Romeno", "Russo", "Sânscrito", "Sami", "Gaélico Escocês", "Inglês", "Sérvio", "Siciliano", "Eslovaco", "Esloveno", "Sueco", "Swahili", "Tajik", "Tatar", "Tibetano", "Turco", "Turcomeno", "Tuvano", "Udmurt", "Ucraniano", "Uzbek", "Veneto", "Vietnamita", "Iacuto", "Yiddish", "Francês", "Entre outros +"];

const Creator = () => {
  return (
    <section className="py-32 px-6 bg-secondary/50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-6 animate-fade-up z-10 relative">
            <h2 className="text-4xl font-bold tracking-tighter text-neon">
              Sobre Vitor
            </h2>
            <p className="text-lg text-muted-foreground">
              Vitor é um Hiperpoliglota apaixonado por aprendizagem de idiomas que revolucionou a maneira de como estudar uma nova lingua. Descubra o método que o fez aprender mais de 40 idiomas aos 20 anos e que pode transformar você em um hiperpoliglota.
            </p>
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24 border-2 border-neon animate-float">
                <AvatarImage className="object-cover object-[25%_64%]" src="./vitor.jpeg" />
                <AvatarFallback>VT</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">Vitor</h3>
                <p className="text-muted-foreground">Founder & Creator</p>
              </div>
            </div>
            
            {/* Languages Section */}
            <div className="mt-8 w-full">
              <div className="flex items-center mb-4">
                <Globe className="mr-2 text-neon" size={24} />
                <h3 className="text-xl font-semibold text-neon">Minha Experiência</h3>
              </div>
              <div className="relative w-full">
                <div className="overflow-x-hidden md:overflow-hidden scrollbar-hide">
                  <div className="inline-flex flex-wrap gap-2 
                    max-h-[200px] 
                    md:max-h-[150px] 
                    lg:max-h-[200px] 
                    overflow-y-auto 
                    md:overflow-y-scroll 
                    scrollbar-thin 
                    scrollbar-track-secondary/20 
                    scrollbar-thumb-neon/50 
                    pr-4 
                    w-full">
                    {LANGUAGES.map((language, index) => (
                      <span 
                        key={index} 
                        className="
                          bg-secondary/30 
                          text-muted-foreground 
                          px-2 py-1 
                          rounded-md 
                          text-xs 
                          md:text-sm 
                          whitespace-nowrap 
                          hover:bg-neon/20 
                          transition-colors 
                          duration-300
                        "
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Gradient overlay to indicate scrollability */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none md:block hidden"></div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:top-0 md:right-0 lg:static w-full md:w-[80%] lg:w-full flex justify-end">
            <DotLottieReact
              src="https://lottie.host/057b82cb-3373-43c1-aac2-a4e569d4a42c/VI0cF1C9pQ.lottie"
              loop
              autoplay
              className="
                opacity-90 
                lg:opacity-95 
                w-full 
                max-w-[400px] 
                md:max-w-[500px] 
                lg:max-w-[600px] 
                aspect-square 
                object-cover
                overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;