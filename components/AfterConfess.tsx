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
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold text-pink-dark">💌 Confess Summary</h2>
      <p className="text-pink-dark/80">
        {confess.emotion} {confess.message}
      </p>
      <p className="text-pink-dark/70 text-sm">
        Dari: <strong>{confess.name}</strong>
      </p>
      <p className="text-pink-dark/50 text-xs">
        Tanggal: {new Date(confess.createdAt).toLocaleString()}
      </p>
      <p className="text-pink-dark/80 mt-2 text-sm">
        💖 Kamu bisa share link ini lagi ke temanmu
      </p>
    </div>
  );
}
