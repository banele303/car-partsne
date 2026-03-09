"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Wrench, 
  CarFront, 
  Paintbrush, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BodyWorkPage() {
  const services = [
    {
      title: "Dent Removal",
      desc: "Precision paintless dent removal and traditional panel beating for perfect surfaces.",
      icon: CarFront
    },
    {
      title: "Bumper Tech",
      desc: "Expert plastic welding and structural bumper repairs for all vehicle makes.",
      icon: ShieldCheck
    },
    {
      title: "Minor Touch-ups",
      desc: "Deep scratch removal and localized paint matching for a seamless finish.",
      icon: Paintbrush
    },
    {
      title: "Polishing",
      desc: "Multi-stage machine polishing to restore your vehicle's mirror-like showroom shine.",
      icon: Sparkles
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <Image 
          src="/dent-repair.png" 
          alt="Body Work & Dent Repair" 
          fill 
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary text-black rounded-full mb-8 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
              <Sparkles className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">Pristine Finish</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic leading-none mb-8 tracking-tighter">
              Body <span className="text-primary underline decoration-4 underline-offset-8">Solutions</span>
            </h1>
            <p className="text-slate-300 text-xl font-medium italic max-w-2xl mx-auto leading-relaxed">
              Beyond the wheels. We provide expert minor body work, bumper repairs, and dent removals at our Sir Lowry Road facility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-10 rounded-[40px] hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 bg-slate-950 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[64px] overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src="/workshop-dent-repair.png" 
                alt="Workshop Process" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
            </div>
            
            <div className="lg:pl-8">
              <h2 className="text-5xl font-black text-white uppercase italic leading-tight mb-10">
                Precision <span className="text-primary italic">Panel</span> Restoration
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Factory Color Matching",
                    desc: "Our computerized paint matching system ensures 100% accuracy with your vehicle's original coat."
                  },
                  {
                    title: "Specialist Equipment",
                    desc: "From plastic welding to infra-red curing, we use the latest technology for durable results."
                  },
                  {
                    title: "Quick Turnaround",
                    desc: "Mobile estimates and efficient processing to get your vehicle back on the road faster."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase italic tracking-tight mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Button asChild className="h-16 px-10 rounded-2xl bg-primary text-black hover:bg-white font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-primary/20">
                  <Link href="/contact">Request An Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-black text-slate-900 uppercase italic mb-8">
              Bumper <span className="text-primary">Dented?</span> Scratched?
            </h2>
            <p className="text-slate-500 text-xl font-medium mb-12 italic">
              Don't let minor imperfections affect your vehicle's value. Visit Wheelworx for professional body solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="https://wa.me/27763526616" 
                className="inline-flex items-center justify-center gap-3 h-16 px-10 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-green-500/20"
              >
                Chat via WhatsApp
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center justify-center gap-3 h-16 px-10 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
