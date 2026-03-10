"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const groupCompanies = [
  { name: "Commercial Auto Parts", tag: "Taxi Spares", href: "/taxi-spares" },
  { name: "Commercial Car Spares", tag: "Car Parts", href: "/car-spares" },
  { name: "Commercial Bakkie Centre", tag: "Bakkie Spares", href: "/bakkie-spares" },
  { name: "Commercial Radiator Centre", tag: "Radiators & Locks", href: "/radiator-centre" },
];

const sisterCompanies = [
  { name: "TPC Logistics", href: "/tpc" },
  { name: "Engines for Africa", href: "/engines" },
];

const complianceLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "POPI Manual", href: "/popi" },
  { name: "Webmaster Login", href: "/login" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white overflow-hidden font-display">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">COMMERCIAL</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Auto Parts Group</span>
              </div>
            </Link>
            <p className="text-slate-400 font-medium text-sm leading-relaxed italic pr-4">
              Getting you back on the road. Fast! Your one-stop shop for Taxi, Bakkie, and Car spares since 2023.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <button key={i} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all">
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Group Network */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 underline decoration-primary underline-offset-8 decoration-2">The Group</h4>
            <ul className="space-y-4">
              {groupCompanies.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-primary transition-all font-bold text-xs uppercase tracking-widest flex items-center justify-between group italic">
                    <span className="flex items-center gap-2">
                       <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                       {item.name}
                    </span>
                    <span className="text-[9px] opacity-30 group-hover:opacity-100">{item.tag}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sister Companies & Compliance */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 underline decoration-primary underline-offset-8 decoration-2">Network</h4>
            <div className="space-y-8">
              <ul className="space-y-4">
                {sisterCompanies.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-200 hover:text-primary transition-all font-black text-xs uppercase tracking-widest flex items-center gap-2 group">
                      <ExternalLink className="h-3.5 w-3.5 text-primary" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-4 space-y-3">
                 {complianceLinks.map(link => (
                    <Link key={link.name} href={link.href} className="block text-[10px] text-slate-500 hover:text-white transition-colors uppercase font-black tracking-widest">
                       {link.name}
                    </Link>
                 ))}
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 hover:border-primary/20 transition-all">
             <h4 className="text-sm font-black uppercase mb-6 italic">Support HQ</h4>
             <div className="space-y-6">
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4 text-primary" />
                   </div>
                   <Link href="tel:0114937010" className="text-slate-200 font-black text-sm tracking-tight">011 493 7010</Link>
                </div>
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="h-4 w-4 text-[#25D366]" />
                   </div>
                   <Link href="https://wa.me/27791799149" className="text-slate-200 font-black text-sm tracking-tight">079 179 9149</Link>
                </div>
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-slate-400" />
                   </div>
                   <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Mon-Fri 08:30-17:30</p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[9px]">
             © 2023 COMMERCIAL AUTO PARTS GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 items-center text-slate-600">
             <span className="text-[9px] font-black uppercase tracking-widest">SABS APPROVED</span>
             <div className="h-1 w-1 bg-slate-800 rounded-full" />
             <span className="text-[9px] font-black uppercase tracking-widest">VERIFIED DONOR STOCK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
