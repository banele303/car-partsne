"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Settings, 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Package,
  Disc,
  Zap,
  Info
} from "lucide-react";

const PRODUCTS = [
  { 
    category: "Brake System", 
    image: "/taxi-brakes.png",
    items: ["Brake Pads (SABS Approved)", "Brake Discs", "Wheel Cylinders", "Master Cylinders", "Brake Hoses"] 
  },
  { 
    category: "Suspension", 
    image: "/taxi-suspension.png",
    items: ["Shock Absorbers", "Control Arms", "Ball Joints", "Tie Rod Ends", "Rack Ends", "Wheel Bearings"] 
  },
  { 
    category: "Engine Components", 
    image: "/taxi-engine-parts.png",
    items: ["Oil Pumps", "Water Pumps", "Timing Kits", "Gasket Sets", "Mountings", "Filters"] 
  },
  { 
    category: "Body & Lighting", 
    image: "/taxi-body-parts.png",
    items: ["Headlights", "Tail Lights", "Indicators", "Bumpers", "Grills", "Door Handles"] 
  },
  { 
    category: "Clutch & Drive", 
    image: "/taxi-clutch.png",
    items: ["Clutch Kits", "CV Joints", "Driveshafts", "Gearbox Mountings", "Slave Cylinders"] 
  }
];

export default function TaxiSpares() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <Image 
          src="/taxi-commercial.png" 
          alt="Taxi Spares" 
          fill 
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Commercial Auto Parts</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9] mb-6">
              TAXI SPARES <br /><span className="text-primary">SPECIALISTS.</span>
            </h1>
            <p className="max-w-xl text-slate-300 text-lg font-medium italic mb-8">
              The largest inventory of Quantum, Siyaya, and high-volume taxi spares in the region. SABS approved products for maximum safety on the road.
            </p>
            <div className="flex gap-4">
               <Button asChild size="lg" className="h-14 px-8 rounded-xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                  <Link href="tel:0114937010">Call Sales</Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-xl border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                  <Link href="https://wa.me/27791799149">WhatsApp Enquiry</Link>
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="mb-16 text-left">
              <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">Our Product <span className="text-primary">Range.</span></h2>
              <div className="h-1.5 w-24 bg-primary rounded-full" />
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {PRODUCTS.map((group, i) => (
                <div key={i} className="bg-white rounded-[40px] shadow-sm border border-slate-100 hover:border-primary/20 transition-all group overflow-hidden flex flex-col">
                   <div className="relative h-48 w-full">
                      <Image 
                        src={group.image} 
                        alt={group.category} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                   </div>
                   <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-lg font-black text-slate-900 uppercase italic mb-6 leading-tight">{group.category}</h3>
                      <ul className="space-y-3 mb-8 flex-1">
                         {group.items.map((item, j) => (
                           <li key={j} className="flex items-center gap-3 text-slate-500 font-medium italic text-xs">
                              <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                              {item}
                           </li>
                         ))}
                      </ul>
                      <Button variant="link" className="p-0 h-auto text-primary font-black uppercase tracking-widest text-[9px] hover:text-slate-900 self-start">
                         View Details <ChevronRight className="ml-1 w-3 h-3" />
                      </Button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-950 text-white">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
               <div>
                  <h2 className="text-4xl font-black uppercase italic mb-8 leading-tight">WHY THE TAXI INDUSTRY <span className="text-primary">TRUSTS US.</span></h2>
                  <div className="grid gap-8">
                     {[
                        { icon: ShieldCheck, title: "SABS Approved", desc: "We prioritize safety with certified components." },
                        { icon: Truck, title: "Next-Day Delivery", desc: "Our fleet ensures parts reach your workshop fast." },
                        { icon: Info, title: "Expert Advice", desc: "Counter staff that understands taxi maintenance." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6">
                           <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 text-primary">
                              <item.icon className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="text-lg font-black uppercase italic mb-2">{item.title}</h4>
                              <p className="text-slate-400 font-medium italic text-sm">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative h-[500px] rounded-[48px] overflow-hidden">
                  <Image src="/workshop-services.png" alt="Workshop" fill className="object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 p-12 flex flex-col justify-end">
                     <p className="text-3xl font-black italic uppercase leading-none mb-4 whitespace-pre-line">
                        GETTING YOU BACK {"\n"}
                        <span className="text-primary italic">ON THE ROAD. FAST!</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-black text-slate-900 uppercase italic mb-8">Need a specific part?</h2>
            <p className="text-xl text-slate-500 font-medium italic mb-12 max-w-2xl mx-auto">
               Our telesales team is ready to assist with pricing and availability for all taxi models.
            </p>
            <Button asChild size="lg" className="h-20 px-16 rounded-[32px] bg-primary text-black font-black uppercase tracking-widest text-lg hover:bg-slate-900 hover:text-white transition-all shadow-xl">
               <Link href="tel:0114937010">Request a Quote</Link>
            </Button>
         </div>
      </section>
    </div>
  );
}
