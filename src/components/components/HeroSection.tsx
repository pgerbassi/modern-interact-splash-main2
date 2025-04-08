
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const HeroSection = () => {
  const scrollToNextSection = () => {
    const painPointsSection = document.getElementById('painPoints');
    if (painPointsSection) {
      painPointsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-background"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto text-center z-10 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="w-full order-2 lg:order-1 text-center lg:text-left">
        <div className="inline-block mb-3 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-300">Torne-se poliglota</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">O Método</span>
          <span className="block text-white"> que vai acelerar os seus resultados em </span>
          <span className="text-gradient">qualquer idioma!</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
        
        <span className='text-gradient font-bold'> O Método VM  </span> foi criado para você que quer aprender um idioma e sair do eterno platô do intermediário! <span className='text-gradient font-bold'> Finalmente você poderá falar com naturalidade, confiança e fluência.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24 lg:justify-start lg:mb-0">
          <a href="https://pay.hotmart.com/I99094450Y?checkoutMode=10" target='_blank'>
          <button className="cta-button text-base md:text-lg font-semibold px-10 py-4">
          👉 Quero acessar o Método VM agora
          </button>
          </a>
        </div>
        </div>
        {/* Video column */}
                  <div className="w-full order-1 lg:order-2 rounded-xl overflow-hidden border border-white/10 shadow-xl">
            <AspectRatio ratio={16 / 9}>
              <iframe 
                src="https://www.youtube.com/embed/xomS80QyFqQ?si=963U-2WC5BjtpfhJ"
                title="Vídeo de apresentação"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:opacity-80 transition-opacity" onClick={scrollToNextSection}>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Descubra Mais</span>
            <ArrowDown className="animate-bounce text-primary" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
