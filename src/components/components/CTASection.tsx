
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useUTMParams } from '@/hooks/use-utm';

const CTASection = () => {
      const utmParams = useUTMParams();
      const buyLink = "https://pay.hotmart.com/I99094450Y?checkoutMode=10";
      const buyLinkWithUTM = `${buyLink}?utm_source=${utmParams.utm_source}&utm_medium=${utmParams.utm_medium}&utm_campaign=${utmParams.utm_campaign}&utm_term=${utmParams.utm_term}&utm_content=${utmParams.utm_content}`;
  return (
    <section className="section-padding bg-background py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white">
          Está pronto pra aprender um novo idioma?
        </h2>
        
        <div className="flex justify-center mb-6">
          <a 
            href={buyLinkWithUTM}
            target="_blank"
            className="cta-button text-lg md:text-xl font-bold py-5 px-8 md:px-12 flex items-center justify-center gap-2"
          >
            👉 QUERO COMEÇAR AGORA – R$37,90
            <ArrowRight size={20} />
          </a>
        </div>
        
        <p className="text-gray-300 text-lg">
          Acesso imediato. Garantia de 7 dias.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
