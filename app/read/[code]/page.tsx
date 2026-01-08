"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Step from "@/components/Step";

type Confess = {
  name: string;
  message: string;
  emotion: string;
  createdAt: string;
};

export default function ReadConfessPage() {
  const params = useParams();
  const code = params.code;

  const [confess, setConfess] = useState<Confess | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [shareLink, setShareLink] = useState("");

  // Ambil share link universal
  useEffect(() => {
    if (!code) return;
    setShareLink(window.location.href);
  }, [code]);

  // Fetch confess dari API
  useEffect(() => {
    if (!code) return;

    const fetchConfess = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/route?code=${code}`, {
          cache: "no-store", // paksa fetch ambil fresh JSON
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("API error response:", text);
          throw new Error("Confess tidak ditemukan");
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("Unexpected content:", text);
          throw new Error("API tidak mengembalikan JSON");
        }

        const data = await res.json();
        setConfess(data.confess);
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan saat memuat confess");
      } finally {
        setLoading(false);
      }
    };

    fetchConfess();
  }, [code]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-light text-pink-dark">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-light text-pink-dark text-center px-4">
        <p className="text-xl font-semibold">❌ {error}</p>
      </div>
    );
  }

  if (!confess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-light text-pink-dark">
        Confess tidak ditemukan 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-light px-4 space-y-6">
      {/* Share Link */}
      <div className="bg-white p-3 rounded-xl shadow-md w-full max-w-md text-center">
        <p className="text-pink-dark/80 mb-2">💌 Link Confess ini bisa dibagikan ke semua orang:</p>
        <input
          type="text"
          readOnly
          value={shareLink}
          className="w-full px-3 py-2 rounded-lg border border-pink-light text-pink-dark focus:outline-none focus:ring-2 focus:ring-pink"
          onClick={(e) => (e.target as HTMLInputElement).select()}
        />
        <p className="text-sm text-pink-dark/50 mt-1">Klik & copy link, bisa dibuka di browser/device/tab lain 💖</p>
      </div>

      {/* Step-by-Step Confess */}
      <Step
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        confess={confess}
      />
    </div>
  );
}
