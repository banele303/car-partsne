"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  BadgeDollarSign, 
  TrendingUp, 
  Briefcase, 
  FileCheck, 
  ShieldCheck, 
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WholesalePage() {
  const benefits = [
    {
      title: "Tiered Discounts",
      desc: "Competitive wholesale pricing structures based on monthly volume commitments.",
      icon: BadgeDollarSign
    },
    {
      title: "Priority Workshop",
      desc: "Expedited turnaround for dealership and fleet partners to minimize vehicle downtime.",
      icon: TrendingUp
    },
    {
      title: "Fleet Management",
      desc: "End-to-end wheel and tyre logistics for large fleets and car rental agencies.",
      icon: Briefcase
    },
    {
      title: "B2B Dashboard",
      desc: "Dedicated account management and streamlined invoicing for business accounts.",
      icon: FileCheck
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-950">
        <Image 
          src="/mag-collection.png" 
          alt="Wholesale Inventory" 
          fill 
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-black rounded-full mb-8 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
               <Users className="w-4 h-4" />
               <span className="font-black uppercase tracking-[0.3em] text-[10px]">Partnership Network</span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-black text-white uppercase italic leading-[0.8] mb-8 tracking-tighter">
              B2B <span className="text-primary not-italic">Wholesale</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed italic border-l-2 border-primary/50 pl-8">
              Empowering Cape Town's automotive sector with high-volume Mag & Tyre solutions. Join over 50+ registered dealership partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {benefits.map((benefit, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group"
                   >
                     <div className="w-16 h-16 rounded-2xl bg-slate-950 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-4">{benefit.title}</h3>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">{benefit.desc}</p>
                   </motion.div>
                 ))}
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-5xl font-black text-slate-900 uppercase italic leading-tight mb-8">
                    Scale Your <span className="text-primary italic">Dealership</span> With Wheelworx.
                 </h2>
                 <p className="text-slate-500 text-xl font-medium mb-10 leading-relaxed italic">
                    We provide the structural backbone for Cape Town's elite car retailers, ensuring their inventory is delivered with flawless rims and premium rubber.
                 </p>
                 <div className="space-y-6 mb-12">
                    {[
                      "Dedicated B2B Support Representative",
                      "Simplified monthly consolidated billing",
                      "Priority collection & delivery service",
                      "Digital stock feed for your sales team"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                           <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-slate-900 font-bold uppercase text-xs tracking-tight">{item}</span>
                      </div>
                    ))}
                 </div>
                 <Button asChild className="h-20 px-12 rounded-[32px] bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-2xl">
                    <Link href="/contact">Register Your Business</Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic max-w-4xl mx-auto leading-tight mb-12">
              "The most reliable <span className="text-primary italic">B2B wheel network</span> in the Western Cape."
            </h2>
            <div className="flex flex-col items-center">
               <div className="w-16 h-1 w-24 bg-primary mb-8 rounded-full" />
               <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-xs underline decoration-primary underline-offset-8">Fleet Partner Certification</p>
            </div>
         </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-slate-50 rounded-[64px] p-16 lg:p-24 border border-slate-100 relative overflow-hidden flex flex-col items-center text-center shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 -mr-48 -mt-48 rounded-full blur-[80px]" />
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic mb-8 max-w-3xl">
                 Ready to <span className="text-primary">Apply?</span>
              </h2>
              <p className="text-slate-500 text-xl font-medium mb-12 max-w-2xl italic">
                 Take your dealership to the next level with Wheelworx wholesale solutions. Quick verification and immediate account activation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="h-18 px-12 rounded-2xl bg-primary text-black hover:bg-white font-black uppercase tracking-[0.2em] shadow-xl text-xs">
                   <Link href="/contact" className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5" /> Start Application
                   </Link>
                </Button>
                <Link 
                  href="https://wa.me/27763526616" 
                  className="inline-flex items-center justify-center gap-3 h-18 px-12 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl text-xs hover:scale-105 transition-all"
                >
                   <MessageCircle className="w-5 h-5" /> Chat with B2B Lead
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
