"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ArrowRight, 
  Settings, 
  Disc, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award,
  ChevronRight,
  Phone,
  Package,
  ShoppingBag,
  Star,
  Quote,
  LayoutGrid,
  Cog,
  Gauge,
  Flame,
  ShieldAlert,
  Play,
  Cpu,
  Layers,
  Box,
  Terminal,
  Sparkles,
  BadgeCheck,
  ShoppingCart,
  Calendar,
  User,
  Repeat
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Elite Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const heroSlides = [
  {
    title: "V12",
    subtitle: "Level Finish",
    desc: "Cape Town's most advanced rim restoration. Mirror finishes and structural repairs.",
    image: "/hero-rim.png",
    tag: "Sir Lowry Road HQ",
    accent: "text-primary"
  },
  {
    title: "Carbon",
    subtitle: "Elite Tyres",
    desc: "Premium new and quality second-hand tyres for all luxury and performance builds.",
    image: "/tyres.png",
    tag: "High Performance",
    accent: "text-primary"
  },
  {
    title: "Forged",
    subtitle: "Mag Wheels",
    desc: "A massive selection of new and used mag wheels to transform your vehicle's stance.",
    image: "/mag-collection.png",
    tag: "Style & Precision",
    accent: "text-primary"
  }
];

const categories = [
  { 
    name: "Rim Repairs", 
    icon: Settings, 
    count: "Expert Restoration",
    image: "/hero-rim.png",
    href: "/services/rim-repairs"
  },
  { 
    name: "Tyre Sales", 
    icon: Disc, 
    count: "New & Second Hand",
    image: "/tyres.png",
    href: "/products?category=tyres"
  },
  { 
    name: "Mag Sales", 
    icon: Activity, 
    count: "New & Used Mags",
    image: "/mag-collection.png",
    href: "/products?category=mags"
  },
  { 
    name: "Body Work", 
    icon: ShieldCheck, 
    count: "Dents & Bumpers",
    image: "/dent-repair.png",
    href: "/services/body-work"
  },
  { 
    name: "Wheel Tuning", 
    icon: Zap, 
    count: "Custom Finishes",
    image: "/hero-rim.png",
    href: "/services/custom-finishes"
  }
];

const features = [
  {
    icon: Truck,
    title: "Nationwide Shipping",
    desc: "We ship restored rims and tyres anywhere in South Africa with secure packaging.",
    href: "/services/finance"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "All rim repairs and tyre fitments are performed to exact industry standards.",
    href: "/services"
  },
  {
    icon: Clock,
    title: "Express Service",
    desc: "Most rim restorations are completed within 24-48 hours by our expert team.",
    href: "/services/workshop"
  },
  {
    icon: Award,
    title: "Wholesale Partners",
    desc: "Dedicated B2B solutions for Cape Town dealerships and fleets.",
    href: "/services/trade-in"
  }
];

const homeBlogPosts = [
  {
    title: "Restoring Your Mags: The Ultimate Guide",
    excerpt: "Learn how we transform dented and scratched alloy wheels back to their original factory finish.",
    date: "March 01, 2026",
    category: "Restoration",
    image: "/hero-rim.png",
    slug: "rim-restoration-guide"
  },
  {
    title: "New vs Second-Hand Tyres",
    excerpt: "Understanding the safety and value trade-offs when choosing between new and high-quality used tyres.",
    date: "Feb 28, 2026",
    category: "Tyres",
    image: "/tyres.png",
    slug: "tyre-comparison"
  },
  {
    title: "Preventing Bumper Damage",
    excerpt: "Tips for maintaining your vehicle's aesthetics and how minor body work preserves your car's resale value.",
    date: "Feb 25, 2026",
    category: "Body Work",
    image: "/dent-repair.png",
    slug: "body-work-tips"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col bg-white text-slate-900 selection:bg-primary selection:text-black overflow-hidden">
      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 1: HERO — PREMIUM ELITE REDESIGN              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-[1600px] mx-auto">

          {/* Main Layout Grid */}
          <div className="grid grid-cols-12 gap-4">

            {/* LEFT SIDEBAR — The Heritage Stack */}
            <div className="hidden xl:flex col-span-2 flex-col gap-4">
               <div className="relative flex-1 bg-slate-900 rounded-[32px] overflow-hidden group">
                  <Image src="/rim-process.png" alt="Process" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-6">
                     <span className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Restoration</span>
                     <h4 className="text-white font-black text-lg leading-tight uppercase">THE<br />CRAFT.</h4>
                  </div>
               </div>
               <div className="relative flex-1 bg-slate-900 rounded-[32px] overflow-hidden group">
                  <Image src="/expert-tools.png" alt="Tools" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-6">
                     <span className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Precision</span>
                     <h4 className="text-white font-black text-lg leading-tight uppercase">THE<br />TOOLS.</h4>
                  </div>
               </div>
            </div>

            {/* CENTER — THE MAIN STAGE SLIDER */}
            <div className="col-span-12 xl:col-span-7 font-display">
              <div className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-black">
                
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30 z-20" />
                  <div className="absolute inset-0 bg-black/60 z-10" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroSlides[currentSlide].image}
                      alt="Hero slide"
                      fill
                      className="object-cover opacity-25"
                      priority
                    />
                    
                    {/* Content Layer */}
                    <div className="relative z-30 h-full flex flex-col justify-center px-8 py-12 lg:p-24">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-3xl"
                      >
                         <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-primary/30 text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                           <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,1)]" />
                           {heroSlides[currentSlide].tag}
                         </div>
                         
                         <h2 className="text-5xl md:text-8xl font-black text-white italic leading-[0.85] mb-6 tracking-[-0.04em] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                           {heroSlides[currentSlide].title}<br />
                           <span className="text-primary not-italic block mt-2 font-display">
                             {heroSlides[currentSlide].subtitle}
                           </span>
                         </h2>

                         <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl font-medium italic leading-relaxed border-l-2 border-primary/50 pl-6">
                           {heroSlides[currentSlide].desc}
                         </p>

                         <div className="flex flex-wrap gap-4">
                           <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-black hover:bg-white hover:scale-105 transition-all font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(239,68,68,0.4)] text-xs">
                             <Link href="/services">Get Started</Link>
                           </Button>
                           <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-2 border-slate-200 text-slate-900 backdrop-blur-sm hover:bg-primary hover:border-primary transition-all font-black uppercase tracking-[0.2em] text-xs">
                             <Link href="/products">The Collection</Link>
                           </Button>
                         </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute bottom-10 right-10 flex gap-3 z-30">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        currentSlide === i ? "w-12 bg-primary shadow-[0_0_10px_rgba(239,68,68,1)]" : "w-3 bg-white/30 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Ticker Bar */}
              <div className="mt-4 px-8 py-5 bg-slate-50 rounded-[28px] flex items-center justify-between border border-slate-100 overflow-hidden relative border-b-2 border-b-primary/20">
                <div className="absolute inset-0 bg-primary/5 -translate-x-full animate-[shimmer_2s_infinite]" />
                <div className="flex items-center gap-10 whitespace-nowrap animate-marquee-slow">
                   {[...Array(2)].map((_, i) => (
                     <div key={i} className="flex items-center gap-10">
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <ShieldCheck className="w-4 h-4 text-primary" /> Lifetime Warranty
                        </span>
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <Truck className="w-4 h-4 text-primary" /> Nationwide Shipping
                        </span>
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <Activity className="w-4 h-4 text-primary" /> Technical Support
                        </span>
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <Award className="w-4 h-4 text-primary" /> Certified Fitters
                        </span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR — The Product Spotlight */}
            <div className="hidden lg:flex col-span-3 flex-col gap-4">
              
              {/* Feature Rim */}
              <div className="flex-1 rounded-[40px] bg-slate-900 border border-primary/10 overflow-hidden relative group cursor-pointer shadow-xl hover:border-primary/40 transition-all">
                 <Image 
                    src="/rim-side.png" 
                    alt="Rim Showcase" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-10 flex flex-col justify-end">
                    <span className="text-primary font-black uppercase text-[10px] tracking-widest mb-2 block">Premium Inventory</span>
                    <h3 className="text-3xl font-black text-white uppercase italic leading-[0.9] mb-4">FORGED<br />MAGS.</h3>
                    <Link href="/products?category=mags" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">
                       Explore Collection <ArrowRight className="w-4 h-4" />
                    </Link>
                 </div>
              </div>

              {/* Feature Tyre */}
              <div className="flex-1 rounded-[40px] bg-slate-50 border border-primary/10 overflow-hidden relative group cursor-pointer shadow-sm hover:border-primary/40 transition-all">
                 <Image 
                    src="/tyre-side.png" 
                    alt="Tyre Showcase" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 mix-blend-multiply" 
                 />
                 <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-2 block">Performance</span>
                    <h3 className="text-3xl font-black text-slate-900 uppercase italic leading-[0.9] mb-4">GRIP<br />EXPERT.</h3>
                    <Link href="/products?category=tyres" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                       View Selection <ArrowRight className="w-4 h-4" />
                    </Link>
                 </div>
              </div>

            </div>

          </div>

          {/* Value Bar — Elite Dark Amber */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-slate-900 rounded-[32px] p-8 flex items-center gap-6 group hover:bg-black transition-colors">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                   <Settings className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                </div>
                <div>
                   <h5 className="text-white font-black uppercase text-sm tracking-widest">Precision Repair</h5>
                   <p className="text-slate-500 text-xs font-medium italic">Leading structural restoration technology.</p>
                </div>
             </div>
             <div className="bg-slate-900 rounded-[32px] p-8 flex items-center gap-6 group hover:bg-black transition-colors">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                   <Phone className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                </div>
                <div>
                   <h5 className="text-white font-black uppercase text-sm tracking-widest">Direct Support</h5>
                   <p className="text-slate-500 text-xs font-medium italic">076 352 6616 - Cape Town Local HQ.</p>
                </div>
             </div>
             <div className="bg-primary rounded-[32px] p-8 flex items-center gap-6 group hover:bg-primary/90 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center shrink-0">
                   <ChevronRight className="w-8 h-8 text-white" />
                </div>
                <div>
                   <h5 className="text-black font-black uppercase text-sm tracking-widest">Book Your Fitment</h5>
                   <p className="text-black/60 text-xs font-medium italic underline underline-offset-4">Join 5000+ happy clients.</p>
                </div>
             </div>
          </div>

        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 2: BRAND TRUST MARQUEE                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="marquee-container">
          <div className="marquee-content gap-16 items-center" style={{ "--duration": "30s" } as React.CSSProperties}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-16 px-8 text-black">
                {["Toyota", "BMW", "Mercedes", "VW", "Ford", "Nissan", "Hyundai", "Kia", "Audi", "Honda"].map((brand) => (
                  <span key={`${setIdx}-${brand}`} className="text-slate-300 text-2xl font-black uppercase tracking-widest whitespace-nowrap hover:text-slate-900 transition-colors cursor-default">
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 3: SHOP BY CATEGORY — Compact 5-Column Grid   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#f8fafc] text-slate-900 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[#ef4444] font-black text-[10px] uppercase tracking-widest mb-1 block">Inventory</span>
              <h2 className="text-2xl font-black text-slate-900 leading-none uppercase italic">Shop By <span className="text-[#ef4444]">Category</span></h2>
            </div>
            <Link href="/products" className="text-[10px] font-black uppercase tracking-widest text-[#ef4444] hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(0, 5).map((category, idx) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative h-[180px] overflow-hidden rounded-md bg-white shadow-sm"
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent group-hover:from-[#ef4444]/60 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="mb-2 p-1.5 w-fit bg-white/10 backdrop-blur-md rounded border border-white/20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  <h3 className="text-sm font-black text-white uppercase italic tracking-tighter leading-tight">
                    {category.name}
                  </h3>
                  
                  <p className="text-[9px] font-bold text-white/60 uppercase group-hover:text-white transition-colors">
                    {category.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 4: WHY CHOOSE US                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 4: WHY CHOOSE US                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-slate-900 rounded-[48px] mx-4 sm:mx-6 overflow-hidden text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/new-parts-2.png" 
            alt="Background" 
            fill 
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] block mb-4">Why Cape Town Trusts Us</span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
            THE WHEELWORX <span className="text-primary italic uppercase">ADVANTAGE.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.title} href={feature.href || "#"}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group border border-white/10 h-full"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                     Explore More <ArrowRight className="h-3 w-3" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 5: FEATURED / BEST SELLERS — Clean & Simple   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-white text-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-widest text-xs block mb-3">Hot Right Now</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase italic">
                Our Specialized <span className="text-primary">Services.</span>
              </h2>
            </div>
            <Link href="/products">
              <Button variant="outline" className="h-12 px-8 rounded-full border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white font-bold transition-all">
                Browse All
              </Button>
            </Link>
          </div>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Full Rim Restoration", brand: "Wheelworx Elite", tag: "Expert Service", image: "/hero-rim.png", rating: 5, reviews: 124 },
              { name: "Performance Tyre Set", brand: "Premium Brands", tag: "New Sales", image: "/tyres.png", rating: 5, reviews: 88 },
              { name: "Custom Mag Painting", brand: "Wheelworx Custom", tag: "Specialty", image: "/mag-collection.png", rating: 5, reviews: 56 },
              { name: "Bumper Scuff Repair", brand: "Bodyworx", tag: "Repair", image: "/dent-repair.png", rating: 5, reviews: 42 },
              { name: "Mag Straightening", brand: "Wheelworx Elite", tag: "Safety", image: "/hero-rim.png", rating: 5, reviews: 93 },
              { name: "Quality Used Tyres", brand: "Value Range", tag: "Used Sales", image: "/tyres.png", rating: 4, reviews: 212 },
              { name: "Alloy Mag Sets", brand: "Custom Imports", tag: "New/Used", image: "/mag-collection.png", rating: 5, reviews: 77 },
              { name: "Dent Removal", brand: "Bodyworx", tag: "Minor Body", image: "/dent-repair.png", rating: 5, reviews: 39 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative aspect-square bg-slate-50 overflow-hidden border-b border-slate-100">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    unoptimized
                    className="object-cover p-2 rounded-2xl group-hover:scale-110 transition-transform duration-500 will-change-transform" 
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Wishlist Button (Hidden until hover on desktop) */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                  
                  {/* Brand & Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{item.brand}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill={i < item.rating ? "#ef4444" : "#e2e8f0"} stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      <span className="text-[10px] text-slate-400 font-medium ml-1">({item.reviews})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-slate-900 leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {item.name}
                  </h4>

                  {/* Info & Action */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-primary uppercase tracking-widest">Inquiry Only</span>
                    </div>
                    <button className="h-9 w-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-black transition-all shadow-sm">
                       <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6: SOCIAL PROOF                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-slate-900 text-white rounded-[48px] mx-4 sm:mx-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" alt="" fill className="object-cover grayscale" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] block mb-6">Testimonials</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-16">
                TRUSTED BY <span className="text-primary italic">EXPERTS.</span>
              </h2>
              <div className="space-y-12">
                <div className="relative pl-10 border-l-4 border-primary">
                  <Quote className="absolute -left-7 top-0 h-14 w-14 text-primary opacity-20" />
                  <p className="text-2xl font-medium italic mb-8 leading-relaxed text-white/80">
                    &quot;Wheelworx completely transformed my scratched mags. They look better than showroom condition now. Excellent service in Cape Town!&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-black text-xl text-black">AN</div>
                    <div>
                      <h5 className="font-black uppercase tracking-tight text-lg">Alan Nash</h5>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Luxury Car Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Delivery Time", val: "24h" },
                { label: "Quality Check", val: "100%" },
                { label: "Support Avail.", val: "18h" },
                { label: "Return Rate", val: "<0.1%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 rounded-3xl text-center hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-5xl font-black text-primary mb-3">{stat.val}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6.5: LATEST FROM THE HUB                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] block mb-6">Expert Insights</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none text-slate-900 mb-8 uppercase">
                LATEST FROM <br />
                <span className="gradient-text italic">THE HUB.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium italic">
                Technical guides, maintenance tips, and the latest automotive industry news.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="rounded-full px-10 h-14 border-2 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
                View All Articles
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {homeBlogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog`}>
                  <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 border border-slate-100 shadow-xl shadow-black/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 font-medium italic line-clamp-2 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] pt-2">
                      Read Blueprint <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6.6: NEW & USED INVENTORY TIERS               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* New Parts Tier */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8">
                 <BadgeCheck className="w-12 h-12 text-primary opacity-10 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Tier 01</span>
              <h3 className="text-4xl font-black text-slate-900 mb-6 italic uppercase">Brand New <br/><span className="text-primary">OEM Spares.</span></h3>
              <p className="text-slate-500 font-medium mb-8 max-w-md">
                Direct from the manufacturer. Full warranty coverage and guaranteed zero-mileage performance for elite maintenance.
              </p>
              <ul className="space-y-4 mb-10">
                {["Factory Sealed Packaging", "Manufacturer Warranty", "Certified Compatibility"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="rounded-full bg-slate-900 text-white hover:bg-primary hover:text-black font-bold h-14 px-8 transition-all">
                Browse New Inventory
              </Button>
            </motion.div>

            {/* Used Parts Tier */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-slate-900 rounded-[40px] shadow-2xl shadow-black/20 border border-white/5 overflow-hidden group text-white"
            >
              <div className="absolute top-0 right-0 p-8">
                 <Repeat className="w-12 h-12 text-blue-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4 block">Tier 02</span>
              <h3 className="text-4xl font-black mb-6 italic uppercase text-white">Verified <br/><span className="text-blue-500">Used Parts.</span></h3>
              <p className="text-slate-400 font-medium mb-8 max-w-md">
                Sourced from low-mileage donor vehicles. Rigorously tested by our Hercules technicians for structural integrity.
              </p>
              <ul className="space-y-4 mb-10">
                {["14-Day Fitment Guarantee", "Expert Condition Grading", "Cost-Effective Solutions"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="rounded-full bg-white text-black hover:bg-blue-500 font-bold h-14 px-8 transition-all">
                Search Used Stock
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6.7: LOCATION & LOGISTICS                    */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
               <div className="relative rounded-[40px] overflow-hidden border-8 border-slate-50 shadow-2xl">
                 <Image 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200" 
                  alt="Warehouse" 
                  width={800} 
                  height={600} 
                  className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                 <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <p className="text-white font-black uppercase tracking-widest text-xs mb-1">Hercules Operations Hub</p>
                    <p className="text-white/80 text-sm font-medium">3172 Imetjhuri Crescent, Pretoria West</p>
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] block mb-4">Strategic Logistics</span>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none text-slate-900 uppercase italic">
                  BUILT FOR <span className="text-primary">SCALE.</span>
                </h2>
              </div>
              
              <p className="text-xl text-slate-500 font-medium italic leading-relaxed">
                Operating from our core warehouse in Pretoria West, we manage a massive distribution network that feeds workshops nationwide.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                 {[
                   { label: "Dispatch Frequency", val: "Every 4H" },
                   { label: "Storage Capacity", val: "50k+ Units" },
                   { label: "Verified Dealers", val: "450+" },
                   { label: "Technical Staff", val: "24/7" },
                 ].map((stat, i) => (
                   <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                     <p className="text-3xl font-black text-slate-900">{stat.val}</p>
                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 7: IMMERSIVE PREMIUM CTA                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-slate-950 overflow-hidden mt-12 mx-4 sm:mx-6 rounded-[3rem] mb-12">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-[100px]" />
          <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay border-red-500"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-xl">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Experience Authentic Performance</span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6 drop-shadow-2xl">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-500 italic">Machine.</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Unlock the true potential of your vehicle with our premium selection of verified auto parts. Engineered for those who demand excellence on every road.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
              <Link href="/dealership" className="group">
                <div className="relative p-[2px] rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 overflow-hidden w-full sm:w-auto mt-0">
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-out transform -skew-x-12 -ml-10 w-20"></div>
                  <Button className="h-16 px-10 rounded-full bg-slate-950 text-white group-hover:bg-transparent group-hover:text-white font-bold text-lg w-full transition-colors duration-300">
                    <Zap className="mr-2 w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                    Explore Catalog
                  </Button>
                </div>
              </Link>
              
              <Link href="/contact" className="group">
                <Button variant="outline" className="h-[68px] px-10 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-md text-white font-bold text-lg w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Speak to an Expert
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-8 border-t border-white/10 w-full max-w-4xl">
              {[
                { label: "Guaranteed Compatibility", icon: <BadgeCheck className="w-5 h-5 text-emerald-400" /> },
                { label: "Lightning Delivery", icon: <Zap className="w-5 h-5 text-amber-400" /> },
                { label: "Premium Support", icon: <ShieldAlert className="w-5 h-5 text-blue-400" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  {item.icon}
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
