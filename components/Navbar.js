"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full h-16 bg-[#fdf7e4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-30 h-14 relative">
            <Image
              src="/logo.png"
              alt="PNG"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
