"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">

      {status && (
        <p className={status.success ? "text-green-600" : "text-red-600"}>
          {status.message}
        </p>
      )}

      <Input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="w-full border p-2"
      />

      <Input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full border p-2"
      />

      <Input
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        required
        className="w-full border p-2"
      />

      <Textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        required
        className="w-full border p-2"
      />

      <Button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 cursor-pointer"
      >
        {loading ? "Sending..." : "Send"}
      </Button>

    </form>
  );
}
