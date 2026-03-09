"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Award, 
  Flame, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Settings,
  Disc
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RimRepairsPage() {
  const steps = [
    {
      title: "Inspection",
      desc: "Detailed structural and surface assessment to identify stress fractures and runout.",
      icon: Settings
    },
    {
      title: "Stripping",
      desc: "Chemical removal of old finishes without compromising the integrity of the alloy.",
      icon: Flame
    },
    {
      title: "Repair",
      desc: "Precision welding and CNC machining to restore the original factory specifications.",
      icon: Wrench
    },
    {
      title: "Finishing",
      desc: "Elite powder coating or diamond cutting to achieve a mirror-deep, durable finish.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/hero-rim.png" 
          alt="Rim Restoration Masterpiece" 
          fill 
          className="object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">Elite Restoration</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-none mb-6">
              Rim & <span className="text-primary not-italic">Mag Repairs</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-xl leading-relaxed italic border-l-2 border-primary/40 pl-6">
              Cape Town's definitive workshop for structural restoration, aesthetic refinishing, and CNC diamond cutting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
                The V12 <span className="text-primary italic">Process</span>
              </h2>
              <p className="text-slate-500 font-medium">Every wheel that enters our workshop undergoes a rigorous multi-stage restoration process to ensure structural safefty and a factory-level finish.</p>
            </div>
            <Button asChild className="h-14 px-8 rounded-xl bg-slate-900 hover:bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all">
              <Link href="/contact">Book Your Set Now</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-950 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Spotlight */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-video rounded-[48px] overflow-hidden shadow-2xl border-4 border-slate-50">
              <Image 
                src="/cnc-machine.png" 
                alt="CNC Precision Machining" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 lg:pl-12">
              <h2 className="text-4xl font-black text-slate-900 uppercase italic leading-tight mb-8">
                Precision <span className="text-primary">Engineering</span>,<br />
                Master Craftsmanship.
              </h2>
              <div className="space-y-6">
                {[
                  "CNC Diamond Cutting for mirror finishes",
                  "Structural straightening and straightening",
                  "TIG welding for fracture repairs",
                  "Custom color matching and powder coating"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-slate-700 font-bold italic tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Focus Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-black text-white uppercase italic leading-tight mb-8">
                Structural <span className="text-primary">Integrity</span> First.
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium italic">
                A wheel isn't just about looks. Our forensic-level inspection ensures your rims are structurally sound before we even begin the aesthetic restoration. We don't just repair; we reinforce.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Runout Mapping", val: "Laser" },
                  { label: "Welding Type", val: "TIG/Heli" },
                  { label: "Heat Treatment", val: "Controlled" },
                  { label: "QC Pass Rate", val: "100%" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-primary italic">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square rounded-[64px] overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="/rim-side.png" 
                alt="Structural Excellence" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent flex flex-col justify-end p-12">
                 <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-white font-black uppercase text-[10px] tracking-widest">Quality Guaranteed</span>
                 </div>
                 <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Bespoke Structural Restoration</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-8">
            Ready to <span className="text-primary">Transform</span> Your Drive?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto italic font-medium">
            Contact our Sir Lowry Road specialists for a free assessment and quote on your rim restoration project.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-black hover:bg-white transition-all font-black uppercase tracking-widest text-xs">
              <Link href="tel:0763526616">Call 076 352 6616</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-2 border-white/20 text-white hover:bg-white hover:text-black transition-all font-black uppercase tracking-widest text-xs">
              <Link href="/contact">Visit Workshop</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
