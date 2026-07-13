function Services() {
  return (
    <section id="services" className="mx-auto px-[16px] py-[48px] sm:px-[24px] sm:py-[64px] lg:px-[48px]">
      <h2 className="text-[24px] font-semibold text-white sm:text-[30px]">My services</h2>
      <div className="mt-[32px] grid gap-[24px] lg:grid-cols-2">
        <div className="rounded-[16px] border border-white/10 bg-gradient-to-br from-rose-600/20 to-zinc-900 p-[24px] shadow-2xl shadow-black/20 sm:p-[28px]">
          <i className="fa-solid fa-code mb-[16px] text-[36px] text-rose-500"></i>
          <h3 className="text-[24px] font-semibold">Full-stack development</h3>
          <p className="mt-[16px] text-[14px] leading-[32px] text-zinc-300">I build responsive and high-performance web applications using the MERN stack with secure APIs, modern UI, and deployment-ready architecture.</p>
        </div>
        <div className="rounded-[16px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-zinc-900 p-[28px] shadow-2xl shadow-black/20">
          <i className="fa-solid fa-crop mb-[16px] text-[36px] text-cyan-400"></i>
          <h3 className="text-[24px] font-semibold">UI/UX design</h3>
          <p className="mt-[16px] text-[14px] leading-[32px] text-zinc-300">I shape smooth experiences with clear layouts, strong visual hierarchy, and accessible interaction patterns across devices.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
