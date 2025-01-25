import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon rounded-full" />
          <span className="text-white font-bold text-xl">AI Ally</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-neon transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-neon transition-colors">
            Features
          </a>
          <a href="#" className="text-white hover:text-neon transition-colors">
            Pricing
          </a>
          <a href="#" className="text-white hover:text-neon transition-colors">
            Testimonials
          </a>
          <Button className="bg-neon text-black hover:bg-neon/90">Sign in</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4">
          <div className="flex flex-col items-center gap-4">
            <a href="#" className="text-white hover:text-neon transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-neon transition-colors">
              Features
            </a>
            <a href="#" className="text-white hover:text-neon transition-colors">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-neon transition-colors">
              Testimonials
            </a>
            <Button className="bg-neon text-black hover:bg-neon/90">
              Sign in
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;