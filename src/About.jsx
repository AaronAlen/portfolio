import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className=" max-w-[1280px] px-[16px] py-[64px] sm:px-[24px] sm:py-[80px] lg:px-[48px]">
      <div className="grid gap-[40px] lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-[16px] border border-white/10 bg-zinc-900/70 p-[24px]  sm:p-[32px]">
          <h2 className="text-[24px] font-semibold text-white sm:text-[30px]">About Me</h2>
          <p className="mt-[20px] text-[16px] leading-[32px] text-zinc-300">Motivated and dedicated MERN Stack Developer with a strong foundation in full-stack web development. Skilled in MongoDB, Express.js, React.js, Node.js, and JavaScript, I enjoy building responsive, scalable applications with clean user interfaces and optimized backend systems.</p>
          <div className="mt-[32px] flex  gap-[12px]">
            <button className={activeTab === "skills" ? "rounded-full border border-rose-500 bg-rose-500 px-[16px] py-[8px] text-[14px] text-white" : "rounded-full border border-white/15 px-[16px] py-[8px] text-[14px] text-zinc-300 transition hover:border-rose-500 hover:text-white"} onClick={() => setActiveTab("skills")}>
              Skills
            </button>
            <button className={activeTab === "experience" ? "rounded-full border border-rose-500 bg-rose-500 px-[16px] py-[8px] text-[14px] text-white" : "rounded-full border border-white/15 px-[16px] py-[8px] text-[14px] text-zinc-300 transition hover:border-rose-500 hover:text-white"} onClick={() => setActiveTab("experience")}>
              Experience
            </button>
            <button className={activeTab === "education" ? "rounded-full border border-rose-500 bg-rose-500 px-[16px] py-[8px] text-[14px] text-white" : "rounded-full border border-white/15 px-[16px] py-[8px] text-[14px] text-zinc-300 transition hover:border-rose-500 hover:text-white"} onClick={() => setActiveTab("education")}>
              Education
            </button>
          </div>
          <div className="mt-[32px] space-y-[16px] text-zinc-300">
            {activeTab === "skills" && (
              <ul className="space-y-[12px]">
                <li>
                  <span className="font-semibold text-rose-400">UI/UX</span> — Designing polished web and app interfaces.
                </li>
                <li>
                  <span className="font-semibold text-rose-400">Web Development</span> — Building modern web applications.
                </li>
                <li>
                  <span className="font-semibold text-rose-400">App Development</span> — Creating mobile-friendly experiences.
                </li>
              </ul>
            )}
            {activeTab === "experience" && (
              <ul className="space-y-[12px]">
                <li>
                  <span className="font-semibold text-rose-400">2024 - Present</span> — Web development training at EMC with portfolio project work.
                </li>
              </ul>
            )}
            {activeTab === "education" && (
              <ul className="space-y-[12px]">
                <li>
                  <span className="font-semibold text-rose-400">2025</span> — BCA at Raja College of Arts and Science.
                </li>
                <li>
                  <span className="font-semibold text-rose-400">2020</span> — 12th grade at St. Lasalle Higher Secondary School.
                </li>
                <li>
                  <span className="font-semibold text-rose-400">2018</span> — 10th grade at Punitha Yagappar Higher Secondary School.
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="rounded-[16px] border border-white/10 bg-zinc-900/70 p-[24px] shadow-2xl shadow-black/30">
          <h3 className="text-[24px] font-semibold text-white">What I offer</h3>
          <div className="mt-[24px] grid gap-[20px] md:grid-cols-2">
            <div className="rounded-[12px] border border-white/10 bg-zinc-800/80 p-[20px]">
              <i className="fa-solid fa-code mb-[16px] text-[30px] text-rose-500"></i>
              <h4 className="text-[20px] font-semibold">Web Development</h4>
              <p className="mt-[8px] text-[14px] leading-[28px] text-zinc-300">End-to-end full-stack development for modern, scalable products.</p>
            </div>
            <div className="rounded-[12px] border border-white/10 bg-zinc-800/80 p-[20px]">
              <i className="fa-solid fa-crop mb-[16px] text-[30px] text-cyan-400"></i>
              <h4 className="text-[20px] font-semibold">UI/UX Design</h4>
              <p className="mt-[8px] text-[14px] leading-[28px] text-zinc-300">User-focused interfaces that feel polished and intuitive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
