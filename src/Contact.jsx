import { useState } from "react";
import cvFile from "../images/Aaron MERN.pdf";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedback("Please fill out all fields before submitting.");
      return;
    }

    setStatus("loading");
    setFeedback("Sending your message via Brevo email service...");

    let sent = false;
    let errorMessage = "";

    try {
      // 1. First attempt: Send through backend Brevo endpoint (/api/contact)
      try {
        const backendBase = import.meta.env.VITE_BACKEND_URL || "";
        const endpoint = backendBase ? `${backendBase}/api/contact` : "/api/contact";

        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          sent = true;
        } else {
          errorMessage = data.error || "Backend failed to send email.";
        }
      } catch (backendErr) {
        console.warn("Backend endpoint not reachable:", backendErr.message);
      }

      // 2. Second attempt: If backend wasn't reachable, check if client Brevo API key is available
      const frontendBrevoKey = import.meta.env.VITE_BREVO_API_KEY;
      if (!sent && frontendBrevoKey && frontendBrevoKey !== "your_brevo_api_key_here") {
        try {
          const senderEmail = import.meta.env.VITE_BREVO_SENDER_EMAIL || "aaronbca123@gmail.com";
          const recipientEmail = import.meta.env.VITE_BREVO_RECIPIENT_EMAIL || "aaronbca123@gmail.com";

          const directRes = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "api-key": frontendBrevoKey,
            },
            body: JSON.stringify({
              sender: {
                name: "Aaron Portfolio Contact",
                email: senderEmail,
              },
              to: [
                {
                  email: recipientEmail,
                  name: "Aaron",
                },
              ],
              replyTo: {
                email: formData.email,
                name: formData.name,
              },
              subject: `New Portfolio Message from ${formData.name}`,
              htmlContent: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
                  <h2 style="color: #e11d48; margin-top: 0;">New Contact Form Submission</h2>
                  <p><strong>Name:</strong> ${formData.name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                  <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #e11d48; border-radius: 4px;">
                    <p style="margin: 0; font-weight: bold;">Message:</p>
                    <p style="margin-top: 8px; white-space: pre-wrap;">${formData.message}</p>
                  </div>
                </div>
              `,
            }),
          });

          const directData = await directRes.json();
          if (directRes.ok) {
            sent = true;
          } else {
            errorMessage = directData.message || "Brevo direct API failed.";
          }
        } catch (clientErr) {
          console.error("Direct Brevo API error:", clientErr);
        }
      }

      if (sent) {
        setStatus("success");
        setFeedback("🎉 Thank you! Your message has been sent successfully. I will get back to you soon!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(
          errorMessage ||
            "Unable to send message via Brevo right now. Please ensure BREVO_API_KEY is configured in your .env file or run the backend server (`npm run server`)."
        );
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
      setFeedback("An unexpected error occurred while sending your message. Please try again.");
    }
  };

  return (
    <>
      <section id="contact" className="mx-auto max-w-[1280px] px-[16px] py-[48px] sm:px-[24px] sm:py-[64px] lg:px-[48px]">
        <div className="grid gap-[32px] rounded-[24px] border border-white/10 bg-zinc-900/80 p-[24px] shadow-2xl shadow-black/30 lg:grid-cols-[0.9fr_1.1fr] sm:p-[32px]">
          {/* Contact Left Column */}
          <div data-aos="fade-right" data-aos-duration="700">
            <h2 className="text-[30px] font-semibold text-white sm:text-[36px]">Contact Me</h2>
            <p className="mt-[12px] text-[14px] leading-[26px] text-zinc-300">
              Have a project in mind or want to collaborate? Send me a message and I'll respond as soon as possible.
            </p>

            <div className="mt-[24px] flex flex-wrap gap-[16px] text-[24px] text-zinc-300">
              <a href="mailto:aaronbca123@gmail.com" title="Email" className="transition hover:text-rose-500 hover:scale-110">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="tel:+916382315385" title="Call" className="transition hover:text-rose-500 hover:scale-110">
                <i className="fa-solid fa-square-phone-flip"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100053839804537&mibextid=ZbWKwL" target="_blank" rel="noreferrer" title="Facebook" className="transition hover:text-rose-500 hover:scale-110">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/aaron_bca_123?igsh=MXJkNW5uanEwanRtbw==" target="_blank" rel="noreferrer" title="Instagram" className="transition hover:text-rose-500 hover:scale-110">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/aaron-a-890652278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" title="LinkedIn" className="transition hover:text-rose-500 hover:scale-110">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/+916382315385" target="_blank" rel="noreferrer" title="WhatsApp" className="transition hover:text-rose-500 hover:scale-110">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>

            <div className="mt-[32px]">
              <a
                href={cvFile}
                download="Aaron_A_FullStack_Resume.pdf"
                className="inline-flex items-center gap-[8px] rounded-full bg-rose-500 px-[24px] py-[12px] text-[14px] font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-600 hover:shadow-rose-500/40"
              >
                <i className="fa-solid fa-download"></i>
                Download CV
              </a>
            </div>
          </div>

          {/* Contact Right Column Form */}
          <div data-aos="fade-left" data-aos-duration="700">
            <form onSubmit={handleSubmit} className="space-y-[16px]">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-[12px] border border-white/10 bg-zinc-800/90 px-[16px] py-[14px] text-white outline-none transition focus:border-rose-500 focus:ring-1 focus:ring-rose-500 placeholder:text-zinc-400 text-[15px]"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full rounded-[12px] border border-white/10 bg-zinc-800/90 px-[16px] py-[14px] text-white outline-none transition focus:border-rose-500 focus:ring-1 focus:ring-rose-500 placeholder:text-zinc-400 text-[15px]"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  className="w-full rounded-[12px] border border-white/10 bg-zinc-800/90 px-[16px] py-[14px] text-white outline-none transition focus:border-rose-500 focus:ring-1 focus:ring-rose-500 placeholder:text-zinc-400 text-[15px]"
                  required
                />
              </div>

              {/* Status and Feedback Messages */}
              {status === "success" && (
                <div className="rounded-[12px] border border-emerald-500/30 bg-emerald-500/10 p-[14px] text-[14px] text-emerald-300 flex items-center gap-[10px]">
                  <i className="fa-solid fa-circle-check text-[18px] text-emerald-400"></i>
                  <span>{feedback}</span>
                </div>
              )}

              {status === "error" && (
                <div className="rounded-[12px] border border-rose-500/30 bg-rose-500/10 p-[14px] text-[14px] text-rose-300">
                  <div className="flex items-start gap-[10px]">
                    <i className="fa-solid fa-circle-exclamation text-[18px] text-rose-400 mt-[2px]"></i>
                    <div className="space-y-[8px]">
                      <p>{feedback}</p>
                      <a
                        href={`mailto:aaronbca123@gmail.com?subject=Contact%20from%20${encodeURIComponent(
                          formData.name || "Portfolio Visitor"
                        )}&body=${encodeURIComponent(formData.message || "")}`}
                        className="inline-flex items-center gap-[6px] text-cyan-400 underline hover:text-cyan-300 text-[13px] font-medium"
                      >
                        <i className="fa-solid fa-envelope"></i> Send via default mail client instead
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-[16px] pt-[4px]">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-[8px] rounded-full bg-cyan-500 px-[28px] py-[13px] text-[14px] font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <i className="fa-solid fa-paper-plane text-[12px]"></i>
                    </>
                  )}
                </button>

                {status === "loading" && (
                  <span className="text-[13px] text-zinc-400">Connecting to Brevo...</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <p className="border-t border-white/10 bg-zinc-900/90 px-[24px] py-[24px] text-center text-[14px] text-zinc-400">
        Copyright © Aaron. Made with <i className="fa-solid fa-heart text-rose-500"></i> and React + Tailwind.
      </p>
    </>
  );
}

export default Contact;
