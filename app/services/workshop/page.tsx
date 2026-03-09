"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Award,
  ArrowRight,
  MessageCircle,
  Settings,
  Disc
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WorkshopPage() {
  const specializedUnits = [
    {
      title: "CNC Machining Unit",
      desc: "Our diamond-cutting lathes provide factory-perfect finishes for high-end European mags.",
      image: "/cnc-machine.png"
    },
    {
      title: "Painting & Powder",
      desc: "Clinical-grade paint booths for custom metallic finishes and durable powder coatings.",
      image: "/paint-booth.png"
    },
    {
      title: "Structural Lab",
      desc: "Advanced straightening and TIG welding bays for repairing major impacts and fractures.",
      image: "/rim-process.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/hero-rim.png" 
          alt="Sir Lowry Road HQ" 
          fill 
          className="object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 text-white">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">80 Sir Lowry Road, Cape Town</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic leading-[0.85] mb-8 tracking-tighter">
              The <span className="text-primary not-italic">Workshop.</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed italic border-l-2 border-primary/50 pl-8 mb-12">
              The architectural soul of Wheelworx. A high-performance facility where technical precision meets automotive artistry.
            </p>
            <div className="flex flex-wrap gap-6">
                <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-black hover:bg-white font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20">
                    <Link href="/contact">Get A Quote</Link>
                </Button>
                <Link 
                  href="https://wa.me/27763526616" 
                  className="inline-flex items-center justify-center gap-3 h-16 px-10 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-green-500/20 hover:scale-105 transition-all"
                >
                    <MessageCircle className="w-5 h-5" /> Live Workshop Status
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-3xl">
                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic leading-none mb-6">
                    Specialized <span className="text-primary italic">Units.</span>
                 </h2>
                 <p className="text-slate-500 font-medium italic text-lg">Our Sir Lowry Road facility is divided into specialized centers of excellence, each utilizing world-class equipment.</p>
              </div>
              <div className="flex gap-12 border-l border-slate-100 pl-12 hidden md:flex">
                 <div>
                    <p className="text-primary font-black text-4xl italic mb-1">10+</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Master Technicians</p>
                 </div>
                 <div>
                    <p className="text-primary font-black text-4xl italic mb-1">24H</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Turnaround Avg</p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {specializedUnits.map((unit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                   <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden mb-8 shadow-xl border border-slate-100">
                      <Image 
                        src={unit.image} 
                        alt={unit.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-10 left-10 right-10">
                         <h3 className="text-3xl font-black text-white uppercase italic mb-4">{unit.title}</h3>
                         <p className="text-slate-400 text-sm font-medium leading-relaxed italic line-clamp-2">{unit.desc}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative h-[700px] rounded-[64px] overflow-hidden shadow-2xl border-4 border-white">
                 <Image 
                    src="/expert-tools.png" 
                    alt="Workshop Environment" 
                    fill 
                    className="object-cover"
                 />
                 <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
              </div>
              <div>
                 <h2 className="text-5xl font-black text-slate-900 uppercase italic leading-tight mb-10">
                    The Gold Standard <br />
                    Of <span className="text-primary italic">Workshop</span> Care.
                 </h2>
                 <div className="space-y-10">
                    {[
                      {
                        title: "OEM Spec Restoration",
                        desc: "We follow strict factory guidelines for wheel integrity and finish consistency.",
                        icon: ShieldCheck
                      },
                      {
                        title: "Advanced Diagnostics",
                        desc: "Using laser runout mapping to detect microscopic structural imbalances.",
                        icon: Settings
                      },
                      {
                        title: "Performance Grade Materials",
                        desc: "Only the highest quality primers, paints, and clear-coats from Europe.",
                        icon: Disc
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                         <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-900 text-primary flex items-center justify-center shadow-lg">
                            <item.icon className="w-8 h-8" />
                         </div>
                         <div>
                            <h4 className="text-xl font-black text-slate-900 uppercase italic mb-2 tracking-tight">{item.title}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed italic">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-16 pt-10 border-t border-slate-200">
                    <div className="flex items-center gap-6">
                       <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                          <Clock className="w-6 h-6 text-primary" />
                          <div>
                             <p className="text-[10px] font-black uppercase text-slate-400">Open Hours</p>
                             <p className="text-sm font-black text-slate-900 uppercase">Mon-Fri: 08:00 - 17:30</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final Workshop CTA */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-8">
              Visit The <span className="text-primary italic">Facility.</span>
           </h2>
           <p className="text-slate-400 text-xl font-medium mb-12 italic max-w-2xl mx-auto">
              Witness the craft behind Cape Town's most elite wheel restorations. No appointment needed for a visual assessment.
           </p>
           <Button asChild className="h-20 px-16 rounded-[32px] bg-primary text-black hover:bg-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 text-xs transition-all hover:-translate-y-2">
              <Link href="/contact">Location & Directions</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
