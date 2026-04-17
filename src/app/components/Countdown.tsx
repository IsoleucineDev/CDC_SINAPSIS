import { useEffect, useState } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  // Target date: configurable - set to June 14, 2026 (58 days from April 17, 2026)
  const targetDate = new Date('2026-06-14T00:00:00').getTime();

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const CountdownBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 sm:px-8 sm:py-6 min-w-[80px] sm:min-w-[100px]"
        style={{
          boxShadow: '0 0 30px rgba(255,255,255,0.1)',
        }}
      >
        <div
          className="text-4xl sm:text-6xl font-bold text-white tabular-nums"
          style={{
            fontFamily: 'Orbitron, monospace',
            textShadow: '0 0 20px rgba(255,255,255,0.5)',
          }}
        >
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-white/60 text-xs sm:text-sm uppercase tracking-widest mt-3">
        {label}
      </div>
    </div>
  );

  return (
    <section className="relative py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
          <CountdownBlock value={timeRemaining.days} label="Días" />
          <div className="text-white/40 text-4xl sm:text-6xl font-bold">:</div>
          <CountdownBlock value={timeRemaining.hours} label="Horas" />
          <div className="text-white/40 text-4xl sm:text-6xl font-bold">:</div>
          <CountdownBlock value={timeRemaining.minutes} label="Minutos" />
          <div className="text-white/40 text-4xl sm:text-6xl font-bold">:</div>
          <CountdownBlock value={timeRemaining.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
}
