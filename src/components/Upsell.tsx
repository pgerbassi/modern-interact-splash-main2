
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Upsell = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add fade-in animations on component mount
    const elements = [headingRef.current, subheadingRef.current, videoRef.current, ctaRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 300 * (index + 1));
      }
    });
  }, []);

  const handleCtaClick = () => {
    // You can add your conversion tracking or checkout link here
    console.log("CTA clicked!");
    window.open("https://pay.hotmart.com/D96966130K?off=0ndklqp0&bid=1744129469817", "_blank");
  };

  const splitTextIntoSpans = (text) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="inline-block">{word} </span>
    ));
  };

  return (
    <div className="min-h-screen relative bg-gradient-main overflow-hidden flex flex-col justify-center items-center p-4 sm:p-8 md:p-12">
      {/* Background particles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700 rounded-full filter blur-[120px] opacity-20"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center max-w-6xl space-y-8 sm:space-y-12">
        {/* Heading */}
        <h1 
          ref={headingRef}
          className="text-neon text-2xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-tight opacity-0 transform translate-y-4 transition-all duration-700 letter-animation"
        >
          <span className="text-neon text-ring/55 text-border">Sua compra ainda não acabou, veja o vídeo para entender melhor</span>
        </h1>

        {/* Subheading */}
        <p 
          ref={subheadingRef}
          className="text-lg md:text-xl lg:text-2xl text-blue-200 text-center max-w-3xl opacity-0 transform translate-y-4 transition-all duration-700 font-light reveal-text"
        >
          <span className=" text-white text-border"></span>
        </p>

        {/* Video */}
        <div 
          ref={videoRef} 
          className="video-container floating opacity-0 transform translate-y-4 transition-all duration-700 w-full max-w-4xl"
        >
          <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/kkzTSNu2KwA?si=In_nyOZU8Lxp2HnU" 
              title="Product Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CTA Button */}
        <div 
          ref={ctaRef} 
          className="opacity-0 transform translate-y-4 transition-all duration-700 mt-8 sm:mt-12"
        >
          <button 
            onClick={handleCtaClick}
            className="cta-button text-xl sm:text-2xl font-heading"
          >
            Entenda agora!
          </button>
          <p className="text-blue-200 mt-4 text-center text-sm font-medium"><span className="font-bold text-white"></span></p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 sm:bottom-8 text-center w-full text-blue-300/60 text-xs">
      </div>
    </div>
  );
};

export default Upsell;
