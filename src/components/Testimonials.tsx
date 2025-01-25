import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    title: "Desafio de ser tornar hiperpoliglota em 1 ano",
    author: "Felipe",
    thumbnail: "0E5MqKoD0dA",
  },
  {
    id: 2,
    title: "Conquistou o certificado de proficiência em alemão em 1 mês",
    author: "Daniele",
    thumbnail: "1tjNbqwuAIc",
  },
  {
    id: 3,
    title: "Fluência em 2 meses em RUSSO",
    author: "João",
    thumbnail: "j7Qz9frfXPw",
  },
];

const Testimonials = () => {
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    []
  );

  return (
    <section className="py-24 px-6 bg-background/70">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter text-neon mb-12 animate-fade-up">
          Depoimentos em Vídeo
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-secondary/50 border-none overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <iframe
                    src={`https://www.youtube.com/embed/${testimonial.thumbnail}`}
                    title={testimonial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.author}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;