"use server";

import { Resend } from "resend";
import { env } from "@/config/env";

// You will need to add RESEND_API_KEY to your .env file
const resend = new Resend(process.env.RESEND_API_KEY);
const businessEmail = env.site.businessEmail;
export async function sendBookingEmail(formData: {
  name: string;
  email: string;
  business: string;
  message: string;
}) {
  try {
    const { name, email, business, message } = formData;

    // 1. Send Email to the Business Owner (You)
    await resend.emails.send({
      from: "DikhaoNow <onboarding@resend.dev>",
      to: businessEmail,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">New Booking Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business Type:</strong> ${business}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${message}
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">This email was sent from your DikhaoNow landing page.</p>
        </div>
      `,
    });

    // 2. Send Confirmation Email to the Client (Optional but premium)
    await resend.emails.send({
      from: "DikhaoNow <onboarding@resend.dev>",
      to: email,
      subject: "We've received your request!",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; text-align: center;">
          <h2 style="color: #7c3aed;">Thanks for reaching out!</h2>
          <p>Hi ${name}, we've received your request for <strong>${business}</strong>.</p>
          <p>Our team is reviewing your details and will get back to you within 24 hours.</p>
          <div style="margin-top: 30px;">
            <a href="${env.site.url}" style="background: #7c3aed; color: white; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold;">Visit our site</a>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
