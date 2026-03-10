"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Settings, 
  Disc, 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Wrench,
  Search,
  ArrowRight,
  Package,
  Layers,
  Hammer
} from "lucide-react";

const DONOR_MODELS = [
  { name: "Ford Ranger", years: "2011 - 2024", models: "T6, T7, T8", image: "/car-body.png" },
  { name: "Toyota Hilux", years: "2005 - 2024", models: "Vigo, Revo", image: "/new-parts.png" },
  { name: "Isuzu D-Max", years: "2012 - 2024", models: "KB, D-Max", image: "/new-parts3.png" },
  { name: "Nissan NP200", years: "2009 - 2023", models: "All Models", image: "/new-parts4.png" },
  { name: "VW Amarok", years: "2010 - 2022", models: "Single & Double Cab", image: "/vehicle-maintenance.png" },
  { name: "Hyundai H100", years: "All Years", models: "Bakkie / Porter", image: "/car-parts-commercial.png" }
];

const SECOND_HAND_PARTS = [
  "Complete Engines", "Gearboxes", "Differentials", "Load bins", "Door Panels", "Tailgates", "Interiors", "Chassis Components", "ECUs & Electronic Modules"
];

export default function BakkieSpares() {
  return (
    <div className="flex flex-col bg-white font-display">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-900">
        <Image 
          src="/bakkie-stripping-commercial.png" 
          alt="Bakkie Spares" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Commercial Bakkie Centre</span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-[0.8] mb-8 tracking-tighter">
              STRIPPING FOR <br /><span className="text-primary not-italic underline decoration-4 underline-offset-8">SPARES.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium italic mb-10 leading-relaxed border-l-4 border-primary pl-8">
              The Bakkie Specialist. We currently have over 100 vehicles in our yard being stripped for high-quality used parts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl shadow-primary/20">
                  <Link href="tel:0114937010">Check Part Availability</Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                  <Link href="https://wa.me/27791799149">WhatsApp Yard Manager</Link>
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Donors */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
               <div className="text-left">
                  <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-4 block underline decoration-primary underline-offset-4 decoration-2">Donor Stock</span>
                  <h2 className="text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-4">Latest Vehicles <br/>for <span className="text-primary">Stripping.</span></h2>
               </div>
               <p className="max-w-md text-slate-500 font-medium italic text-right hidden lg:block">Our yard is updated daily with new donor vehicles arriving directly from our logistics network.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {DONOR_MODELS.map((model, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-[48px] border border-slate-100 bg-[#f8fafc] hover:border-primary/50 transition-all cursor-pointer text-left">
                     <div className="relative h-64 overflow-hidden">
                        <Image src={model.image} alt={model.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-8">
                           <span className="px-3 py-1 bg-primary text-black text-[9px] font-black uppercase tracking-widest rounded-full">{model.years}</span>
                        </div>
                     </div>
                     <div className="p-10">
                        <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-2 tracking-tighter leading-none">{model.name}</h3>
                        <p className="text-slate-500 font-medium italic text-sm mb-8">{model.models}</p>
                        <div className="flex items-center justify-between">
                           <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">Donor Available <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"/></span>
                           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all">
                              <ArrowRight className="w-4 h-4 text-slate-900" />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Parts Breakdown */}
      <section className="py-24 bg-slate-900 text-white rounded-[64px] mx-4 sm:mx-6 overflow-hidden">
         <div className="container mx-auto px-8 py-10">
            <div className="grid lg:grid-cols-3 gap-20 text-left">
               <div className="lg:col-span-1">
                  <h2 className="text-4xl font-black uppercase italic mb-8 leading-tight">SECOND-HAND <br/><span className="text-primary">GENUINE PARTS.</span></h2>
                  <p className="text-lg text-slate-400 font-medium italic mb-10 leading-relaxed">
                     Why buy expensive new parts when you can get genuine, tested second-hand components at 50% of the cost? 
                  </p>
                  <ul className="space-y-4">
                     {SECOND_HAND_PARTS.map((part, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] italic text-slate-200">
                           <Settings className="w-4 h-4 text-primary" />
                           {part}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-md rounded-[48px] p-12 border border-white/10 flex flex-col justify-center">
                     <Layers className="w-12 h-12 text-primary mb-8" />
                     <h3 className="text-2xl font-black uppercase italic mb-4">Quality Checked</h3>
                     <p className="text-slate-400 font-medium italic">Every mechanical part pulled from a donor vehicle is inspected by our senior technicians before sale.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-[48px] p-12 border border-white/10 flex flex-col justify-center">
                     <Hammer className="w-12 h-12 text-primary mb-8" />
                     <h3 className="text-2xl font-black uppercase italic mb-4">Body Panels</h3>
                     <p className="text-slate-400 font-medium italic">We stock load bins, tailgates, and doors in multiple factory colors—often eliminating the need for painting.</p>
                  </div>
                  <div className="col-span-full bg-primary/10 rounded-[48px] p-12 border border-primary/20 flex flex-col items-center text-center">
                     <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                        <Search className="w-8 h-8 text-primary" />
                     </div>
                     <h3 className="text-2xl font-black uppercase italic mb-4">Inventory Search</h3>
                     <p className="text-slate-400 font-medium italic max-w-xl mb-8">We are connected to a national network of bakkie scrappers. If we don't have it, we'll find it for you.</p>
                     <Button size="lg" className="h-16 px-12 rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                        Request a Part Search
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6 text-center">
             <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-100 rounded-full mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Yard Access</span>
             </div>
             <h2 className="text-5xl lg:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-8">Dodge high prices.<br/><span className="text-primary italic">Strip with us.</span></h2>
             <Button asChild size="lg" className="h-20 px-16 rounded-[32px] bg-primary text-black font-black uppercase tracking-widest text-lg hover:bg-slate-900 hover:text-white transition-all shadow-2xl shadow-primary/20">
                <Link href="/contact">Contact Bakkie Centre</Link>
             </Button>
         </div>
      </section>
    </div>
  );
}
