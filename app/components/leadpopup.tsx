"use client";

import { useState } from "react";

export default function LeadPopup({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    qualification: "",
    city: "",
  });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // 👈 replace

  const handleSubmit = async () => {
    if (loading) return;

    setLoading(true);

    const message = `New Lead:%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Qualification: ${form.qualification}%0A
City: ${form.city}`;

    // ✅ 1. WhatsApp FIRST
    window.open(`https://wa.me/918643071462?text=${message}`, "_blank");

    // ✅ 2. Google Sheet DIRECT (no API route)
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // ✅ important
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Trigger */}
      <div onClick={() => setOpen(true)}>{trigger}</div>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 relative animate-[scaleIn_.3s_ease]">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute cursor-pointer top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-orange-500 mb-4">
              Get Started 🚀
            </h2>

            <div className="flex flex-col gap-3">
              <input
                placeholder="Full Name"
                className="border p-3 border-2 border-black text-[#000] rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              <input
                placeholder="Mobile Number"
                className="border p-3 border-2 border-black text-[#000] rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
              <input
                placeholder="Qualification"
                className="border border-2 border-black text-[#000] p-3 rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, qualification: e.target.value })
                }
              />
              <input
                placeholder="City"
                className="border p-3 border-2 border-black text-[#000] rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`mt-5 w-full py-3 cursor-pointer rounded-full text-white font-medium 
              transition-all duration-300 
              ${
                loading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:scale-105 active:scale-95"
              }`}
            >
              {loading ? "Submitting..." : "Submit & Connect"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}