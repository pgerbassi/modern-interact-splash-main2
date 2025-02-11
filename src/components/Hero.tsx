import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Stats from "./Stats";

const Hero = () => {
  return (
    <div className="max-h-screen bg-black pt-10 px-6 pb-24 lg:pt-36 relative">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("/bghero.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Responsive logo */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 mt-4 z-10 md:mt-0">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="w-24 h-24 md:w-36 md:h-36 object-contain"
        />
      </div>
      <div className="max-w-7xl mx-auto mt-16 md:mt-0 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span>Aprenda</span>
            <span className="text-neon"> Qualquer Idioma</span> até o Nível Conversasional em <span className="text-neon">Apenas 3 Meses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
            Descubra o método que me fez aprender mais de 40 idiomas aos 20 anos e que pode transformar você em um hiperpoliglota.
          </p>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <a href="https://pay.hotmart.com/D96966130K?bid=1735330800536" target="_blank" rel="noopener noreferrer">
              <Button className="bg-neon text-black hover:bg-neon/40 hover:text-neon text-2xl px-16 py-8 lg:px-28 lg:py-10">
                Seja Membro
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="link" className="text-white hover:text-neon text-lg">
                +
              </Button>
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <Stats />
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-0.5 bg-neon/30 rounded-3xl blur" />
          <div className="relative bg-black rounded-3xl p-2 md:p-4">
            <iframe
              src={"https://www.youtube.com/embed/YsC4J0c9PmA"}
              title=""
              className="relative inset-0 w-full 
                h-[30vh] 
                android-small:h-[25vh] 
                android-medium:h-[30vh] 
                iphone-se:h-[25vh] 
                iphone-x:h-[30vh] 
                md:h-[45vh] 
                min-h-[200px] 
                max-h-[500px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;