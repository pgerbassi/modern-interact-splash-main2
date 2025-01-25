import React from 'react';

const words = [
  { text: "Hello", language: "English" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "Ciao", language: "Italian" },
  { text: "Olá", language: "Portuguese" },
  { text: "こんにちは", language: "Japanese" },
  { text: "안녕하세요", language: "Korean" },
  { text: "你好", language: "Chinese" },
  { text: "Hallo", language: "German" },
  { text: "Привет", language: "Russian" },
  { text: "مرحبا", language: "Arabic" },
  { text: "Namaste", language: "Hindi" },
  { text: "Γεια σας", language: "Greek" },
  { text: "Merhaba", language: "Turkish" },
  { text: "Xin chào", language: "Vietnamese" },
  { text: "สวัสดี", language: "Thai" },
  { text: "Hallå", language: "Swedish" },
  { text: "Dzień dobry", language: "Polish" },
  { text: "Terve", language: "Finnish" },
  { text: "Hej", language: "Danish" },
  { text: "Hei", language: "Norwegian" },
  { text: "Salam", language: "Persian" },
  { text: "Sawubona", language: "Zulu" },
  { text: "Jambo", language: "Swahili" },
  { text: "Dia dhuit", language: "Irish" },
  { text: "Tere", language: "Estonian" },
  { text: "Sveiki", language: "Latvian" },
  { text: "Labas", language: "Lithuanian" },
  { text: "Zdravo", language: "Croatian" },
  { text: "Ahoj", language: "Czech" }
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {words.map((word, index) => (
        <div
          key={index}
          className={`absolute text-neon/70 whitespace-nowrap animate-float-word opacity-0`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * (2.5 - 1.5) + 1.5}rem`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${Math.random() * (20 - 10) + 10}s`
          }}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;