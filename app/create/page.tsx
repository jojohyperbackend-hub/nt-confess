"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateConfessPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emotion, setEmotion] = useState("❤️");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Panggil API (app/api/route.ts)
      const res = await fetch("/api/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, emotion }),
      });
      const data = await res.json();

      if (data?.code) {
        // Redirect ke halaman read/[code]
        router.push(`/read/${data.code}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-light px-4">
      <h2 className="text-3xl font-bold text-pink-dark mb-6 text-center">
        Buat Confessmu 💌
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        {/* Nama pengirim */}
        <div>
          <label className="block text-pink-dark font-medium mb-1">Namamu</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Misal: Rara"
            required
            className="w-full px-3 py-2 rounded-lg border border-pink-light focus:outline-none focus:ring-2 focus:ring-pink"
          />
        </div>

        {/* Pesan confess */}
        <div>
          <label className="block text-pink-dark font-medium mb-1">Pesanmu</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis perasaanmu..."
            required
            rows={4}
            className="w-full px-3 py-2 rounded-lg border border-pink-light focus:outline-none focus:ring-2 focus:ring-pink"
          ></textarea>
        </div>

        {/* Pilihan emosi */}
        <div>
          <label className="block text-pink-dark font-medium mb-1">Pilih Emosi</label>
          <select
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-pink-light focus:outline-none focus:ring-2 focus:ring-pink"
          >
            <option value="❤️">❤️ Cinta</option>
            <option value="😊">😊 Senang</option>
            <option value="😳">😳 Malu</option>
            <option value="😢">😢 Sedih</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 bg-pink text-white font-semibold py-2 rounded-full shadow-md hover:bg-pink-dark transition-all duration-300"
        >
          {isSubmitting ? "Membuat..." : "Buat Confess 💖"}
        </button>
      </form>
    </div>
  );
}
