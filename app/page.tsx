"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Settings, 
  Disc, 
  Zap, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award,
  ChevronRight,
  Phone,
  Package,
  Activity,
  Star,
  Quote,
  LayoutGrid,
  Cog,
  Gauge,
  Flame,
  Sparkles,
  BadgeCheck,
  ShoppingCart,
  Calendar,
  User,
  Repeat,
  CarFront,
  Wrench,
  Banknote,
  Search
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Elite Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const heroSlides = [
  {
    title: "BAKKIE",
    subtitle: "FOR STRIPPING",
    desc: "Huge range of Ford Rangers, Hiluxes and more currently stripping for spares. Getting you back on the road. Fast!",
    image: "/car-body.png",
    tag: "Wide Selection",
    accent: "text-primary"
  },
  {
    title: "TAXI",
    subtitle: "SPARES SPECIALIST",
    desc: "The largest inventory of Quantum and taxi spares in the region. SABS approved products at affordable prices.",
    image: "/new-parts.png",
    tag: "Commercial Auto Parts",
    accent: "text-primary"
  },
  {
    title: "ENGINES",
    subtitle: "FOR AFRICA",
    desc: "Quality imported engines with guaranteed performance. Trusted by thousands of mechanics nationwide.",
    image: "/engine.png",
    tag: "Sister Company",
    accent: "text-primary"
  }
];

const categories = [
  { 
    name: "Taxi Spares", 
    icon: CarFront, 
    count: "Quantum / Siyaya",
    image: "/new-parts.png",
    href: "/taxi-spares"
  },
  { 
    name: "Bakkie Spares", 
    icon: Truck, 
    count: "Ranger / Hilux / Isuzu",
    image: "/car-body.png",
    href: "/bakkie-spares"
  },
  { 
    name: "Car Spares", 
    icon: Wrench, 
    count: "Most Makes & Models",
    image: "/new-parts3.png",
    href: "/car-spares"
  },
  { 
    name: "Radiator Centre", 
    icon: ShieldCheck, 
    count: "Cooling & Lock Sets",
    image: "/new-parts4.png",
    href: "/radiator-centre"
  },
  { 
    name: "Imported Engines", 
    icon: Repeat, 
    count: "Engines for Africa",
    image: "/engine.png",
    href: "/engines"
  }
];

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Our own fleet ensures your parts get to you within the shortest possible time.",
    href: "/shipping"
  },
  {
    icon: ShieldCheck,
    title: "SABS Approved",
    desc: "We only sell high-quality, approved products that meet safety standards.",
    href: "/quality"
  },
  {
    icon: Clock,
    title: "Expert Assistance",
    desc: "Trained telesales agents ready to assist with technical queries and product info.",
    href: "/support"
  },
  {
    icon: Award,
    title: "Affordable Prices",
    desc: "Direct to public sales ensure you get the best value for your vehicle repairs.",
    href: "/pricing"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col bg-white text-slate-900 selection:bg-primary selection:text-black overflow-hidden">
      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 1: HERO — COMMERCIAL AUTO PARTS REDESIGN      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="bg-white pt-8 pb-12 px-4 font-display">
        <div className="max-w-[1600px] mx-auto">

          <div className="grid grid-cols-12 gap-4">

            {/* LEFT SIDEBAR — Group Showcase */}
            <div className="hidden xl:flex col-span-2 flex-col gap-4">
               <div className="relative flex-1 bg-slate-900 rounded-[32px] overflow-hidden group">
                  <Image src="/taxi-commercial.png" alt="Taxi" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
                     <span className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Commercial</span>
                     <h4 className="text-white font-black text-lg leading-tight uppercase">TAXI<br />SPARES.</h4>
                  </div>
               </div>
               <div className="relative flex-1 bg-slate-900 rounded-[32px] overflow-hidden group">
                  <Image src="/bakkie-stripping-commercial.png" alt="Bakkie" fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
                     <span className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Commercial</span>
                     <h4 className="text-white font-black text-lg leading-tight uppercase">BAKKIE<br />CENTRE.</h4>
                  </div>
               </div>
            </div>

            {/* CENTER — MAIN STAGE */}
            <div className="col-span-12 xl:col-span-7">
              <div className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-black">
                
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30 z-20" />
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
                      className="object-cover opacity-40 hover:scale-110 transition-transform duration-10000"
                      priority
                    />
                    
                    <div className="relative z-30 h-full flex flex-col justify-center px-8 py-12 lg:p-24 text-left">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-3xl"
                      >
                         <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-primary/30 text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8">
                           <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                           {heroSlides[currentSlide].tag}
                         </div>
                         
                         <h2 className="text-5xl md:text-8xl font-black text-white italic leading-[0.85] mb-6 tracking-[-0.04em]">
                           {heroSlides[currentSlide].title}<br />
                           <span className="text-primary not-italic block mt-2">
                             {heroSlides[currentSlide].subtitle}
                           </span>
                         </h2>

                         <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl font-medium italic leading-relaxed border-l-2 border-primary/50 pl-6">
                           {heroSlides[currentSlide].desc}
                         </p>

                         <div className="flex flex-wrap gap-4 font-display">
                           <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-black hover:bg-white hover:scale-105 transition-all font-black uppercase tracking-[0.2em] text-xs">
                             <Link href="/contact">Call Now</Link>
                           </Button>
                           <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-2 border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-black transition-all font-black uppercase tracking-[0.2em] text-xs">
                             <Link href="/bakkie-spares">View Stripping</Link>
                           </Button>
                         </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

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
                <div className="flex items-center gap-10 whitespace-nowrap animate-marquee-slow">
                   {[...Array(2)].map((_, i) => (
                     <div key={i} className="flex items-center gap-10">
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <ShieldCheck className="w-4 h-4 text-primary" /> SABS APPROVED
                        </span>
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <Truck className="w-4 h-4 text-primary" /> RAPID DELIVERY
                        </span>
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <Settings className="w-4 h-4 text-primary" /> 100+ DONOR BAKKIES
                        </span>
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                           <Wrench className="w-4 h-4 text-primary" /> TECHNICAL HUB
                        </span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR — Sister Companies */}
            <div className="hidden lg:flex col-span-3 flex-col gap-4">
              <div className="flex-1 rounded-[40px] bg-slate-900 border border-primary/10 overflow-hidden relative group cursor-pointer shadow-xl hover:border-primary/40 transition-all text-left">
                  <Image src="/engine.png" alt="Engines" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-10 flex flex-col justify-end">
                    <span className="text-primary font-black uppercase text-[10px] tracking-widest mb-2 block">Sister Company</span>
                    <h3 className="text-3xl font-black text-white uppercase italic leading-[0.9] mb-4">ENGINES<br />FOR AFRICA.</h3>
                    <Link href="/engines" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">
                       Browse Engines <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
              </div>
              <div className="flex-1 rounded-[40px] bg-slate-50 border border-primary/10 overflow-hidden relative group cursor-pointer shadow-sm hover:border-primary/40 transition-all text-left">
                  <Image src="/shipping-logistics.png" alt="TPC" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 mix-blend-multiply" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-2 block">Sister Company</span>
                    <h3 className="text-3xl font-black text-slate-900 uppercase italic leading-[0.9] mb-4">TPC<br />LOGISTICS.</h3>
                    <Link href="/tpc" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                       Our Network <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
              </div>
            </div>

          </div>

          {/* Group Intro Text */}
          <div className="mt-12 text-center max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Commercial Auto Parts Group of Companies
              </h1>
              <p className="text-2xl font-black text-primary italic uppercase tracking-tight">
                Getting you back on the road. Fast!
              </p>
              <p className="text-xl text-slate-500 font-medium italic leading-relaxed">
                Your one-stop spares shop. We sell over the counter, direct to the public, providing assistance with Most Makes and Models of vehicles at affordable prices.
              </p>
            </motion.div>
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
                {["Ford Ranger", "Toyota Hilux", "Isuzu D-Max", "Toyota Quantum", "VW Polo", "Nissan NP200", "Hyundai H100", "Mercedes Sprinter"].map((brand) => (
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
      {/*  SECTION 3: THE GROUP SHOWCASE                        */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#f8fafc] text-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-1 block">Our Portfolio</span>
            <h2 className="text-4xl font-black text-slate-900 leading-none uppercase italic">The commercial <span className="text-primary">Group.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Commercial Auto Parts", 
                tag: "Taxi Spares", 
                desc: "Specializing in spares for all taxi models.", 
                image: "/taxi-commercial.png",
                href: "/taxi-spares"
              },
              { 
                name: "Commercial Car Spares", 
                tag: "Car Parts", 
                desc: "Universal parts for most major vehicle makes.", 
                image: "/car-parts-commercial.png",
                href: "/car-spares"
              },
              { 
                name: "Commercial Bakkie Centre", 
                tag: "Bakkie Spares", 
                desc: "New and used parts for workhorse vehicles.", 
                image: "/bakkie-stripping-commercial.png",
                href: "/bakkie-spares"
              },
              { 
                name: "Commercial Radiator Centre", 
                tag: "Cooling & Locks", 
                desc: "Radiators, Lock sets, Mags, Tyres & More!", 
                image: "/radiator-commercial.png",
                href: "/radiator-centre"
              },
            ].map((company, idx) => (
              <div
                key={company.name}
                className="group relative p-2 bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col overflow-hidden"
              >
                <div className="relative h-48 w-full rounded-[32px] overflow-hidden mb-6">
                  <Image 
                    src={company.image} 
                    alt={company.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{company.tag}</span>
                  </div>
                </div>
                
                <div className="px-8 pb-10 text-center flex flex-col items-center">
                  <h3 className="text-xl font-black text-slate-900 uppercase italic mb-3 tracking-tighter leading-tight">
                    {company.name}
                  </h3>
                  <p className="text-slate-500 font-medium italic text-sm leading-relaxed mb-6">
                    {company.desc}
                  </p>
                  <Button asChild variant="outline" className="h-10 px-6 rounded-full border-slate-200 text-slate-900 group-hover:bg-primary group-hover:border-primary group-hover:text-black font-black uppercase tracking-widest text-[9px] transition-all">
                    <Link href={company.href}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 3.5: DONOR VEHICLES FOR STRIPPING          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-primary font-black uppercase tracking-widest text-xs block mb-3">Donor Stock</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase italic">
                WIDE RANGE OF <span className="text-primary">BAKKIES FOR STRIPPING.</span>
              </h2>
            </div>
            <Link href="/bakkie-spares">
              <Button variant="outline" className="h-12 px-8 rounded-full border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white font-bold transition-all">
                View All Donors
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ford Ranger 2011-", tag: "Stripping For Spares", image: "/car-body.png" },
              { name: "Toyota Hilux 2015-", tag: "Stripping For Spares", image: "/new-parts.png" },
              { name: "Isuzu D-Max 2018-", tag: "Stripping For Spares", image: "/new-parts3.png" },
            ].map((item, idx) => (
              <div key={idx} className="group overflow-hidden rounded-[32px] border border-slate-100 bg-slate-50 text-left">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                       {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-900 uppercase italic mb-2">{item.name}</h3>
                  <p className="text-slate-500 font-medium text-sm italic mb-6">Complete engine, gearbox, and body panels available now.</p>
                  <Button variant="link" className="p-0 h-auto text-primary font-black uppercase tracking-widest text-[10px] hover:text-slate-900">
                     Check Availability <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 4: DOWNLOAD BROCHURE                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-slate-900 rounded-[48px] mx-4 sm:mx-6 overflow-hidden text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/new-parts.png" alt="Background" fill className="object-cover grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
               DOWNLOAD OUR <span className="text-primary italic uppercase">BROCHURE.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium italic mb-12 max-w-2xl mx-auto">
               Get the latest list of donor vehicles for stripping and our current stock of imported engines and gearboxes.
            </p>
            <Button size="lg" className="h-20 px-16 rounded-[32px] bg-primary text-black font-black uppercase tracking-widest text-lg hover:bg-white transition-all shadow-2xl shadow-primary/20">
               Download Now
            </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 5: WHY CHOOSE US                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="group text-left">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <feature.icon className="h-6 w-6 text-slate-900 group-hover:text-black" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-medium italic leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 5.5: THE SPARES MARKETPLACE                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-primary font-black uppercase tracking-widest text-xs block mb-3">Our Inventory</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase italic text-slate-900">
                ESSENTIAL <span className="text-primary">CAR SPARES.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Brakes & Clutch", 
                desc: "Pads, discs, master cylinders & kits", 
                image: "/new-parts3.png" 
              },
              { 
                name: "Styling & Lights", 
                desc: "Headlights, tail lights, grills & trim", 
                image: "/new-parts4.png" 
              },
              { 
                name: "Suspension", 
                desc: "Shocks, control arms, ball joints", 
                image: "/diagnostic-services.png" 
              },
              { 
                name: "Engine & Cooling", 
                desc: "Radiators, pumps, belts & filters", 
                image: "/workshop-services.png" 
              }
            ].map((part, idx) => (
              <div key={idx} className="group relative h-[400px] rounded-[32px] overflow-hidden bg-white shadow-sm border border-slate-100 hover:border-primary/30 transition-all text-left">
                <Image 
                  src={part.image} 
                  alt={part.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-black text-white uppercase italic mb-2 leading-none">
                    {part.name}
                  </h3>
                  <p className="text-white/60 text-sm font-medium italic mb-6">
                    {part.desc}
                  </p>
                  <Link href="/inventory">
                    <Button variant="outline" className="w-fit h-10 px-6 rounded-full border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black font-black uppercase tracking-widest text-[9px] transition-all">
                      Browse Full Catalog
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Ticker */}
      <section className="p-4 bg-slate-900 text-white rounded-t-[48px] mx-4 sm:mx-6 mt-12 pb-24">
         <div className="container mx-auto px-8 pt-20">
            <div className="grid lg:grid-cols-2 gap-20">
               <div>
                  <h3 className="text-5xl font-black tracking-tighter mb-8 italic uppercase">Ready to get <br/><span className="text-primary">back on the road?</span></h3>
                  <div className="flex flex-col gap-6">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                           <Phone className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Us</p>
                           <p className="text-xl font-black">011 493 7010</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#25D366]">
                           <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">WhatsApp</p>
                           <p className="text-xl font-black">079 179 9149</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-12 border border-white/10">
                  <h4 className="text-2xl font-black uppercase italic mb-6">Our Sister Companies</h4>
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-primary font-black uppercase text-xs mb-2 italic">TPC Logistics</p>
                        <p className="text-slate-400 text-sm italic">Efficient nationwide delivery network.</p>
                     </div>
                     <div>
                        <p className="text-primary font-black uppercase text-xs mb-2 italic">Engines for Africa</p>
                        <p className="text-slate-400 text-sm italic">Premium imported engine specialists.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

// Missing icons for the rewrite
const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);
