import ecommerceImage from "../images/endless-cart-e-commerce-growth_922081-158924.jpg";
import stopwatchImage from "../images/Screenshot_20260515-225339.png";

function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-[1280px] px-[16px] py-[64px] sm:px-[24px] sm:py-[80px] lg:px-[48px]">
      <h2 className="text-[24px] font-semibold text-white sm:text-[30px]">My work</h2>
      <div className="mt-[40px] grid gap-[24px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-[16px] border border-white/10 ">
          <img src={ecommerceImage} alt="E-commerce project" className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute left-0 bottom-0 h-0 w-full overflow-hidden bg-gradient-to-t from-rose-600/90 via-rose-500/70 to-transparent transition-all duration-500 ease-out group-hover:h-full">
            <div className="flex h-full flex-col items-center justify-center gap-[16px] p-[24px] text-center text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
              <h3 className="text-[20px] font-semibold">E-commerce Website</h3>
              <p className="text-[14px] leading-[28px] text-zinc-200">A polished store experience with modern product browsing and checkout flow.</p>
              <a href="https://aaron-ecommerce-store.onrender.com/index.html" target="_blank" rel="noreferrer" className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white text-rose-500 transition hover:bg-white/90 hover:text-rose-600">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[16px] border border-white/10">
          <img src={stopwatchImage} alt="Stopwatch project" className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute left-0 bottom-0 h-0 w-full overflow-hidden bg-gradient-to-t from-rose-600/90 via-rose-500/70 to-transparent transition-all duration-500 ease-out group-hover:h-full">
            <div className="flex h-full flex-col items-center justify-center gap-[16px] p-[24px] text-center text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
              <h3 className="text-[20px] font-semibold">Stop Watch with High Score</h3>
              <p className="text-[14px] leading-[28px] text-zinc-200">A personalized timer experience with a ranking system to keep motivation high.</p>
              <a href="./stop watch project.html" className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white text-rose-500 transition hover:bg-white/90 hover:text-rose-600">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[16px] border border-white/10">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Chat application" className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute left-0 bottom-0 h-0 w-full overflow-hidden bg-gradient-to-t from-rose-600/90 via-rose-500/70 to-transparent transition-all duration-500 ease-out group-hover:h-full">
            <div className="flex h-full flex-col items-center justify-center gap-[16px] p-[24px] text-center text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
              <h3 className="text-[20px] font-semibold">Chat Application</h3>
              <p className="text-[14px] leading-[28px] text-zinc-200">A real-time chat app built with modern web technologies for live user conversations.</p>
              <a href="https://nextjs-chat-app-sceg.onrender.com/" target="_blank" rel="noreferrer" className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white text-rose-500 transition hover:bg-white/90 hover:text-rose-600">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
