"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Filter,
  Search,
  Loader2,
  Phone,
  MessageCircle,
  Package,
  Grid,
  List,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Truck,
  LayoutGrid,
  Wrench,
  CarFront,
  Flame
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

const CATEGORIES = [
  { id: "all", name: "Full Catalog", icon: LayoutGrid },
  { id: "taxi", name: "Taxi Spares", icon: CarFront },
  { id: "bakkie", name: "Bakkie Parts", icon: Truck },
  { id: "car", name: "Passenger Car", icon: Wrench },
  { id: "cooling", name: "Radiator & Cooling", icon: Flame }
];

export default function InventoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [connError, setConnError] = useState(false);

  // Fetching products from Convex
  const products = useQuery(api.cars.getAll, {
    make: selectedCategory === "all" ? undefined : selectedCategory,
  });
  
  const isLoading = products === undefined;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setTimeout(() => {
        setConnError(true);
      }, 5000);
    } else {
      setConnError(false);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  const filteredProducts = products?.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.make.toLowerCase().includes(query) ||
      p.model.toLowerCase().includes(query) ||
      (p.bodyType || "").toLowerCase().includes(query) ||
      (p.description || "").toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section (Replaces Hero) */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Live Warehouse Inventory</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                PARTS <span className="text-primary not-italic">CATALOG.</span>
              </h1>
            </div>
            <p className="max-w-md text-slate-600 text-sm font-medium italic leading-relaxed">
              Real-time inventory of genuine spares across all divisions. SABS approved and quality certified.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Toolbar Section */}
      <div className="sticky top-[75px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-6">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 flex-grow w-full lg:w-auto">
             {/* Search Bar */}
             <div className="relative flex-grow w-full md:max-w-md">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search specific parts, models, or OEs..." 
                  className="w-full h-14 pl-14 pr-6 bg-slate-100/80 border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-primary transition-all shadow-inner"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             
             {/* Category Chips */}
             <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar w-full md:w-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 h-14 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap",
                      selectedCategory === cat.id 
                        ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10" 
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
             </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
             <div className="h-10 w-px bg-slate-100 mx-2 hidden md:block" />
             <Button 
               variant="ghost" 
               size="icon" 
               onClick={() => setViewMode("grid")}
                className={cn("h-14 w-14 rounded-2xl transition-all", viewMode === "grid" ? "bg-primary text-black font-black" : "bg-transparent text-slate-500 hover:text-slate-900")}
             >
               <Grid className="h-5 w-5" />
             </Button>
             <Button 
               variant="ghost" 
               size="icon" 
               onClick={() => setViewMode("list")}
                className={cn("h-14 w-14 rounded-2xl transition-all", viewMode === "list" ? "bg-primary text-black font-black" : "bg-transparent text-slate-500 hover:text-slate-900")}
             >
               <List className="h-5 w-5" />
             </Button>
          </div>
        </div>
      </div>

      {/* Main Catalog Section */}
      <section className="py-20 min-h-[600px] bg-slate-50/50">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-40"
              >
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-xl shadow-primary/10" />
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-widest text-slate-900">Syncing Warehouse...</h3>
                    <p className="text-slate-400 text-xs mt-2 italic">Scanning live donor stock & parts inventory</p>
                  </div>
                </div>
              </motion.div>
            ) : filteredProducts && filteredProducts.length > 0 ? (
              <motion.div 
                key="grid"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className={cn(
                  "grid gap-8",
                  viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
                )}
              >
                {filteredProducts.map((item) => (
                  <CarCard key={item._id} car={item} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-40 max-w-lg mx-auto"
              >
                <div className="w-24 h-24 bg-white border border-slate-100 flex items-center justify-center rounded-[32px] mx-auto mb-8 shadow-xl">
                   <Package className="h-10 w-10 text-slate-200" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4 italic">No Active Match</h3>
                <p className="text-slate-500 font-medium mb-12 italic text-lg leading-relaxed">We might have this component in our physical storage. Contact our technical desk for a manual check across our group partners.</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }} className="rounded-2xl px-10 h-16 font-black uppercase tracking-widest text-[10px] bg-white border-slate-200 hover:bg-slate-50">
                    Reset Catalog
                  </Button>
                  <Button asChild className="rounded-2xl px-10 h-16 font-black uppercase tracking-widest text-[10px] bg-primary text-black hover:bg-slate-900 hover:text-white transition-all">
                    <a href="tel:0114937010">Call Specialist</a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Trade Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "SABS Approved", desc: "All safety-critical components are SABS certified for road use." },
                { icon: Truck, title: "Same-Day Delivery", desc: "Local delivery across Johannesburg for all commercial fleet orders." },
                { icon: Phone, title: "Technical Support", desc: "Speak directly to our technicians about part compatibility & specs." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-primary transition-colors">
                      <item.icon className="h-6 w-6" />
                   </div>
                   <h4 className="text-xl font-black uppercase italic mb-4 leading-none">{item.title}</h4>
                   <p className="text-slate-500 font-medium italic text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
