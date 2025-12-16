"use client";

import { profile } from "@/data/profile";

export default function Footer() {

  return (
    <footer className="bg-black border-t border-[#1A1A1A] px-6 md:px-12" style={{ height: '3.5rem' }}>
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-center text-center">
        <a
          href={`mailto:${profile.email}`}
          className="text-base md:text-lg font-normal text-white hover:opacity-70 transition-opacity"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}

