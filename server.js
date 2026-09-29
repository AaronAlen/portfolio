import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio Brevo email server is running" });
});

// Contact form email endpoint using Brevo API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Please provide your name, email, and message.",
      });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!brevoApiKey || brevoApiKey === "your_brevo_api_key_here") {
      return res.status(500).json({
        success: false,
        error: "Brevo API Key is not configured. Please set BREVO_API_KEY in your .env file.",
      });
    }

    const senderEmail = process.env.SENDER_EMAIL || "aaronbca123@gmail.com";
    const senderName = process.env.SENDER_NAME || "Aaron Portfolio Contact";
    const recipientEmail = process.env.RECIPIENT_EMAIL || "aaronbca123@gmail.com";

    const emailPayload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: recipientEmail,
          name: "Aaron",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `New Portfolio Message from ${name}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <h2 style="color: #e11d48; margin-top: 0; border-bottom: 2px solid #fecdd3; padding-bottom: 12px;">New Contact Form Submission</h2>
          <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
          <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #e11d48; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #475569;">Message:</p>
            <p style="margin-top: 8px; white-space: pre-wrap; color: #1e293b;">${message}</p>
          </div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-bottom: 0;">Sent automatically from Aaron's Portfolio Website via Brevo API</p>
        </div>
      `,
    };

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error("Brevo API error response:", data);
      return res.status(brevoResponse.status).json({
        success: false,
        error: data.message || "Failed to send email via Brevo.",
        details: data,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
      messageId: data.messageId,
    });
  } catch (error) {
    console.error("Server error sending contact email:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error occurred while sending email.",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
