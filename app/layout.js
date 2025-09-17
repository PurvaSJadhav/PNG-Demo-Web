"use client"; // required for hooks like usePathname

import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide Navbar on /admin/dashboard
  const hideNavbar = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {!hideNavbar && <Navbar />}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
