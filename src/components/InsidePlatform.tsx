import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const InsidePlatform = () => {
  const videoId = "H-t7IdF7r08";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <section className="min-h-screen relative overflow-hidden py-24">
      {/* Animated gradient background */}
      <div 
        className="absolute  inset-0 bg-gradient-to-r from-blue-900/90 via-black to-violet-800 animate-gradient"
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Veja por dentro da Plataforma
          </h2>
          <p className="text-lg text-gray-300">
            Em apenas <span className="text-neon font-bold">3 meses</span> você atinge o nível conversacional, <span className="text-neon font-bold">6 meses</span> atinja o nivel avançado para que em <span className="text-neon font-bold">1 ANO</span> tenha a fluência absoluta.
          </p>
          
          {/* Shining button with animation */}
          
          <div className="relative inline-block group">
          <a href="https://pay.hotmart.com/D96966130K?bid=1735330800536" target="_blank" rel="noopener noreferrer">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon via-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <Button 
              className="relative px-8 py-6 bg-black border border-neon text-neon hover:bg-black/50 text-lg"
            >
              Começe sua Jornada!
              <ArrowRight className="ml-2" />
            </Button>
            </a>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl animate-float">
              <iframe
                src={embedUrl}
                title=""
                className="relative inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default InsidePlatform;