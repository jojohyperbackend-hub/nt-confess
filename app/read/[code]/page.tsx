"use client";

import { useEffect, useState } from "react";
import Step from "@/components/Step";

type Confess = {
  name: string;
  message: string;
  emotion: string;
};

export default function ReadConfessPage() {
  const [confess, setConfess] = useState<Confess | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [shareLink, setShareLink] = useState("");

  // Ambil data dari URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const message = params.get("message");
    const emotion = params.get("emotion");

    if (!name || !message || !emotion) {
      setConfess(null);
      return;
    }

    setConfess({ name, message, emotion });
    setShareLink(window.location.href);
  }, []);

  if (!confess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-light text-pink-dark text-center px-4">
        <p className="text-xl font-semibold">❌ Confess tidak ditemukan 😢</p>
        <p className="text-sm text-pink-dark/50 mt-2">
          Pastikan link yang dibuka benar 💖
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-light px-4 space-y-6">
      {/* Share Link */}
      <div className="bg-white p-3 rounded-xl shadow-md w-full max-w-md text-center">
        <p className="text-pink-dark/80 mb-2">
          💌 Link Confess ini bisa dibagikan ke semua orang:
        </p>
        <input
          type="text"
          readOnly
          value={shareLink}
          className="w-full px-3 py-2 rounded-lg border border-pink-light text-pink-dark focus:outline-none focus:ring-2 focus:ring-pink"
          onClick={(e) => (e.target as HTMLInputElement).select()}
        />
        <p className="text-sm text-pink-dark/50 mt-1">
          Klik & copy link, bisa dibuka di browser/device/tab lain 💖
        </p>
      </div>

      {/* Step-by-Step Confess */}
      <Step
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        confess={{ ...confess, createdAt: new Date().toISOString() }}
      />
    </div>
  );
}
