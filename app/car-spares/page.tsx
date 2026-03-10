"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Package,
  Wrench,
  Cog,
  Zap,
  ShieldCheck,
  Disc,
  Settings,
  Flame,
  Activity
} from "lucide-react";

const CATEGORIES = [
  { name: "Service Kits", desc: "Filters, spark plugs, oil & additives", icon: Settings, image: "/car-service-kit.png" },
  { name: "Break Systems", desc: "Discs, pads, calipers & cylinders", icon: Disc, image: "/car-brakes-parts.png" },
  { name: "Suspension", desc: "Shocks, control arms & bushings", icon: Activity, image: "/car-suspension-parts.png" },
  { name: "Electrical", desc: "Alternators, starters & batteries", icon: Zap, image: "/car-electrical.png" },
  { name: "Drivetrain", desc: "Clutch kits, CV joints & shafts", icon: Cog, image: "/car-drivetrain.png" },
  { name: "Cooling", desc: "Radiators, pumps & thermostats", icon: Flame, image: "/car-cooling.png" }
];

const BRANDS = [
  "Toyota", "Ford", "VW", "Hyundai", "Nissan", "Mercedes", "BMW", "Kia", "Mazda", "Chevrolet", "Renault", "Isuzu"
];

export default function CarSpares() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-slate-900 font-display">
        <Image 
          src="/car-parts-commercial.png" 
          alt="Car Spares" 
          fill 
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Commercial Car Spares</span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-[0.8] mb-8 tracking-tighter">
              QUALITY <br /><span className="text-primary not-italic">CAR SPARES.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl font-medium italic mb-10 leading-relaxed">
              Wholesale pricing direct to the public. We stock a massive range of new, high-quality spares for most major vehicle makes and models.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-primary transition-all">
                  <Link href="tel:0114937010">Request Pricing</Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all backdrop-blur-md">
                  <Link href="https://wa.me/27791799149">WhatsApp Enquiry</Link>
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-12 bg-slate-50 border-b border-slate-100 overflow-hidden">
         <div className="flex gap-16 whitespace-nowrap animate-marquee-slow opacity-20 hover:opacity-100 transition-opacity">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                 {BRANDS.map(brand => (
                    <span key={brand} className="text-2xl font-black uppercase tracking-widest text-slate-900">{brand}</span>
                 ))}
              </div>
            ))}
         </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24 max-w-3xl mx-auto">
              <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-4 block">Comprehensive Inventory</span>
              <h2 className="text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-8">What we <span className="text-primary">Cover.</span></h2>
              <p className="text-slate-500 font-medium italic text-lg">From routine maintenance to major engine overhauls, our warehouse has the right part for the right price.</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
              {CATEGORIES.map((cat, i) => (
                <div key={i} className="group bg-white rounded-[48px] border border-slate-100 hover:shadow-2xl transition-all cursor-pointer overflow-hidden flex flex-col">
                   <div className="relative h-64 w-full">
                      <Image 
                        src={cat.image} 
                        alt={cat.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-8">
                         <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-black shadow-lg">
                            <cat.icon className="w-6 h-6" />
                         </div>
                      </div>
                   </div>
                   <div className="p-10 flex flex-col flex-1">
                      <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4 leading-none">{cat.name}</h3>
                      <p className="text-slate-500 font-medium italic mb-8 leading-relaxed flex-1">{cat.desc}</p>
                      <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                         Explore Category <ChevronRight className="w-4 h-4" />
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Direct Assist Section */}
      <section className="py-24 bg-slate-900 rounded-[64px] mx-4 sm:mx-6 overflow-hidden text-white mb-24 relative">
         <div className="absolute inset-0 opacity-10">
            <Image src="/workshop-services.png" alt="Workshop" fill className="object-cover grayscale" />
         </div>
         <div className="container mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
               <div>
                  <h2 className="text-5xl font-black uppercase italic leading-none mb-8">NOT SURE WHICH <br/><span className="text-primary">PART YOU NEED?</span></h2>
                  <p className="text-xl text-slate-400 font-medium italic mb-10 leading-relaxed">
                     Provide us with your vehicle's VIN number or make and year, and our technical staff will assist you in finding the exact replacement component.
                  </p>
                  <div className="flex items-center gap-8">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Technical Sales</span>
                        <p className="text-2xl font-black text-white italic">011 493 7010</p>
                     </div>
                     <div className="h-12 w-px bg-white/10" />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">WhatsApp Hub</span>
                        <p className="text-2xl font-black text-[#25D366] italic">079 179 9149</p>
                     </div>
                  </div>
               </div>
               <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[48px] border border-white/10">
                   <h4 className="text-xl font-black uppercase italic mb-6">Expert Advice on tap</h4>
                   <p className="text-slate-400 font-medium italic mb-8">We don't just sell parts; we help you find solutions. Our experts have decades of experience in the automotive industry.</p>
                   <Button asChild size="lg" className="h-16 w-full rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                      <Link href="/contact">Message Support</Link>
                   </Button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
