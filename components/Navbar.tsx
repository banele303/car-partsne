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
  ShieldCheck,
  Truck,
  Phone,
  MessageCircle,
  Package,
  Sun,
  Moon,
  LogOut,
  User,
  LogIn,
  UserPlus
} from "lucide-react";
import { useTheme } from "next-themes";
import { useSession, signOut } from "@/lib/auth-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SERVICES = [
  { name: "Taxi Spares", href: "/taxi-spares", icon: CarFront, description: "Quality spares for all taxi models" },
  { name: "Bakkie Spares", href: "/bakkie-spares", icon: Truck, description: "Rugged parts for workhorses" },
  { name: "Car Spares", href: "/car-spares", icon: Wrench, description: "Universal components & accessories" },
  { name: "Radiator Centre", href: "/radiator-centre", icon: ShieldCheck, description: "Cooling systems & lock sets" },
  { name: "Inventory", href: "/inventory", icon: Package, description: "Search our full digital warehouse" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    setMounted(true);
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
          isActive ? "text-primary" : scrolled ? "text-slate-400" : "text-slate-900 dark:text-slate-100"
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
      className={`sticky top-0 z-[100] w-full transition-all duration-500 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3 sm:py-4 ${
        scrolled 
          ? "backdrop-blur-2xl shadow-xl shadow-black/5 sm:py-3" 
          : "sm:py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-12">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
             <div className="flex flex-col leading-none">
                <span className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white group-hover:text-primary transition-colors">COMMERCIAL</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Auto Parts Group</span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/taxi-spares">Taxi Spares</NavLink>
            <NavLink href="/bakkie-spares">Bakkie Spares</NavLink>
            <NavLink href="/car-spares">Car Spares</NavLink>
            <NavLink href="/radiator-centre">Radiator Centre</NavLink>
            <NavLink href="/inventory">Inventory</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6 shrink-0 ml-auto xl:ml-0">
            
            {/* Theme Toggle & Auth */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-yellow-500" />
                  ) : (
                    <Moon className="h-4 w-4 text-slate-700" />
                  )}
                </Button>
              )}

              {/* Auth Buttons */}
              <div className="hidden sm:flex items-center gap-2">
                {session ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="rounded-full gap-2 pl-2 pr-4 h-11 border border-slate-100 hover:bg-slate-50 transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <User className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-600 hidden md:inline-block">
                          {session.user.name?.split(' ')[0] || "Account"}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl border-slate-100 shadow-xl">
                      <DropdownMenuItem className="rounded-xl py-3 focus:bg-slate-50 cursor-pointer transition-colors" asChild>
                         <Link href="/profile" className="flex items-center gap-2 font-bold text-xs text-slate-600">
                           <User className="w-4 h-4" /> Profile
                         </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="rounded-xl py-3 text-red-500 focus:bg-red-50/50 cursor-pointer transition-colors font-bold text-xs"
                        onClick={() => signOut()}
                      >
                         <LogOut className="w-4 h-4 mr-2" /> Log Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Button variant="ghost" asChild className="rounded-xl font-bold text-[11px] uppercase tracking-widest h-11 px-6 hover:text-primary transition-all">
                      <Link href="/login">Log In</Link>
                    </Button>
                    <Button asChild className="bg-slate-900 dark:bg-primary text-white dark:text-black rounded-xl font-black text-[11px] uppercase tracking-widest h-11 px-6 hover:bg-primary hover:text-black hover:shadow-lg transition-all shadow-sm">
                      <Link href="/login?mode=signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" 
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
                  { name: "Taxi Spares", href: "/taxi-spares" },
                  { name: "Bakkie Spares", href: "/bakkie-spares" },
                  { name: "Car Spares", href: "/car-spares" },
                  { name: "Radiator Centre", href: "/radiator-centre" },
                  { name: "Inventory", href: "/inventory" },
                  { name: "Contact Us", href: "/contact" },
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
               {/* Mobile Auth & Theme */}
               <div className="mt-8 flex flex-col gap-4">
                  {session ? (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <User className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">{session.user.name}</span>
                           <span className="text-xs font-bold text-slate-500">{session.user.email}</span>
                        </div>
                      </div>
                      <Link 
                        href="/profile" 
                        className="flex items-center gap-3 p-6 text-xl font-bold text-slate-900 dark:text-white border-b border-slate-50 dark:border-slate-800"
                        onClick={() => setIsOpen(false)}
                      >
                         <User className="w-5 h-5" /> Profile Settings
                      </Link>
                      <button 
                        onClick={() => { signOut(); setIsOpen(false); }}
                        className="flex items-center gap-3 p-6 text-xl font-bold text-red-500 text-left"
                      >
                         <LogOut className="w-5 h-5" /> Log Out Account
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <Button variant="outline" asChild className="w-full h-16 rounded-2xl text-lg font-black uppercase tracking-widest border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white">
                        <Link href="/login?mode=login" onClick={() => setIsOpen(false)}>Log In</Link>
                      </Button>
                      <Button asChild className="w-full h-16 rounded-2xl text-lg font-black uppercase tracking-widest bg-slate-900 dark:bg-primary text-white dark:text-black">
                        <Link href="/login?mode=signup" onClick={() => setIsOpen(false)}>Sign Up Free</Link>
                      </Button>
                    </div>
                  )}

                  <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />

                  <Link 
                    href="https://wa.me/27791799149" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20ba5c] text-white p-8 rounded-[32px] transition-all shadow-xl shadow-green-500/20 active:scale-95"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[14px] font-black uppercase tracking-widest opacity-70 mb-1">WhatsApp Us</span>
                      <span className="text-xl font-bold font-mono">079 179 9149</span>
                    </div>
                  </Link>
               </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
