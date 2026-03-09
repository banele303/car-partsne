"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  CarFront, 
  Settings, 
  ShieldCheck, 
  Activity, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Disc,
  Zap,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TyreSalesServicePage() {
  const features = [
    {
      title: "Precision Balancing",
      desc: "Eliminate vibration and extend tyre life with our laser-guided balancing technology.",
      icon: Activity
    },
    {
      title: "Professional Fitting",
      desc: "Scratch-free fitment using the latest touchless mounting equipment for luxury rims.",
      icon: Settings
    },
    {
      title: "Nitrogen Inflation",
      desc: "Maintain constant pressure and cooler running temperatures with high-purity nitrogen.",
      icon: Zap
    },
    {
      title: "Safety Inspection",
      desc: "Comprehensive wheel alignment check and structural assessment with every set.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/tyre-fitting.png" 
          alt="Technical Tyre Fitting" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 text-primary">
              <Disc className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">High Performance Rubber</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-none mb-6">
              Tyre <span className="text-primary not-italic">Solutions.</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-xl leading-relaxed italic border-l-2 border-primary/40 pl-6">
              From elite track-day rubber to durable daily drivers. We combine Cape Town's best selection with technical fitting expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-tight mb-8">
                    More Than Just <br /><span className="text-primary">A Sale.</span>
                 </h2>
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium italic">
                    Buying tyres at Wheelworx means entering a technical ecosystem. We don't just sell rubber; we ensure your vehicle's performance and safety through precision engineering.
                 </p>
                 <div className="space-y-4 mb-12">
                    {[
                      "Official stockists of Continental, Michelin & Pirelli",
                      "Certified run-flat fitment specialists",
                      "3D dynamic wheel balancing as standard",
                      "Complimentary 10,000km rotation & balance"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-slate-900 font-black uppercase text-xs tracking-tight">{item}</span>
                      </div>
                    ))}
                 </div>
                 <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-slate-900 text-white hover:bg-primary transition-all font-black uppercase tracking-widest text-xs">
                    <Link href="/products?category=tyres">Browse Tyre Stock</Link>
                 </Button>
              </div>
              <div className="relative aspect-square rounded-[64px] overflow-hidden shadow-2xl border-4 border-white">
                 <Image 
                   src="/tyres.png" 
                   alt="Tyre Selection" 
                   fill 
                   className="object-cover transition-transform duration-700 hover:scale-105" 
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-5xl font-black text-slate-900 uppercase italic mb-6">Technical <span className="text-primary">Standards.</span></h2>
             <p className="text-slate-500 font-medium italic">Our Woodstock facility utilizes the latest German-engineered diagnostic equipment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:shadow-2xl hover:bg-white hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-950 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-8">
              Enquire <span className="text-primary italic">Sizing</span> Now.
           </h2>
           <p className="text-slate-400 text-xl font-medium mb-12 italic max-w-2xl mx-auto">
              Not sure about the right spec for your drive? Our technicians are ready to assist with sizing and performance recommendations.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-black hover:bg-white transition-all font-black uppercase tracking-widest text-xs">
                <Link href="tel:0763526616">Call 076 352 6616</Link>
             </Button>
              <Link 
                href="https://wa.me/27763526616" 
                className="inline-flex items-center justify-center gap-3 h-16 px-10 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-green-500/20 hover:scale-105 transition-all"
              >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Sizing
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
