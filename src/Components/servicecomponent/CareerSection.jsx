import React from "react";
import { CheckCircle, Sparkles, Trophy, Zap, ShieldCheck, Clock } from "lucide-react";

const CareerSection = () => {

  const differenceCards = [
    {
      title: "100% Human-Written",
      desc: "No AI generators. Every sentence is crafted to highlight your unique value.",
      icon: <Sparkles size={20} className="text-yellow-500" />
    },
    {
      title: "ATS-Friendly Formats",
      desc: "Clean layouts ensuring your CV passes the bots and reaches the recruiter.",
      icon: <ShieldCheck size={20} className="text-yellow-500" />
    },
    {
      title: "Industry Strategy",
      desc: "Keywords and phrasing tailored to your target role and sector.",
      icon: <Trophy size={20} className="text-yellow-500" />
    },
    {
      title: "48-Hour Delivery",
      desc: "Get your new CV fast without compromising elite quality standards.",
      icon: <Clock size={20} className="text-yellow-500" />
    }
  ];

  return (
    <div className="w-full bg-black py-24 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-500/5 blur-[120px] rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-10">

        {/* LEFT CARD: Imagery & Quote */}
        <div className="relative w-full h-[500px] lg:h-full min-h-[500px] flex items-end overflow-hidden rounded-3xl group border border-white/5">

          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
            alt="Expert Guidance"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-[1.1] transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          <div className="relative z-10 p-10">
             <div className="w-12 h-1 bg-yellow-500 mb-6 group-hover:w-20 transition-all duration-500"></div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
              Expert <br />
              <span className="text-yellow-500 italic">Guidance.</span>
            </h3>

            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-sm italic border-l-2 border-yellow-500/30 pl-6">
              “Your career story deserves to be told with power, precision, and purpose.”
            </p>
          </div>

        </div>

        {/* RIGHT CARD: Content Grid */}
        <div className="flex flex-col bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/5 p-10 lg:p-12 shadow-2xl">

          {/* LABEL */}
          <span className="bg-yellow-500/10 w-fit text-yellow-500 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase inline-flex items-center mb-8 border border-yellow-500/20">
            <Zap className="mr-2" size={14} fill="currentColor" />
            THE DIFFERENCE
          </span>

          {/* HEADING */}
          <h4 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
            Why Trust Me With <br />
            Your <span className="text-yellow-500 italic underline decoration-white/10">Career?</span>
          </h4>

          {/* DESCRIPTION */}
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            Most resume writers just fix grammar. I rebuild your 
            <span className="text-white font-bold"> professional narrative</span> to position you as the high-value candidate companies are fighting for.
          </p>

          {/* CARDS GRID */}
          <div className="grid sm:grid-cols-2 gap-4">

            {differenceCards.map((card, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-black/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:-translate-y-1"
              >
                {/* Subtle Glow on Hover */}
                <div className="absolute -inset-1 bg-yellow-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>
                  
                  <h5 className="font-black text-white text-sm uppercase tracking-widest mb-3 group-hover:text-yellow-500 transition-colors">
                    {card.title}
                  </h5>

                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
               <span className="text-white font-black text-2xl tracking-tighter">98%</span>
               <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Success Rate</span>
            </div>
            <div className="flex flex-col text-right">
               <span className="text-white font-black text-2xl tracking-tighter">10k+</span>
               <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Interviews Won</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
 
export default CareerSection;