import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Features from "@/components/Features";
import Creator from "@/components/Creator";
import Testimonials from "@/components/Testimonials";
import InsidePlatform from "@/components/InsidePlatform";
import Learn from "@/components/Learn";
import AnimatedBackground from "@/components/AnimatedBackground";
//import Pricing  from "@/components/Pricing";


const Index = () => {
  return (
    <main className="min-h-screen bg-black/0">
      <AnimatedBackground/>
      <Hero />
      <Features />
      <InsidePlatform />
      <Objectives />
      <Creator />
      <Learn/>
      <Testimonials />
    </main>
  );
};

export default Index;