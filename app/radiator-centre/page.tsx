"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Flame, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Disc,
  Lock,
  Wind,
  Droplets,
  Wrench,
  Settings
} from "lucide-react";

const COOLING_PRODUCTS = [
  { name: "Aluminium Radiators", desc: "Core-only or complete units for 500+ models.", image: "/radiator-main.png", icon: Droplets },
  { name: "Condensers", desc: "High-pressure A/C condensers with precision fittings.", image: "/condenser-main.png", icon: Wind },
  { name: "Intercoolers", desc: "Performance intercoolers for turbo engine models.", image: "/car-cooling.png", icon: Flame },
  { name: "Viscous Fans", desc: "Clutch fans and electric fans for optimal air flow.", image: "/radiator-commercial.png", icon: Wind },
  { name: "Water Pumps", desc: "Heavy-duty pumps for consistent circulation.", image: "/workshop-services.png", icon: Droplets }
];

const MAGS_AND_LOCKS = [
  { name: "Complete Lock Sets", desc: "Ignition switches, door barrels & keys.", image: "/diagnostic-services.png", icon: Lock },
  { name: "Mag Wheels", desc: "New and used alloy rims in various sizes.", image: "/mag-showroom.png", icon: Disc },
  { name: "Premium Tyres", desc: "New budget-friendly and premium tyre brands.", image: "/tyres.png", icon: Disc },
  { name: "Key Coding", desc: "Assistance with electronic key sets and barrels.", image: "/diagnostic-services.png", icon: Settings }
];

export default function RadiatorCentre() {
  return (
    <div className="flex flex-col bg-white font-display overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center bg-white px-4 md:px-8 py-6">
        <div className="relative w-full h-full max-w-7xl mx-auto overflow-hidden rounded-[3rem] shadow-2xl flex items-center justify-center">
          <Image 
            src="/radiator-commercial.png" 
            alt="Radiator Centre" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Commercial Radiator & Lock Centre</span>
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic leading-[0.85] mb-8 tracking-tighter">
                 COOLING & <br /><span className="text-primary not-italic">LOCKS EXPLAINED.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-slate-300 text-lg font-medium italic mb-10 leading-relaxed">
                 Specialists in automotive thermal management and security. From radiators and intercoolers to complete lock sets and premium alloy wheels.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                    <Link href="tel:0114937010">Call Specialist</Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all backdrop-blur-md">
                    <Link href="https://wa.me/27791799149">Enquire WhatsApp</Link>
                 </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="space-y-32">
              
              {/* Cooling Division */}
              <div className="space-y-16 text-left">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[20px] flex items-center justify-center shadow-sm">
                       <Droplets className="w-8 h-8" />
                    </div>
                    <div>
                       <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-1 block">Thermal Management</span>
                       <h2 className="text-4xl font-black uppercase italic tracking-tighter">Cooling <span className="text-blue-600">Division.</span></h2>
                    </div>
                 </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COOLING_PRODUCTS.map((item, i) => (
                       <div key={i} className="group bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col">
                          <div className="relative h-64 w-full">
                             <Image 
                               src={item.image} 
                               alt={item.name} 
                               fill 
                               className="object-cover group-hover:scale-110 transition-transform duration-700"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                             <div className="absolute top-6 right-6">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                                   <item.icon className="w-5 h-5" />
                                </div>
                             </div>
                          </div>
                          <div className="p-10 flex flex-col flex-1">
                             <h3 className="text-xl font-black uppercase italic text-slate-900 mb-3 leading-tight">{item.name}</h3>
                             <p className="text-slate-500 font-medium italic text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                             <div className="flex items-center gap-2 text-blue-600 text-[9px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer">
                                Technical Specs <ChevronRight className="w-3 h-3" />
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Security & Accessories */}
              <div className="space-y-16 text-left">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-[20px] flex items-center justify-center shadow-sm">
                       <Lock className="w-8 h-8" />
                    </div>
                    <div>
                       <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-1 block">Security & Style</span>
                       <h2 className="text-4xl font-black uppercase italic tracking-tighter">Security & <span className="text-primary">Mags.</span></h2>
                    </div>
                 </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {MAGS_AND_LOCKS.map((item, i) => (
                       <div key={i} className="group bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-row h-[300px]">
                          <div className="relative w-1/2 h-full">
                             <Image 
                               src={item.image} 
                               alt={item.name} 
                               fill 
                               className="object-cover group-hover:scale-110 transition-transform duration-700"
                             />
                             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
                          </div>
                          <div className="w-1/2 p-10 flex flex-col justify-center">
                             <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6">
                                <item.icon className="w-5 h-5" />
                             </div>
                             <h3 className="text-xl font-black uppercase italic text-slate-900 mb-3 leading-tight">{item.name}</h3>
                             <p className="text-slate-500 font-medium italic text-sm leading-relaxed mb-8">{item.desc}</p>
                             <div className="flex items-center gap-2 text-primary text-[9px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer">
                                View Range <ChevronRight className="w-3 h-3" />
                             </div>
                          </div>
                       </div>
                    ))}
                    <div className="col-span-full p-12 bg-slate-950 rounded-[48px] text-white overflow-hidden relative group">
                        <div className="relative z-10 text-left md:w-1/2">
                           <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2 block">Premium Service</span>
                           <h4 className="text-3xl font-black uppercase italic mb-4 leading-none">Tyre & Mag <br/>Fitment Centre.</h4>
                           <p className="text-slate-400 font-medium italic text-sm mb-10 leading-relaxed max-w-sm">
                               We provide full professional fitment, balancing, and alignment services for all wheels and tyres purchased through us.
                           </p>
                           <Button asChild size="lg" className="h-14 px-10 rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-xl shadow-primary/20">
                              <Link href="/contact">Book Fitment</Link>
                           </Button>
                        </div>
                        <Image src="/tyre-fitting.png" alt="Fitting" fill className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Technical Banner */}
      <section className="py-24 bg-primary text-black">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
               <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-6">BEAT THE HEAT. <br/>TRUST THE SPECIALISTS.</h2>
                  <p className="text-lg font-black uppercase tracking-wide opacity-70">Over 1,000 radiators in stock at any given time.</p>
               </div>
               <div className="flex flex-col items-center md:items-end">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">Emergency Support</span>
                  <p className="text-5xl font-black italic">011 493 7010</p>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-12">
               {[
                  { icon: ShieldCheck, title: "Pressure Tested", desc: "Every radiator is pressure-tested before leaving our workshop." },
                  { icon: Zap, title: "High-Efficiency", desc: "Core designs optimized for high-temperature climates." },
                  { icon: Settings, title: "OEM Quality", desc: "Units designed for exact manufacturer fitment specifications." },
                  { icon: Wrench, title: "Fitting Assistance", desc: "Advice and assistance for self-installations and technical resets." }
               ].map((feat, i) => (
                  <div key={i} className="text-left">
                     <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900">
                        <feat.icon className="w-5 h-5 " />
                     </div>
                     <h3 className="text-lg font-black uppercase italic mb-4 tracking-tighter leading-tight">{feat.title}</h3>
                     <p className="text-slate-500 font-medium italic text-sm leading-relaxed">{feat.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
