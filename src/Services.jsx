function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1280px] px-[16px] py-[48px] sm:px-[24px] sm:py-[64px] lg:px-[48px]">
      <div data-aos="fade-down" data-aos-duration="600">
        <p className="text-[14px] uppercase tracking-[0.3em] text-cyan-400 font-medium">Expertise</p>
        <h2 className="text-[28px] font-semibold text-white sm:text-[34px] mt-[4px]">My Services</h2>
      </div>
      <div className="mt-[32px] grid gap-[24px] lg:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-duration="750"
          className="rounded-[16px] border border-white/10 bg-gradient-to-br from-rose-600/20 to-zinc-900 p-[24px] shadow-2xl shadow-black/20 sm:p-[28px] transition duration-300 hover:border-rose-500/40"
        >
          <i className="fa-solid fa-code mb-[16px] text-[36px] text-rose-500"></i>
          <h3 className="text-[24px] font-semibold text-white">Full-stack development</h3>
          <p className="mt-[16px] text-[14px] leading-[32px] text-zinc-300">
            I build responsive and high-performance web applications using the MERN stack with secure APIs, modern UI, and deployment-ready architecture.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="750"
          className="rounded-[16px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-zinc-900 p-[24px] shadow-2xl shadow-black/20 sm:p-[28px] transition duration-300 hover:border-cyan-400/40"
        >
          <i className="fa-solid fa-crop mb-[16px] text-[36px] text-cyan-400"></i>
          <h3 className="text-[24px] font-semibold text-white">UI/UX design</h3>
          <p className="mt-[16px] text-[14px] leading-[32px] text-zinc-300">
            I shape smooth experiences with clear layouts, strong visual hierarchy, and accessible interaction patterns across devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
