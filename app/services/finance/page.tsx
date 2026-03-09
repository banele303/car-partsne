"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Truck, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Package, 
  Search,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShippingPage() {
  const features = [
    {
      title: "Secure Packaging",
      desc: "Custom-engineered mag wheel crates to prevent any movement or scuffing during transit.",
      icon: Package
    },
    {
      title: "Full Tracking",
      desc: "Real-time SMS and email updates as your restored wheels move from Cape Town to your door.",
      icon: Search
    },
    {
      title: "Global Standards",
      desc: "We utilize premium couriers with proven track records in high-value automotive freight.",
      icon: ShieldCheck
    },
    {
      title: "Fast Transit",
      desc: "Priority shipping lanes ensure a 2-4 day turnaround for major South African metros.",
      icon: Clock
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/shipping-logistics.png" 
          alt="Nationwide Shipping Hub" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 text-primary">
              <Truck className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">Nationwide Delivery</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-none mb-6">
              Elite <span className="text-primary not-italic">Logistics</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-xl leading-relaxed italic border-l-2 border-primary/40 pl-6">
              Restoring rims in Cape Town, delivering perfection nationwide. Secure, insured shipping for performance wheels and tyres.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-12 bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Metros Covered", value: "100%" },
              { label: "Avg Delivery", value: "3 Days" },
              { label: "Insured Value", value: "Full" },
              { label: "Restored Sets", value: "5000+" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-primary font-black text-4xl mb-2 italic tracking-tighter">{stat.value}</p>
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4">{feature.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl">
               <Image 
                  src="/shipping-logistics.png" 
                  alt="Quality Control" 
                  fill 
                  className="object-cover" 
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            <div className="lg:pl-8">
               <h2 className="text-5xl font-black text-slate-900 uppercase italic leading-tight mb-8">
                  Guaranteed <span className="text-primary italic">Arrival</span>,<br />
                  Zero Exception.
               </h2>
               <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium italic">
                  We understand the value of your performance mags and luxury tyres. That's why we've built a Logistics Network specifically tailored for the automotive enthusiast.
               </p>
               <div className="space-y-6">
                  {[
                    "Standard Door-to-Door Delivery",
                    "Workshop-to-Workshop Transfers",
                    "Bulk Fleet Shipment Solutions",
                    "International Export Inquiries"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-slate-900 font-black uppercase text-xs tracking-tight">{item}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-12 flex gap-4">
                  <Button asChild className="h-16 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-primary transition-all">
                     <Link href="/contact">Get Shipping Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-16 px-8 rounded-2xl border-2 border-slate-200 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50">
                     <Link href="/">Track Order</Link>
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-6xl font-black text-white mb-6 italic uppercase tracking-tighter">
              Cape Town to <span className="text-primary">Anywhere.</span>
           </h2>
           <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium italic">
              From the heart of Woodstock, our logistics reach the furthest corners of South Africa. Secure your delivery with the Wheelworx shipping seal.
           </p>
           <div className="relative h-[400px] w-full bg-slate-900 rounded-[64px] border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
              </div>
              <MapPin className="w-20 h-20 text-primary animate-bounce mb-8" />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                 <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Active Network: 54 Cities</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
