"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Encode UTF-8 → Base64 URL Safe
 */
function encodeBase64Url(str: string) {
  return btoa(encodeURIComponent(str))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export default function CreateConfessPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emotion, setEmotion] = useState("❤️");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = encodeBase64Url(
        JSON.stringify({
          name,
          message,
          emotion,
          createdAt: new Date().toISOString(),
        })
      );

      router.push(`/read/${payload}`);
    } catch (err) {
      console.error(err);
      alert("Gagal membuat confess 😢");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-light px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-pink-dark mb-6 text-center">
          Buat Confess 💌
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <div>
            <label className="block text-pink-dark font-medium mb-1">
              Namamu
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Misal: Rara"
              className="w-full px-3 py-2 rounded-lg border border-pink-light focus:ring-2 focus:ring-pink"
            />
          </div>

          <div>
            <label className="block text-pink-dark font-medium mb-1">
              Pesan Confess
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Aku mau jujur sama kamu..."
              className="w-full px-3 py-2 rounded-lg border border-pink-light focus:ring-2 focus:ring-pink"
            />
          </div>

          <div>
            <label className="block text-pink-dark font-medium mb-1">
              Emosi
            </label>
            <select
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-pink-light focus:ring-2 focus:ring-pink"
            >
              <option value="❤️">❤️ Cinta</option>
              <option value="😊">😊 Senang</option>
              <option value="😳">😳 Malu</option>
              <option value="😢">😢 Sedih</option>
              <option value="🥰">🥰 Sayang</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-pink text-white font-semibold py-2 rounded-full shadow-md hover:bg-pink-dark disabled:opacity-60"
          >
            {isSubmitting ? "Membuat..." : "Buat Confess 💖"}
          </button>
        </form>

        <p className="text-center text-pink-dark/60 text-sm mt-4">
          💡 Link bisa dibuka di semua device & browser
        </p>
      </div>
    </div>
  );
}
