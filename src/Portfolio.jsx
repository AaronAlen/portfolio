import week1Img from "../images/week1-landing.jpg";
import week2Img from "../images/week2-task-manager.jpg";
import week4Img from "../images/week4-diary.jpg";
import week5Img from "../images/week5-api.jpg";
import week6Img from "../images/week6-employee-tasks.jpg";
import week7Img from "../images/week7-inventory.jpg";
import week9Img from "../images/week9-insurance-ai.jpg";
import week12Img from "../images/week12-retail-showroom.jpg";

const projects = [
  {
    week: "Week 1",
    title: "Landing Page",
    description: "Responsive, high-converting product landing page with modern layout, clean typography, and interactive components.",
    link: "https://week-1-landingpage.vercel.app/",
    image: week1Img,
    aos: "fade-right",
    delay: "100",
  },
  {
    week: "Week 2 & 3",
    title: "Task Management App",
    description: "Full-featured task productivity planner with intuitive workflow tracking, Kanban status management, and clean UI.",
    link: "https://final-deliverable-week3-with-git.vercel.app/",
    image: week2Img,
    aos: "fade-up",
    delay: "200",
  },
  {
    week: "Week 4",
    title: "Personal Diary App",
    description: "Private digital journaling app for writing, cataloging thoughts, tracking moods, and organizing daily entries.",
    link: "https://diary-ten-sigma.vercel.app/",
    image: week4Img,
    aos: "fade-left",
    delay: "300",
  },
  {
    week: "Week 5",
    title: "Student Management API (Swagger)",
    description: "Comprehensive backend REST API for managing student records, course enrollment, database models, and Swagger API docs.",
    link: "https://week5-full.onrender.com/api-docs/",
    image: week5Img,
    aos: "fade-right",
    delay: "100",
  },
  {
    week: "Week 6",
    title: "Employee Task Management",
    description: "Role-based team workflow platform for assigning tasks, tracking sprint progress, and monitoring employee performance.",
    link: "https://alen-week6.vercel.app/",
    image: week6Img,
    aos: "fade-up",
    delay: "200",
  },
  {
    week: "Week 7 & 8",
    title: "Inventory Stock Management",
    description: "Real-time stock monitoring, inventory tracking, restocking alerts, and supply warehouse dashboard.",
    link: "https://week7-eta.vercel.app/",
    image: week7Img,
    aos: "fade-left",
    delay: "300",
  },
  {
    week: "Week 9",
    title: "Insurance Claim AI App",
    description: "Intelligent insurance claim processing app leveraging AI algorithms, risk analytics, and an automated claims review dashboard.",
    link: "https://a34264d5-0102-4844-abf8-11fdd56929db.domoapps.prod5.domo.com/?customer=gwcteq-partner&environment=prod5&locale=en-US&userId=513340924&userName=Aaron%20Arulanantham&userEmail=aaron.arulanantham@gwcdata.ai#/dashboard",
    image: week9Img,
    aos: "fade-right",
    delay: "100",
  },
  {
    week: "Week 12",
    title: "Retail AI & 3D Showroom",
    description: "Next-gen retail shopping experience featuring AI product suggestions and an immersive 3D fashion showroom.",
    link: "https://retail-clau-capstone-gwc.vercel.app/",
    image: week12Img,
    aos: "fade-left",
    delay: "200",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-[1280px] px-[16px] py-[64px] sm:px-[24px] sm:py-[80px] lg:px-[48px]">
      <div data-aos="fade-down" data-aos-duration="600">
        <p className="text-[14px] uppercase tracking-[0.3em] text-rose-500 font-medium">Featured Projects</p>
        <h2 className="text-[28px] font-semibold text-white sm:text-[34px] mt-[4px]">My Work</h2>
      </div>

      <div className="mt-[40px] grid gap-[28px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={project.aos}
            data-aos-delay={project.delay}
            data-aos-duration="700"
            className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-zinc-900/60 shadow-lg shadow-black/40 transition duration-300 hover:border-rose-500/40"
          >
            {/* Week Badge */}
            <div className="absolute top-[14px] left-[14px] z-10 rounded-full border border-white/20 bg-zinc-950/80 px-[12px] py-[4px] text-[12px] font-semibold text-rose-400 backdrop-blur-md transition group-hover:border-rose-500/50">
              {project.week}
            </div>

            {/* Thumbnail Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-[460px] w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay on hover (comes up from bottom) */}
            <div className="absolute left-0 bottom-0 h-0 w-full overflow-hidden bg-gradient-to-t from-rose-600/95 via-rose-500/85 to-transparent transition-all duration-500 ease-out group-hover:h-full">
              <div className="flex h-full flex-col items-center justify-center gap-[12px] p-[24px] text-center text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <span className="rounded-full bg-black/30 border border-white/20 px-[12px] py-[3px] text-[12px] font-semibold uppercase tracking-wider text-white">
                  {project.week}
                </span>
                <h3 className="text-[20px] font-semibold text-white drop-shadow-sm">{project.title}</h3>
                <p className="text-[13px] leading-[22px] text-zinc-100 max-w-[280px]">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[8px] inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-xl transition hover:scale-110 hover:bg-white/90 hover:text-rose-600 cursor-pointer"
                  aria-label={`Open ${project.title}`}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-[16px]"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
