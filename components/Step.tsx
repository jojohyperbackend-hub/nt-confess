"use client";

import { Dispatch, SetStateAction } from "react";
import AfterConfess from "./AfterConfess";

type StepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  confess: {
    name: string;
    message: string;
    emotion: string;
    createdAt: string;
  };
};

export default function Step({ currentStep, setCurrentStep, confess }: StepProps) {
  const steps = [
    {
      title: "Intro",
      content: "Ada sesuatu yang ingin aku sampaikan…",
    },
    {
      title: "Message",
      content: `${confess.emotion} ${confess.message}`,
    },
    {
      title: "Reveal",
      content: `Yang nulis ini adalah: ${confess.name}`,
    },
    {
      title: "Ending",
      content: "Terima kasih sudah membaca 💖",
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Kalau sudah terakhir, tampilkan AfterConfess
  if (currentStep >= steps.length) {
    return <AfterConfess confess={confess} />;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-pink-dark">{steps[currentStep].title}</h2>
      <p className="text-pink-dark/80">{steps[currentStep].content}</p>
      {currentStep < steps.length - 1 && (
        <button
          onClick={nextStep}
          className="mt-4 bg-pink text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-pink-dark transition-all duration-300"
        >
          Lanjut 💌
        </button>
      )}
      {currentStep === steps.length - 1 && (
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="mt-4 bg-pink text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-pink-dark transition-all duration-300"
        >
          Selesai 💖
        </button>
      )}
    </div>
  );
}
