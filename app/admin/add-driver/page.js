"use client";

import {
  User,
  Home,
  UserSquare,
  ShieldCheck,
  Car,
  MapPin,
  BarChart2,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AddDriver = ({ vehicles = [], loading = false }) => {
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/");
    } catch (err) {
      console.warn("Logout API failed:", err);
    } finally {
      localStorage.clear();
      router.push("/");
    }
  };

  return (
    <div className="!flex !min-h-screen !font-sans !bg-[#F7F2E9]">
      {/* Sidebar */}
      <aside className="!w-64 !bg-[#c52c2d] !text-white !min-h-screen !p-5 !flex !flex-col !items-center !shadow-md !fixed">
        <div className="!flex !flex-col !items-center !mb-12 !mt-10">
          <div className="!w-24 !h-24 !bg-white !rounded-full !flex !items-center !justify-center !text-[#0b2c4d] !font-bold !text-xl !mb-4">
            <User size={40} />
          </div>
          <h2 className="!text-2xl !text-center !font-semibold">
            Mrs. Sharada Dhumal
          </h2>
          <p className="!text-sm !text-gray-300">sharada@company.com</p>
        </div>

        <nav className="!w-full !flex !flex-col !gap-2 !text-left">
          <Link href="/admin/dashboard">
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
              <Home size={18} /> Home
            </div>
          </Link>
          <Link href="/admin/driver">
            <div
              style={{ backgroundColor: "#e0e7ff", color: "#a33036ff" }}
              className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors"
            >
              <UserSquare size={18} /> Driver Master
            </div>
          </Link>
          <Link href="/admin/security">
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
              <ShieldCheck size={18} /> Security Master
            </div>
          </Link>
          <Link href="/admin/vehicle">
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
              <Car size={18} /> Vehicle Master
            </div>
          </Link>
          <Link href="/admin/request">
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
              <MapPin size={18} /> Request
            </div>
          </Link>
          <Link href="/admin/reports">
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
              <BarChart2 size={18} /> Reports
            </div>
          </Link>
          <div
            className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !cursor-pointer"
            onClick={logoutHandler}
          >
            <LogOut size={18} /> Log Out
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="!max-w-2xl !mx-auto !my-10 !p-8 !bg-white !rounded-lg !shadow-lg !ml-150">
        <h1 className="!text-3xl !font-bold !text-[#C62829] !mb-6">
          Complete Driver Profile
        </h1>
        <p className="!text-gray-600 !mb-6">
          All fields and documents are required to activate your account.
        </p>

        <form className="!space-y-6">
          {/* Full Name */}
          <div className="!flex !flex-col">
            <label className="!mb-1 !font-medium !text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="!border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#C62829]"
            />
          </div>

          {/* Mobile Number */}
          <div className="!flex !flex-col">
            <label className="!mb-1 !font-medium !text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              required
              className="!border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#C62829]"
            />
          </div>

          {/* Aadhar Number */}
          <div className="!flex !flex-col">
            <label className="!mb-1 !font-medium !text-gray-700">
              Aadhar Number
            </label>
            <input
              type="text"
              name="aadharNumber"
              required
              className="!border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#C62829]"
            />
          </div>

          {/* File Uploads */}
          {[
            { label: "Profile Photo", name: "profilePhoto" },
            { label: "Driving License Photo", name: "licensePhoto" },
            { label: "Aadhar Card Photo", name: "aadharCardPhoto" },
          ].map((fileInput) => (
            <div key={fileInput.name} className="!flex !flex-col">
              <label className="!mb-1 !font-medium !text-gray-700">
                {fileInput.label}
              </label>
              <input
                type="file"
                name={fileInput.name}
                className="!border !text-black !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#C62829]"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="!w-full !bg-[#C62829] !text-white !font-bold !py-2 !px-4 !rounded-md hover:!bg-[#9E1F24] !transition-colors disabled:!opacity-50"
          >
            {loading ? "Submitting..." : "Save and Continue"}
          </button>
        </form>

        <Link href="/admin/driver">
          <button className="!bg-[#C62829] !ml-40 !text-white !mt-5 !px-5 !py-2 !rounded-lg !shadow !transition">
            Back to the List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddDriver;
