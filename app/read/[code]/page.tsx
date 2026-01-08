"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Step from "@/components/Step";

/**
 * Decode Base64 URL Safe → UTF-8
 */
function decodeBase64Url(str: string) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  return decodeURIComponent(atob(str));
}

type Confess = {
  name: string;
  message: string;
  emotion: string;
  createdAt: string;
};

export default function ReadConfessPage() {
  const { code } = useParams<{ code: string }>();

  const [confess, setConfess] = useState<Confess | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    if (!code) return;

    try {
      const decoded = decodeBase64Url(code);
      const data = JSON.parse(decoded);

      if (!data.name || !data.message || !data.emotion) {
        throw new Error("Invalid data");
      }

      setConfess(data);
      setShareLink(window.location.href);
    } catch (err) {
      console.error(err);
      setError("Link confess rusak atau tidak valid 😢");
    }
  }, [code]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-light text-pink-dark">
        ❌ {error}
      </div>
    );
  }

  if (!confess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-light text-pink-dark">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-light px-4 space-y-6">
      <div className="bg-white p-3 rounded-xl shadow-md w-full max-w-md text-center">
        <p className="text-pink-dark/80 mb-2">
          💌 Share link ini ke siapa pun
        </p>
        <input
          readOnly
          value={shareLink}
          onClick={(e) => (e.target as HTMLInputElement).select()}
          className="w-full px-3 py-2 rounded-lg border border-pink-light text-pink-dark"
        />
        <p className="text-sm text-pink-dark/50 mt-1">
          Bisa dibuka di semua device 💖
        </p>
      </div>

      <Step
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        confess={confess}
      />
    </div>
  );
}
