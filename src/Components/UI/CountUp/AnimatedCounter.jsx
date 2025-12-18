import React, { useState } from 'react';
import { AnimatedCounter } from 'react-animated-counter';

// کامپوننت نمایشی (فرزند) - عدد را از پراپرتی می‌گیرد
const GlassCounter = ({ value }) => {
  return (
    <div className="flex w-full max-w-xs flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-lg transition-all hover:bg-white/10">
      <div className="rounded-xl bg-black/20 p-4 shadow-inner">
        <AnimatedCounter value={value} color="white" fontSize="40px" />
      </div>
      <span className="mt-4 text-sm text-gray-300">نمایش مقدار پراپرتی</span>
    </div>
  );
};

const App = () => {
  const [targetNumber, setTargetNumber] = useState(1000);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      
      <GlassCounter value={targetNumber} />

      <div className="flex flex-wrap justify-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-md">
        <button
          onClick={() => setTargetNumber(prev => prev + 500)}
          className="rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white transition hover:bg-emerald-500"
        >
          افزایش (+500)
        </button>
        
        <button
          onClick={() => setTargetNumber(prev => prev - 500)}
          className="rounded-lg bg-rose-600 px-6 py-2 font-medium text-white transition hover:bg-rose-500"
        >
          کاهش (-500)
        </button>

        <button
          onClick={() => setTargetNumber(0)}
          className="rounded-lg bg-slate-600 px-6 py-2 font-medium text-white transition hover:bg-slate-500"
        >
          ریست (0)
        </button>
      </div>

    </div>
  );
};

export default App;