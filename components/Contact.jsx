"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send message right now.");
      }

      setStatus("success");
      setFeedback("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Unable to send message right now.");
    }
  };

  return (
    <section id="contact" className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Let's Connect"
          title="Contact"
          description="Reach out for internships, freelance work, or project collaboration."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="neon-frame panel-gradient rounded-[2rem] border border-white/8 p-5 sm:p-6">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-medium text-white/82">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-black caret-black outline-none placeholder:text-black/50 focus:border-cyan-300/50"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-white/82">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-black caret-black outline-none placeholder:text-black/50 focus:border-cyan-300/50"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-white/82">
                Message
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project"
                  required
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-black caret-black outline-none placeholder:text-black/50 focus:border-cyan-300/50"
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {feedback ? (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-emerald-200" : "text-rose-200"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </div>

          <div className="neon-frame glass rounded-[2rem] border border-white/8 p-5 sm:p-6">
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/68 sm:text-base">
              I’m always interested in hearing about internships, freelance UI
              work, and projects where thoughtful frontend execution matters.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:subbaraorachabattuni0@gmail.com"
                className="block rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-white/85 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                Email: subbaraorachabattuni0@gmail.com
              </a>
              <a
                href="tel:+918522809197"
                className="block rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-white/85 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                Phone: +91-8522809197
              </a>
              <a
                href="https://github.com/subbu0707"
                className="block rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-white/85 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/subbaraorachabattuni/"
                className="block rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-white/85 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
