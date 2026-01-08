// app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-light px-4">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-pink-dark text-center">
        NT-Confess 💌
      </h1>

      {/* Subheader / Intro */}
      <p className="text-center text-pink-dark/80 mb-8 max-w-md">
        Ada sesuatu yang ingin kamu sampaikan ke dia?  
        Jangan cuma bilang lewat chat biasa, buat pengalaman confess yang manis dan berkesan!
      </p>

      {/* Call to Action */}
      <Link
        href="/create"
        className="bg-pink text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-pink-dark transition-all duration-300"
      >
        Buat Confessmu 💖
      </Link>

      {/* Cute Decoration */}
      <div className="mt-12 flex space-x-3">
        <div className="w-5 h-5 bg-pink rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-purple-light rounded-full animate-bounce delay-150"></div>
        <div className="w-5 h-5 bg-pink-dark rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
