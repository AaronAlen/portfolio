import { useState } from "react";
import heroImage from "../images/image (2).png";
import logoImage from "../images/logo.png";

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="header" className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,0,79,0.25),_transparent_35%),linear-gradient(135deg,_#0f172a,_#020617)]">
      <div className="mx-auto flex max-w-[1280px] flex-col px-[24px] py-[24px] sm:px-[32px] lg:px-[48px]">
        <nav className="flex items-center justify-between">
          <img src={logoImage} alt="Aaron logo" className="h-[56px] w-[144px] rounded-[16px] bg-white/10 p-[8px] object-contain ring-1 ring-white/10" />

          <ul className="hidden items-center gap-[32px] text-[14px] font-medium md:flex">
            <li>
              <a href="#header" className="transition hover:text-rose-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-rose-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-rose-500">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="transition hover:text-rose-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-rose-500">
                Contact
              </a>
            </li>
          </ul>

          <button className="rounded-[8px] border border-white/20 p-[8px] text-[20px] md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="mt-[16px] rounded-[8px] border border-white/10 bg-zinc-900/95 p-[16px] md:hidden">
            <ul className="flex flex-col gap-[12px] text-[14px]">
              <li>
                <a href="#header" className="block py-[4px] transition hover:text-rose-500" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-[4px] transition hover:text-rose-500" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="block py-[4px] transition hover:text-rose-500" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="block py-[4px] transition hover:text-rose-500" onClick={() => setMobileMenuOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-[4px] transition hover:text-rose-500" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="flex flex-col-reverse items-center gap-[40px] py-[64px] sm:py-[80px] lg:flex-row lg:justify-between lg:py-[48px] md:flex-col">
          <div className="w-full max-w-[672px] text-center lg:text-left space-y-[80px] md:space-y-[8px]">
            <p className="mb-[16px] text-[14px] uppercase tracking-[0.45em] text-rose-400 sm:text-[16px]">FULL STACK DEVELOPER</p>
            <h1 className="text-[30px] font-bold leading-[70px] sm:text-[36px] lg:text-[60px]">
              Hi, I'm <span className="text-rose-500">Aaron</span>
              <br />
              from India.
              <br />
              I'm a <span className="text-cyan-400">MERN stack developer.</span>
            </h1>
            <p className="mt-[24px] text-[16px] leading-[32px] text-zinc-300 sm:text-[18px]">I build responsive, scalable web apps with thoughtful UI and reliable backend systems.</p>
          </div>
          <div className="flex justify-center">
            <img src={heroImage} alt="Aaron portrait" className="h-[224px] w-[224px] rounded-full border-[4px] border-rose-500/40 object-cover shadow-[0_0_60px_rgba(255,0,79,0.35)] sm:h-[288px] sm:w-[288px] lg:h-[320px] lg:w-[320px]" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
