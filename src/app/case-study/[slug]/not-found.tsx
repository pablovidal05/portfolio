import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-12">
      <div className="text-center">
        <h1 className="text-5xl font-normal text-white mb-4">404</h1>
        <p className="text-base text-[#999999] mb-8">
          Proyecto no encontrado
        </p>
        <Link
          href="/"
          className="text-base font-normal text-white hover:opacity-70 transition-opacity inline-flex items-center gap-2"
        >
          Volver al inicio →
        </Link>
      </div>
    </div>
  );
}

