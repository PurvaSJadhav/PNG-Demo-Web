"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./Loader.css";

const Loader = () => {
    useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById("loader");
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 1200);
      }
    }, 5200); // total loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="loader">
      {/* Shutter Panels */}
      <div className="shutter left"></div>
      <div className="shutter right"></div>

      {/* White overlay fade */}
      <div className="overlay"></div>

      {/* Loader Content */}
      <div className="loader-content">
        <Image
          src="/png_logo.png"
          alt="PNG Logo"
          width={280}
          height={150}
          className="loader-logo"
        />
        <p className="loader-text">Trusted Since 1832</p>
      </div>
    </section>
  )
}

export default Loader