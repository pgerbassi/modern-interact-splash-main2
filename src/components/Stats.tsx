import { useEffect, useRef, useState } from "react";

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
}

const StatCounter = ({ end, label, suffix = "" }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      countRef.current = Math.floor(progress * end);
      setCount(countRef.current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="flex justify-center gap-12 mt-8">
      <StatCounter end={40} label="Idiomas" suffix="+" />
      <StatCounter end={100} label="Alunos ativos" suffix="+" />
    </div>
  );
};

export default Stats;