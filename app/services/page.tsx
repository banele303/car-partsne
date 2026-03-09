"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Settings,
  Disc,
  ShieldCheck,
  Zap,
  Package,
  Truck,
  Wrench,
  Activity,
  Award,
  Globe,
  BadgeDollarSign,
  Star
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const serviceCategories = [
  {
    icon: Wrench,
    title: "Rim Repairs",
    subtitle: "Structural & Aesthetic",
    image: "/rim-process.png",
    description: "Expert restoration for bent, cracked, or scratched alloy wheels. Structural integrity guaranteed.",
    tags: ["CNC", "Welding", "Polishing"],
    href: "/services/rim-repairs"
  },
  {
    icon: Disc,
    title: "Tyre Sales",
    subtitle: "New & Second Hand",
    image: "/tyres.png",
    description: "Premium selection of high-performance new tyres and quality-checked second-hand options.",
    tags: ["Performance", "SUV", "Value"],
    href: "/services/tyre-sales"
  },
  {
    icon: Award,
    title: "Mag Sales",
    subtitle: "Curated Collection",
    image: "/mag-collection.png",
    description: "Upgrade your vehicle with our massive range of new and pre-owned luxury mag wheels.",
    tags: ["Forged", "Alloy", "Custom"],
    href: "/services/mag-sales"
  },
  {
    icon: ShieldCheck,
    title: "Body Work",
    subtitle: "Minor Repairs",
    image: "/dent-repair.png",
    description: "Professional dent removal, bumper scuff repairs, and minor body work to keep your car looking new.",
    tags: ["Dents", "Bumpers", "Paint"],
    href: "/services/body-work"
  },
  {
    icon: Zap,
    title: "Diamond Cutting",
    subtitle: "CNC Precision",
    image: "/cnc-machine.png",
    description: "State-of-the-art CNC diamond cutting for that perfect factory-standard mirror finish on your mags.",
    tags: ["CNC", "Mirror", "OEM"],
    href: "/services/rim-repairs"
  },
  {
    icon: Activity,
    title: "Specialist HQ",
    subtitle: "Woodstock Facility",
    image: "/hero-rim.png",
    description: "Our flagship Sir Lowry Road workshop handling elite restorations and engineering projects.",
    tags: ["HQ", "Expert", "Elite"],
    href: "/services/workshop"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header — Dark & Tech */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/expert-tools.png" 
          alt="Technical Services" 
          fill 
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-5 py-2 bg-primary text-black rounded-full mb-8 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            >
              <Wrench className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]">Technical Precision</span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-black text-white italic leading-[0.85] mb-8 tracking-tighter"
            >
              Mastery In <br /><span className="text-primary not-italic uppercase">Motion.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Grid — Refined Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group"
              >
                <Link href={category.href}>
                  <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden bg-slate-100 mb-8 border border-slate-200 shadow-xl group-hover:scale-[1.02] transition-all duration-700">
                    <Image 
                      src={category.image} 
                      alt={category.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 leading-none via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-10 left-10 right-10">
                       <div className="flex items-center gap-2 mb-4">
                          {category.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-primary border border-primary/20 rounded-full">{tag}</span>
                          ))}
                       </div>
                       <h3 className="text-4xl font-black text-white italic uppercase mb-2 tracking-tight group-hover:text-primary transition-colors">{category.title}</h3>
                       <p className="text-slate-400 font-medium leading-relaxed italic line-clamp-2">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B / Freight Cards */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Wholesale Network",
                  desc: "Partner with Cape Town's elite wheel restoration hub. Dedicated B2B accounts, priority fitting, and bulk volume discounts for car dealerships.",
                  icon: BadgeDollarSign,
                  href: "/services/trade-in",
                  dark: true
                },
                {
                  title: "Courier Express",
                  desc: "Nationwide shipping solutions for retail and trade. Insured, tracked, and secure delivery of performance rims and tyres SA-wide.",
                  icon: Truck,
                  href: "/services/finance",
                  dark: false
                }
              ].map((card, i) => (
                <div key={i} className={`p-12 md:p-16 rounded-[64px] border ${card.dark ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'} flex flex-col justify-between group`}>
                   <div>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${card.dark ? 'bg-white/5 border border-white/10 text-primary' : 'bg-white shadow-sm text-slate-900 border border-slate-100'}`}>
                         <card.icon className="w-8 h-8" />
                      </div>
                      <h3 className={`text-4xl md:text-5xl font-black uppercase italic leading-none mb-8 ${card.dark ? 'text-white' : 'text-slate-900'}`}>{card.title}</h3>
                      <p className={`text-lg italic font-medium leading-relaxed mb-12 ${card.dark ? 'text-slate-500' : 'text-slate-500'}`}>{card.desc}</p>
                   </div>
                   <Button asChild className={`h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all ${card.dark ? 'bg-primary text-black hover:bg-white' : 'bg-slate-900 text-white hover:bg-primary'}`}>
                      <Link href={card.href}>View Opportunities <ArrowRight className="w-4 h-4 ml-2" /></Link>
                   </Button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Value Ticker — Dark Version */}
      <section className="py-24 bg-slate-950 overflow-hidden relative border-y border-white/5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="flex whitespace-nowrap animate-marquee-slow">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex gap-20 items-center">
                {[
                  { icon: ShieldCheck, text: "Quality Certified" },
                  { icon: Zap, text: "CNC Precision" },
                  { icon: Award, text: "OEM Standards" },
                  { icon: Star, text: "Elite Finishes" }
                ].map((item, j) => (
                  <div key={j} className="flex items-center gap-4">
                     <item.icon className="w-5 h-5 text-primary" />
                     <span className="text-2xl font-black text-white/20 uppercase italic tracking-tighter">{item.text}</span>
                  </div>
                ))}
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
