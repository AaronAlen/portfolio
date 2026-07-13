import cvFile from "../images/Aaron MERN.pdf";

function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto  px-[16px] py-[48px] sm:px-[24px] sm:py-[64px] lg:px-[48px]">
        <div className="grid gap-[32px] rounded-[24px] border border-white/10 bg-zinc-900/80 p-[24px] shadow-2xl shadow-black/20 lg:grid-cols-[0.9fr_1.1fr] sm:p-[32px]">
          <div>
            <h2 className="text-[30px] font-semibold text-white sm:text-[36px]">Contact Me</h2>
            <div className="mt-[24px] flex flex-wrap gap-[16px] text-[24px] text-zinc-300">
              <a href="mailto:aaronbca123@gmail.com" className="transition hover:text-rose-500">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="tel:+916382315385" className="transition hover:text-rose-500">
                <i className="fa-solid fa-square-phone-flip"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100053839804537&mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="transition hover:text-rose-500">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/aaron_bca_123?igsh=MXJkNW5uanEwanRtbw==" target="_blank" rel="noreferrer" className="transition hover:text-rose-500">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/aaron-a-890652278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="transition hover:text-rose-500">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/+916382315385" target="_blank" rel="noreferrer" className="transition hover:text-rose-500">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <a href={cvFile} download className="mt-[32px] inline-flex rounded-full bg-rose-500 px-[24px] py-[12px] text-[14px] font-semibold text-white transition hover:bg-rose-600">
              Download CV
            </a>
          </div>

          <form className="space-y-[16px]">
            <input type="text" placeholder="Your Name" className="w-full rounded-[12px] border border-white/10 bg-zinc-800 px-[16px] py-[12px] text-white outline-none ring-0 placeholder:text-zinc-400" required />
            <input type="email" placeholder="Your Email" className="w-full rounded-[12px] border border-white/10 bg-zinc-800 px-[16px] py-[12px] text-white outline-none ring-0 placeholder:text-zinc-400" required />
            <textarea rows="5" placeholder="Your Message" className="w-full rounded-[12px] border border-white/10 bg-zinc-800 px-[16px] py-[12px] text-white outline-none ring-0 placeholder:text-zinc-400" />
            <button type="submit" className="rounded-full bg-cyan-500 px-[24px] py-[12px] text-[14px] font-semibold text-white transition hover:bg-cyan-600">
              Submit
            </button>
          </form>
        </div>
      </section>
      <p className="border-t border-white/10 bg-zinc-900/90 px-[24px] py-[24px] text-center text-[14px] text-zinc-400">
        Copyright © Aaron. Made with <i className="fa-solid fa-heart text-rose-500"></i> and React + Tailwind.
      </p>
    </>
  );
}

export default Contact;
