
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, ShieldCheck, Sparkles, Tag } from 'lucide-react';
import { useUTMParams } from '@/hooks/use-utm';

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
      const utmParams = useUTMParams();
      const buyLink = "https://pay.hotmart.com/I99094450Y?checkoutMode=10";
      const buyLinkWithUTM = `${buyLink}?utm_source=${utmParams.utm_source}&utm_medium=${utmParams.utm_medium}&utm_campaign=${utmParams.utm_campaign}&utm_term=${utmParams.utm_term}&utm_content=${utmParams.utm_content}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#1A1F2C] to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Oferta Especial</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              O valor do Método MV de <span className='line-through text-gray-400'>R$197</span>, está saindo por 💸 <span className='text-gradient font-bold'>R$37,90</span>
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">Isso mesmo. Por menos do que uma pizza, você pode <span className='text-gradient font-bold'>sair do intermediário</span>.</h2>
              
              <p className="text-lg text-gray-300">
              Essa condição especial é por tempo limitado.
              Aproveite antes que o preço suba para o valor original.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-200"><span className="font-semibold">Método comprovado</span> - Já transformou a vida de mais de 100 alunos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-200"><span className="font-semibold">Suporte dedicado</span> - Nossa equipe estará com você em cada passo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-200"><span className="font-semibold">Garantia</span> - 7 dias para testar sem risco</p>
                </div>
              </div>
              
                <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2">
                  <Tag className="text-primary" size={18} />
                  <p className="text-lg font-medium text-gray-200">
                    De <span className="line-through text-gray-400">R$ 197,00</span> por apenas:
                  </p>
                </div>
                
                <div className="relative">
                  <div className="text-7xl md:text-7xl text-center font-bold">
                      <span className="relative text-primary animate-pulse">
                      R$ 37,90
                      <span className="absolute -top-4 -right-10 text-sm bg-[#F97316] text-white px-2 py-0.5 rounded-md rotate-12 animate-bounce">
                        -80%
                      </span>
                    </span>
                  </div>
                  
                  <div className="mt-1 text-xl text-center text-gray-300 font-normal">
                    <span className="ml-2 inline-flex items-center text-sm font-medium text-white/70 bg-white/10 px-2 py-0.5 rounded">
                      <Sparkles className="mr-1 text-yellow-300" size={14} /> Melhor valor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
          <div className="glass-card rounded-2xl p-8 border border-white/10 bg-secondary/80 shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-[#D946EF]/10 rounded-full blur-3xl"></div>
              
              <div className="text-center mb-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white">Oferta por tempo limitado</h3>
                <p className="text-gray-300">Esta promoção expira em:</p>
                
                <div className="flex justify-center gap-4 my-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-background text-white text-2xl font-bold w-16 h-16 rounded-lg flex items-center justify-center border border-white/5">
                      {formatNumber(timeLeft.hours)}
                    </div>
                    <span className="text-xs mt-1 text-gray-400">Horas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-background text-white text-2xl font-bold w-16 h-16 rounded-lg flex items-center justify-center border border-white/5">
                      {formatNumber(timeLeft.minutes)}
                    </div>
                    <span className="text-xs mt-1 text-gray-400">Minutos</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-background text-white text-2xl font-bold w-16 h-16 rounded-lg flex items-center justify-center animate-pulse-light border border-white/5">
                      {formatNumber(timeLeft.seconds)}
                    </div>
                    <span className="text-xs mt-1 text-gray-400">Segundos</span>
                  </div>
                </div>
              </div>
              <a href={buyLinkWithUTM} target='_blank'>
              <button className="cta-button w-full py-4 text-lg font-semibold mb-4 bg-gradient-to-r from-gray-700 to-primary hover:brightness-110 transition-all duration-300 animate-pulse">
                Quero Garantir Minha Vaga Agora
              </button>
              </a>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
                <ShieldCheck size={16} />
                <span>Pagamento 100% seguro</span>
              </div>
              
              {/*<div className="flex justify-center gap-2">
                <img src="/placeholder.svg" alt="Visa" className="h-6" />
                <img src="/placeholder.svg" alt="MasterCard" className="h-6" />
                <img src="/placeholder.svg" alt="PIX" className="h-6" />
                <img src="/placeholder.svg" alt="Boleto" className="h-6" />
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
