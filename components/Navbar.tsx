"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown,
  Wrench,
  CarFront,
  Banknote,
  ShieldCheck,
  Repeat,
  Truck
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SERVICES = [
  { name: "Rim Repairs", href: "/services/rim-repairs", icon: Wrench, description: "Expert alloy restoration" },
  { name: "Tyre Sales", href: "/services/tyre-sales", icon: CarFront, description: "New & second hand tyres" },
  { name: "Mag Sales", href: "/services/mag-sales", icon: Banknote, description: "New & used wheel sets" },
  { name: "Body Work", href: "/services/body-work", icon: ShieldCheck, description: "Dents & bumper repairs" },
  { name: "Nationwide Shipping", href: "/services/finance", icon: Truck, description: "SA-wide delivery solutions" },
  { name: "Wholesale", href: "/services/trade-in", icon: Repeat, description: "B2B dealer partnerships" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return (
      <Link 
        href={href} 
        className={`relative font-bold text-[13px] uppercase tracking-widest transition-all hover:text-primary ${
          isActive ? "text-primary" : scrolled ? "text-slate-400" : "text-slate-900"
        }`}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-primary rounded-t-full"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header 
      className={`sticky top-0 z-[100] w-full transition-all duration-500 bg-white border-b border-slate-100 py-3 sm:py-4 ${
        scrolled 
          ? "backdrop-blur-2xl shadow-xl shadow-black/5 sm:py-3" 
          : "sm:py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-12">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className={`relative transition-all duration-300 ${scrolled ? "h-10 w-32 sm:h-14 sm:w-44" : "h-14 w-44 sm:h-24 sm:w-64"}`}>
              <Image 
                src="/wheelwork-logo.png" 
                alt="Wheelworx Logo" 
                fill 
                className="object-contain transition-transform duration-300 group-hover:scale-105" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`group flex items-center gap-2 font-bold text-[13px] uppercase tracking-widest transition-all focus:outline-none data-[state=open]:text-primary ${scrolled ? "text-slate-400" : "text-slate-900"}`}>
                Services
                <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[380px] p-6 bg-white/95 backdrop-blur-3xl border border-slate-100 rounded-[32px] shadow-2xl mt-6">
                <div className="grid gap-3">
                  <div className="mb-4 px-2 pb-4 border-b border-slate-100">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">The Workshop</p>
                     <p className="text-sm font-bold text-slate-900 mt-1">Specialized Restoration & Sales</p>
                  </div>
                  {SERVICES.map((service) => (
                    <DropdownMenuItem key={service.name} asChild className="rounded-2xl p-4 cursor-pointer focus:bg-slate-50 transition-all">
                      <Link href={service.href} className="flex flex-row items-center gap-5 w-full">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{service.name}</span>
                          <span className="text-xs text-slate-500 font-medium italic mt-0.5">{service.description}</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6 shrink-0 ml-auto xl:ml-0">
            {/* User Auth */}
            <Link 
              href="https://wa.me/27763526616" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5c] text-white w-12 h-12 sm:w-auto sm:px-5 sm:py-3 rounded-full sm:rounded-2xl transition-all shadow-lg shadow-green-500/20 group hover:-translate-y-1 active:scale-95 shrink-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-0.5">Direct Chat</span>
                <span className="text-xs font-bold font-mono">+27 76 352 6616</span>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden fixed inset-x-0 top-[75px] bg-white z-[90] overflow-y-auto flex flex-col"
          >
            <div className="container mx-auto px-8 py-12 flex flex-col gap-8">

              {/* Mobile Links */}
              <nav className="flex flex-col gap-4 mt-6">
                {[
                  { name: "Home", href: "/" },
                  { name: "Products", href: "/products" },
                  { name: "Services", href: "/services" },
                  { name: "Blog", href: "/blog" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <Link 
                        href={item.href} 
                        className={`flex items-center py-5 text-2xl font-black uppercase tracking-tighter border-b border-slate-50 ${isActive ? "text-primary" : "text-slate-900"}`}
                      >
                         {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto pt-12 pb-12">
                <Link 
                  href="https://wa.me/27763526616" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20ba5c] text-white p-8 rounded-[32px] transition-all shadow-xl shadow-green-500/20 active:scale-95"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[14px] font-black uppercase tracking-widest opacity-70 mb-1">WhatsApp Us</span>
                    <span className="text-xl font-bold font-mono">+27 76 352 6616</span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
