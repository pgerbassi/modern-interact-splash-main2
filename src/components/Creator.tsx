import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Plane from "public/airplane.png"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Creator = () => {
  return (
    <section className="py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl font-bold tracking-tighter text-neon">
              Sobre Vitor
            </h2>
            <p className="text-lg text-muted-foreground">
            Vitor é um hiperpoliglota apaixonado por aprendizagem de idiomas que revolucionou a maneira de como estudar uma nova lingua. Descubra o método que o fez aprender mais de 40 idiomas aos 20 anos e que pode transformar você em um hiperpoliglota.
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
          </div>
          <DotLottieReact
                src="https://lottie.host/057b82cb-3373-43c1-aac2-a4e569d4a42c/VI0cF1C9pQ.lottie"
                loop
                autoplay
                className="absolute max-w-screen-lg opacity-0 lg:opacity-95 lg:left-[35%] w-full size-[20vwh] "
              />
        </div>
      </div>
    </section>
  );
};

export default Creator;