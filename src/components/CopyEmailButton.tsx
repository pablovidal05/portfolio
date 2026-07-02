"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback silencioso: selección manual
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm bg-white cursor-pointer"
            style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace", textTransform: "none", letterSpacing: "0" }}
            aria-label={`Copiar email ${email}`}
        >
            {copied ? (
                <>
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copiado
                </>
            ) : (
                <>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {email}
                </>
            )}
        </button>
    );
}
