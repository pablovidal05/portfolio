"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Mostrar loader al cambiar de ruta
    setIsLoading(true);

    // Ocultar loader después de un tiempo mínimo
    const minLoadTime = 300; // 300ms mínimo
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Si la página ya está cargada
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Esperar a que termine de cargar
      window.addEventListener("load", handleLoad);
    }

    // También ocultar después de un tiempo máximo (por si la página es muy lenta)
    const maxLoadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Máximo 2 segundos

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(maxLoadTimer);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        <div className="text-white/60 text-xs uppercase tracking-wider" style={{ fontSize: '0.75rem', fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace" }}>
          Loading
        </div>
      </div>
    </div>
  );
}

