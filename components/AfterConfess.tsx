"use client";

type AfterConfessProps = {
  confess: {
    name: string;
    message: string;
    emotion: string;
    createdAt: string;
  };
};

export default function AfterConfess({ confess }: AfterConfessProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-light px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-pink-dark mb-2">
          💖 Terima Kasih!
        </h2>
        <p className="text-pink-dark/80">
          Kamu sudah membaca confess dari <strong>{confess.name}</strong>.
        </p>

        <div className="mt-4 p-4 bg-pink-light rounded-lg border border-pink">
          <p className="text-pink-dark">
            {confess.emotion} {confess.message}
          </p>
          <p className="text-pink-dark/50 text-sm mt-2">
            Dibuat pada: {new Date(confess.createdAt).toLocaleString()}
          </p>
        </div>

        <button
          className="mt-6 bg-pink text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-pink-dark transition-all duration-300"
          onClick={() => alert("Kamu bisa balas lewat chatmu sendiri 💌")}
        >
          Balas Confess 💌
        </button>
      </div>
    </div>
  );
}
