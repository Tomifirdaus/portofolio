"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import profilePic from "../public/tomi.png";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="container mx-auto px-4 md:px-12 py-6 text-slate-100 max-w-5xl">
      
      {/* ================= NAV BAR MOBILE & DESKTOP ================= */}
      <nav className="flex justify-between items-center mb-10 md:mb-16 py-4 border-b border-slate-700/50 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80 rounded-b-xl px-4">
        <h1 className="text-xl font-bold tracking-wider text-slate-100">
          Tomi <span className="text-amber-400">Firdaus</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-amber-300 transition">Home</a>
          <a href="#about" className="hover:text-amber-300 transition">About</a>
          <a href="#services" className="hover:text-amber-300 transition">Services</a>
          <a href="#contact" className="hover:text-amber-300 transition">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-5 flex flex-col space-y-4 md:hidden rounded-b-2xl shadow-2xl">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-slate-200 hover:text-amber-300 transition text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-slate-200 hover:text-amber-300 transition text-sm font-medium"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-slate-200 hover:text-amber-300 transition text-sm font-medium"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-slate-200 hover:text-amber-300 transition text-sm font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ================= 1. HERO SECTION ================= */}
      <section id="home" className="flex flex-col-reverse md:flex-row items-center min-h-[70vh] gap-8 md:gap-12 mb-16 md:mb-24">
        <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-300 text-xs font-semibold tracking-wide">
            Available for Projects
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-slate-300">Hi, I’m Tomi</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
            A Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Developer</span>
          </h3>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            I craft clean, high-performance digital experiences. Turning complex ideas into responsive, accessible, and user-friendly web applications with modern frontend architectures.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link 
              href="/portofolio" 
              className="w-full sm:w-auto text-center bg-amber-400 text-slate-950 py-3.5 px-8 rounded-full font-bold shadow-lg shadow-amber-400/20 transition-all duration-300 hover:bg-amber-300 hover:shadow-amber-400/40 active:scale-95"
            >
              Know Me More
            </Link>
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center border border-slate-600 text-slate-200 py-3.5 px-8 rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 hover:border-slate-400 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Foto Profil Hero */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-amber-400/30 via-slate-400/20 to-amber-200/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative p-1.5 bg-slate-800/80 rounded-full border border-slate-700 shadow-2xl">
              <Image
                src={profilePic}
                alt="Tomi Profile Picture"
                width={280}
                height={280}
                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover object-top border border-slate-600/50 bg-slate-900"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. ABOUT STORY SECTION ================= */}
      <section id="about" className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 md:mb-28 bg-slate-900/60 p-6 md:p-12 rounded-3xl border border-slate-800/80 backdrop-blur-md shadow-xl">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-48 sm:w-60 h-60 sm:h-72 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 group">
            <Image
              alt="Tomi Story Showcase"
              src={profilePic}
              width={256}
              height={320}
              className="h-full w-full object-cover object-top filter brightness-95 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-4 text-left">
          <h4 className="text-amber-400 text-xs font-bold uppercase tracking-widest">A Bit of My Story</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-white">How it all began</h3>
          <p className="font-medium text-slate-200 text-sm md:text-base italic border-l-2 border-amber-400 pl-4 py-1">
            "I grew up with a strong sense of curiosity, analytical thinking skills, and an interest in solving various problems. A home environment closely connected to the evolution of digital technology further encouraged me to keep learning and growing."
          </p>
          <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
            My fascination with technology started at an early age, experimenting with computers and simple code. After pursuing a degree in software engineering, I began my journey as a frontend developer, where I found my passion for creating beautiful and functional user interfaces.
          </p>
          <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
            Over the years, I’ve worked with teams across the globe, honing my skills in modern development practices like JavaScript, CSS, and component frameworks, continuously adapting to the ever-evolving web technologies.
          </p>
        </div>
      </section>

      {/* ================= 3. SERVICES SECTION ================= */}
      <section id="services" className="mb-20 md:mb-28 text-center">
        <h4 className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">What I Do Best</h4>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12">Our Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900/80 transition duration-300 group">
            <div className="text-amber-400 text-3xl mb-4 group-hover:scale-110 transition duration-300">💻</div>
            <h5 className="text-lg font-bold text-white mb-2">Web & Mobile Apps</h5>
            <p className="text-sm text-slate-400 leading-relaxed">Crafting responsive interfaces using modern frameworks that work flawlessly on mobile and desktop viewports.</p>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900/80 transition duration-300 group">
            <div className="text-amber-400 text-3xl mb-4 group-hover:scale-110 transition duration-300">🛠️</div>
            <h5 className="text-lg font-bold text-white mb-2">UI/UX Implementation</h5>
            <p className="text-sm text-slate-400 leading-relaxed">Converting complex, pixel-perfect design files (Figma/Adobe XD) into clean, maintainable, and semantically correct frontend code.</p>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900/80 transition duration-300 group">
            <div className="text-amber-400 text-3xl mb-4 group-hover:scale-110 transition duration-300">📈</div>
            <h5 className="text-lg font-bold text-white mb-2">SEO Optimization</h5>
            <p className="text-sm text-slate-400 leading-relaxed">Structuring lightweight server-rendered components to guarantee lightning-fast load speeds and top SEO rankings.</p>
          </div>
        </div>
      </section>

      {/* ================= 4. CONTACT INFO SECTION ================= */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-b border-slate-800 mb-16 md:mb-20 text-center md:text-left">
        <div>
          <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Contact Now</h5>
          <p className="text-sm text-slate-200 break-all font-medium">tomi_firdaus_33rpl@student.smktelkom-mlg.sch.id</p>
          <p className="text-sm text-slate-400 mt-1">+62 851-9818-5451</p>
        </div>
        <div>
          <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Address</h5>
          <p className="text-sm text-slate-200 font-medium">Malang, East Java</p>
          <p className="text-sm text-slate-400">Indonesia</p>
        </div>
        <div className="flex flex-col items-center md:items-start justify-center">
          <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Social Media</h5>
          <div className="flex space-x-5 text-sm text-slate-300 font-medium">
            <a href="#" className="hover:text-amber-300 transition">Instagram</a>
            <a href="#" className="hover:text-amber-300 transition">GitHub</a>
            <a href="#" className="hover:text-amber-300 transition">TikTok</a>
          </div>
        </div>
      </section>

      {/* ================= 5. NEWSLETTER / FOOTER ================= */}
      <footer className="bg-slate-900/60 rounded-3xl p-6 md:p-10 text-center max-w-2xl mx-auto border border-slate-800 space-y-4">
        <h4 className="text-xl md:text-2xl font-bold text-white">Let's Stay Connected</h4>
        <p className="text-xs text-slate-400 max-w-sm mx-auto">Subscribe to my personal newsletter to receive updates on front-end tricks and design explorations.</p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition placeholder:text-slate-500"
          />
          <button className="w-full sm:w-auto bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition hover:bg-amber-300 active:scale-95 whitespace-nowrap">
            Subscribe
          </button>
        </div>

        <p className="text-xs text-slate-500 pt-6">© 2026 Tomi. Powered by Next.js & Tailwind CSS.</p>
      </footer>

    </main>
  );
}