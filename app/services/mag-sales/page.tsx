"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Disc, 
  Award, 
  ShieldCheck, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MagSalesServicePage() {
  const steps = [
    {
      title: "Consultation",
      desc: "Our wheel specialists analyze your vehicle's fitment profile and style goals.",
      icon: Search
    },
    {
      title: "Selection",
      desc: "Access a curated inventory of local and international forged and alloy brands.",
      icon: Star
    },
    {
      title: "Customization",
      desc: "Optional bespoke powder coating or diamond cutting to create a one-of-one set.",
      icon: Sparkles
    },
    {
      title: "Precision Fit",
      desc: "Expert mounting and balancing guaranteed to clear performance calipers and suspension.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/mag-showroom.png" 
          alt="Luxury Mag Showroom" 
          fill 
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary text-black rounded-full mb-8 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
              <Award className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">Elite Wheel Collection</span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-black text-white uppercase italic leading-[0.8] mb-8 tracking-tighter">
              Forged <span className="text-primary not-italic">Excellence.</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed italic border-l-2 border-primary/50 pl-8">
              Cape Town's definitive source for luxury alloy and forged wheels. Curated brands, precision engineering, and bespoke finishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showroom Intro */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                 <h2 className="text-5xl font-black text-slate-900 uppercase italic leading-tight mb-8">
                    Upgrade Your <span className="text-primary italic">Signature.</span>
                 </h2>
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium italic">
                    The right set of mags changes everything. At Wheelworx, we bridge the gap between aesthetic desire and technical feasibility, ensuring your new wheels fit perfectly and perform exceptionally.
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-12">
                    {[
                      { label: "Wheel Brands", value: "25+" },
                      { label: "Styles in Stock", value: "500+" },
                      { label: "Fitment Guarantee", value: "100%" },
                      { label: "Happy Clients", value: "10k+" }
                    ].map((stat, i) => (
                      <div key={i} className="border-l-2 border-primary/20 pl-4">
                         <p className="text-3xl font-black text-slate-900 italic tracking-tighter">{stat.value}</p>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                 </div>
                 <Button asChild size="lg" className="h-18 px-12 rounded-[32px] bg-slate-900 text-white hover:bg-primary transition-all font-black uppercase tracking-widest text-[10px] shadow-2xl">
                    <Link href="/products?category=mags">Explore The Collection</Link>
                 </Button>
              </div>
              <div className="lg:col-span-7 relative aspect-[14/10] rounded-[64px] overflow-hidden shadow-2xl border-4 border-white">
                 <Image 
                   src="/mag-collection.png" 
                   alt="Curated Collection" 
                   fill 
                   className="object-cover" 
                 />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-12">
                     <span className="text-primary font-black uppercase text-[10px] tracking-widest mb-2">Featured Series</span>
                     <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">Bespoke Forged V1</h3>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-5xl font-black text-slate-900 uppercase italic mb-6">The Curated <span className="text-primary">Journey.</span></h2>
             <p className="text-slate-500 font-medium italic">How we transform your vehicle's stance from ordinary to elite.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 hover:shadow-2xl hover:bg-white hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-[100px] font-black text-white uppercase italic leading-none mb-12 tracking-tighter">
            Build Your <span className="text-primary italic">Legacy.</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium mb-16 max-w-2xl mx-auto italic">
            Visit our Sir Lowry Road showroom for a test fitment and consultation with Cape Town's wheel masters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Button asChild size="lg" className="h-20 px-16 rounded-[32px] bg-primary text-black hover:bg-white transition-all font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/20">
               <Link href="/contact">Visit Showroom</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-20 px-16 rounded-[32px] border-2 border-white/20 text-white hover:bg-white hover:text-black transition-all font-black uppercase tracking-[0.2em] text-xs">
               <Link href="/products?category=mags">Virtual Stockroom</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
