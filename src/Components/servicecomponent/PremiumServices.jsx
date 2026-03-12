import React from "react";
import {
  FileText,
  RefreshCcw,
  Mail,
  Linkedin,
  Briefcase,
  ArrowRight,
  Star,
  Sparkles
} from "lucide-react";

const PremiumServices = () => {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={14} fill="currentColor"/>
              Premium Services
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
              Get Noticed. <span className="text-yellow-500 italic">Get Hired</span>
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Strategic career documents crafted to bypass bots and impress humans. 
              We don't just write CVs; we build <span className="text-white font-bold">career-launching assets.</span>
            </p>
          </div>

          <button className="group flex items-center gap-2 text-yellow-500 font-black text-xs uppercase tracking-[0.2em] transition-all hover:text-white pb-2 border-b-2 border-yellow-500/30 hover:border-white">
            View all pricing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Featured Large Card */}
          <div className="group md:col-span-2 bg-slate-900/40 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl rounded-full"></div>
            
            <FileText className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={32} />

            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
              ATS Optimized CV/Resume Writing
            </h3>

            <div className="w-20 h-1 bg-yellow-500 mb-6 group-hover:w-full transition-all duration-700"></div>

            <p className="text-slate-400 text-base mb-8 max-w-md">
              Built from scratch with proprietary keyword mapping that passes Automated Tracking Systems and catches recruiter attention instantly.
            </p>

            <button className="flex items-center justify-between w-full text-white font-bold group-hover:text-yellow-500 transition-colors uppercase text-xs tracking-widest">
              Resume from scratch
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                <ArrowRight size={18}/>
              </div>
            </button>
          </div>

          {/* Secondary Card */}
          <div className="group bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500">
            <RefreshCcw className="text-yellow-500 mb-6" size={28} />

            <h3 className="text-xl font-black text-white mb-4 tracking-tight">
              Resume Revamp
            </h3>

            <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-yellow-500 group-hover:w-full transition-all duration-700"></div>

            <p className="text-slate-400 text-sm mb-8">
              Modernize your existing resume with a high-impact professional layout that prioritizes your biggest achievements.
            </p>

            <button className="flex items-center justify-between w-full text-white/60 group-hover:text-yellow-500 transition-colors uppercase text-[10px] font-black tracking-widest">
              Order revamp
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
            </button>
          </div>

          {/* Row 2: Standard Cards */}
          {[
            { icon: <Mail size={24}/>, title: "Cover Letters", desc: "Persuasive, tailored letters that tell the human story behind your data." },
            { icon: <Linkedin size={24}/>, title: "LinkedIn Optimization", desc: "Full profile overhaul to increase search visibility and connection requests." },
            { icon: <Briefcase size={24}/>, title: "Career-Specific CVs", desc: "Niche expertise for Tech, Finance, Healthcare, and Executive roles." }
          ].map((service, idx) => (
            <div key={idx} className="group bg-slate-900/40 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/40 transition-all duration-500">
              <div className="text-yellow-500 mb-6 group-hover:rotate-12 transition-transform">
                {service.icon}
              </div>

              <h3 className="text-lg font-black text-white mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-white/40 group-hover:text-yellow-500 transition-colors text-[10px] font-black uppercase tracking-widest">
                Explore <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-20 flex flex-col items-center">
          <button className="bg-yellow-500 text-black px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] uppercase hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all transform hover:scale-105 active:scale-95">
            Choose Your Package
          </button>
          
          <div className="mt-6 flex items-center gap-2 text-slate-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest">
              100% satisfaction guaranteed
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PremiumServices;