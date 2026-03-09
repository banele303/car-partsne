"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  ChevronDown,
  User,
  LogOut,
  Wrench,
  CarFront,
  Banknote,
  ShieldCheck,
  Repeat,
  Truck
} from "lucide-react";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";
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
  const { data: session } = useSession();

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
      className={`sticky top-0 z-[100] w-full transition-all duration-500 bg-white border-b border-slate-100 py-4 ${
        scrolled 
          ? "backdrop-blur-2xl shadow-xl shadow-black/5" 
          : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-12">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className={`relative transition-all duration-300 ${scrolled ? "h-14 w-44" : "h-24 w-64"}`}>
              <Image 
                src="/wheelwork-logo.png" 
                alt="Wheelworx Logo" 
                fill 
                className="object-contain" 
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
            {/* Search Icon */}
            <button className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl transition-all border ${scrolled ? "text-slate-400 border-slate-100 hover:bg-slate-50" : "text-slate-900 border-slate-100 hover:bg-slate-50"}`}>
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link href="/cart" className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all border relative group ${scrolled ? "text-slate-400 border-slate-100 hover:bg-slate-50" : "text-slate-900 border-slate-100 hover:bg-slate-50"}`}>
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-black font-black text-[9px] w-5 h-5 rounded-lg flex items-center justify-center border-2 border-white">
                0
              </span>
            </Link>

            {/* User Auth */}
            <div className={`hidden md:flex items-center ml-2 border-l pl-8 ${scrolled ? "border-slate-100" : "border-slate-100"}`}>
              {session?.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={`flex items-center gap-3 rounded-2xl px-4 py-6 border transition-all ${scrolled ? "bg-slate-50 border-slate-100 text-slate-900" : "bg-slate-50 border-slate-100 text-slate-900"}`}>
                      <div className="w-8 h-8 rounded-xl bg-primary text-black flex items-center justify-center font-black text-xs">
                        {session.user.email?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest max-w-[100px] truncate">{session.user.name || session.user.email}</span>
                      <ChevronDown className="w-3 h-3 opacity-50 transition-transform group-data-[state=open]:rotate-180" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 mt-4 bg-white border border-slate-100 rounded-2xl p-2 shadow-2xl">
                    <div className="px-4 py-4 border-b border-slate-100 mb-2">
                      <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{session.user.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{session.user.email}</p>
                    </div>
                    <DropdownMenuItem asChild className="rounded-xl cursor-pointer p-4 focus:bg-slate-50 text-slate-900">
                      <Link href="/admin" className="flex items-center font-bold text-xs uppercase tracking-widest"><User className="mr-3 h-4 w-4 text-primary" /> Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="rounded-xl text-red-500 focus:text-red-400 cursor-pointer mt-1 p-4 font-bold text-xs uppercase tracking-widest" 
                      onClick={() => signOut()}
                    >
                      <LogOut className="mr-3 h-4 w-4" /> Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild className="h-12 rounded-xl shadow-2xl shadow-primary/40 bg-primary hover:bg-white text-black font-black px-8 uppercase tracking-widest text-xs transition-all hover:-translate-y-1">
                  <Link href="/login">Sign In</Link>
                </Button>
              )}
            </div>

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
              {/* Mobile Search */}
              <div className="relative w-full">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Find your part..."
                  className="w-full h-16 pl-16 pr-6 bg-slate-50 border border-slate-100 rounded-2xl text-[16px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:text-slate-400"
                />
              </div>

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

              {/* Mobile Footer / Auth */}
              <div className="mt-auto pt-12 pb-12">
                {session?.user ? (
                  <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary text-black flex items-center justify-center font-black text-2xl">
                        {session.user.email?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-xl uppercase tracking-tight">{session.user.name || "Member"}</p>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1 truncate max-w-[180px]">{session.user.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                       <Button asChild className="w-full h-14 rounded-2xl bg-slate-900 text-white hover:bg-black border-none shadow-sm font-bold uppercase tracking-widest text-[10px]">
                          <Link href="/admin">Dashboard</Link>
                       </Button>
                       <Button 
                          variant="outline" 
                          className="w-full h-14 rounded-2xl text-red-500 border-red-500/20 hover:bg-red-500/10 font-bold uppercase tracking-widest text-[10px]"
                          onClick={() => signOut()}
                       >
                          Sign Out
                       </Button>
                    </div>
                  </div>
                ) : (
                  <Button asChild className="w-full h-18 rounded-2xl bg-primary hover:bg-white text-black font-black text-lg shadow-2xl shadow-primary/40 uppercase tracking-widest transition-all">
                    <Link href="/login">Explore Access</Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
