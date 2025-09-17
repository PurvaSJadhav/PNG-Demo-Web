"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/navigation";
import Loader from "./components/Loader.js";

export default function Home() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email, password); // AuthContext handles routing
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Loader />
      <main className="!h-[calc(100vh-64px)] !relative !overflow-hidden">
        {/* Hero background */}
        <div className="!absolute !inset-0 -z-10">
          <Image
            src="/home_hero.jpeg"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="!absolute !inset-0 !bg-black/45" />
        </div>

        {/* Content container */}
        <div className="!max-w-7xl !mx-auto !h-full !px-8 !flex !items-center !justify-between !gap-8">
          {/* LEFT - Welcome card */}
          <div className="w-2/3">
            <div className="!bg-white/60 !backdrop-blur- rounded-lg !p-10 shadow-2xl max-w-2xl !text-center">
              <h1 className="!text-5xl !font-extrabold !text-[#C62829] !leading-tight">
                Welcome to PNG Driver & Security Management
              </h1>
              <p className="!mt-4 !text-lg !text-gray-700">
                Ensuring Safety, Trust, and Reliable Service –<br /> Every
                Journey, Every Time.
              </p>
            </div>
          </div>

          {/* RIGHT - Login card */}
          <div className="!w-[360px]">
            <div className="!bg-transparent !rounded-lg !shadow-xl !p-6">
              <h2 className="!text-3xl !font-bold !text-center !mb-4">Login</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="!block !text-sm !font-medium !text-white !mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc@gmail.com"
                    required
                    className="!w-full !border !px-3 !bg-white !text-black !py-2 !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-[#C62829] !mb-2"
                  />
                </div>

                <div>
                  <label className="!block !text-sm !font-medium !text-white !mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="!mb-4 !w-full !border !px-3 !bg-white !text-black !py-2 !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-[#C62829]"
                  />
                </div>

                {/* {error && <div className="text-sm text-red-600">{error}</div>} */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="!w-full !bg-[#C62829] !text-white !py-2 !rounded-md !font-semibold !hover:bg-red-800 !transition"
                >
                  {submitting ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
