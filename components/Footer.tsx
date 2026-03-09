"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ChevronRight
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
];

const mainServices = [
  { name: "Rim Repairs", href: "/services/rim-repairs" },
  { name: "Body Work", href: "/services/body-work" },
  { name: "Shipping", href: "/services/finance" },
  { name: "Wholesale", href: "/services/trade-in" },
];

export default function Footer() {
  return (
    <footer className="footer-gradient pt-24 pb-12 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-16 w-48">
                <Image 
                  src="/wheelwork-logo.png" 
                  alt="Wheelworx Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-slate-400 font-medium text-sm leading-relaxed italic pr-4">
              Cape Town&apos;s leading specialists in professional rim repairs and performance tyre solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button key={i} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black transition-all">
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.concat(mainServices).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-primary transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2 group italic">
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6">HQ woodstock</h4>
            <div className="space-y-4">
               <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                     <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-slate-300 font-bold text-xs italic">80 Sir Lowry Rd, Cape Town</p>
               </div>
               <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                     <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <Link href="tel:+27763526616" className="text-slate-300 font-bold text-xs">076 352 6616</Link>
               </div>
               <div className="flex gap-4 items-center text-slate-300 font-bold text-[10px] uppercase tracking-widest italic opacity-50">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Fri 08:30-17:30</span>
               </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-white/5 p-8 rounded-[32px] border border-white/5 hover:border-primary/20 transition-all group">
             <h4 className="text-sm font-black uppercase mb-2">Book Service</h4>
             <p className="text-[10px] text-slate-400 font-medium mb-6 italic leading-relaxed">Book your assessment today and get a custom quote within 24 hours.</p>
             <Link href="/contact" className="inline-flex h-12 items-center justify-center w-full bg-primary text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white transition-colors">
                Contact Now
             </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px]">
             © {new Date().getFullYear()} WHEELWORX CAPE TOWN.
          </p>
          <div className="flex gap-6 opacity-30">
             {["VISA", "MASTERCARD", "OZOW"].map(tag => (
                <span key={tag} className="text-[9px] font-black tracking-[0.4em]">{tag}</span>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
