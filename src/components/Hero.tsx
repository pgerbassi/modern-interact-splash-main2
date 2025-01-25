import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Stats from "./Stats";

const Hero = () => {
  return (
    <div className="max-h-screen bg-black pt-10 px-6 pb-24 lg:pt-36">
           <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("/bghero.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          <span className="text-neon">Aprenda Idiomas</span> de Forma Prática e Eficiente em <span className="text-neon">Apenas 3 Meses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
          Destrave o método DualFlow para aprender mais de 40 idiomas e alcançar o nível de conversação em poucos meses com a forma mais didática e acelerada do mercado!
          </p>
          <div className="flex gap-4 items-center">
            <Button className="bg-neon text-black hover:bg-neon/40 hover:text-neon text-2xl px-16 py-8 lg:px-28 lg:py-10">
              Seja Membro
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="link" className="text-white hover:text-neon text-lg">
              +
            </Button>
          </div>
          <Stats />
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-0.5 bg-neon/30 rounded-3xl blur" />
          <div className="relative bg-black rounded-3xl p-2 md:p-4">
          <iframe
                src={"https://www.youtube.com/embed/YsC4J0c9PmA"}
                title=""
                className="relative inset-0 w-full h-[40vh]"
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