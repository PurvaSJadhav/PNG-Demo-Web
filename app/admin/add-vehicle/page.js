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

const AddVehicle = ({ vehicles = [], loading = false }) => {
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
          <h2 className="!text-center !text-2xl !font-semibold">
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
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
              <UserSquare size={18} /> Driver Master
            </div>
          </Link>
          <Link href="/admin/security">
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
              <ShieldCheck size={18} /> Security Master
            </div>
          </Link>
          <Link href="/admin/vehicle">
            <div
              style={{ backgroundColor: "#e0e7ff", color: "#a33036ff" }}
              className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors"
            >
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
      <main className="!flex-1 !p-8 !ml-100">
        {/* Add Vehicle Form */}
        <div className="!bg-white !w-135 !rounded-xl !shadow-md !p-6 !mb-6 !ml-40">
          <h2 className="!text-2xl !text-black !font-bold !mb-4 !text-center">
            Add a New Vehicle
          </h2>
          <form className="!space-y-4">
            {/* Text Inputs */}
            <div className="!flex !flex-col">
              <label className="!mb-1 !font-medium !text-gray-700">
                Registration Number
              </label>
              <input
                type="text"
                name="registrationNumber"
                required
                className="!w-120 !text-black !border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#c52c2d]"
              />
            </div>

            <div className="!flex !flex-col">
              <label className="!mb-1 !font-medium !text-gray-700">
                Company & Model
              </label>
              <input
                type="text"
                name="companyModel"
                required
                className="!w-120 !border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#c52c2d]"
              />
            </div>

            <div className="!flex !flex-col">
              <label className="!mb-1 !font-medium !text-gray-700">
                Last FASTag Date
              </label>
              <input
                type="date"
                name="lastFastagDate"
                required
                className="!w-120 !text-black !border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#c52c2d]"
              />
            </div>

            <div className="!flex !flex-col">
              <label className="!mb-1 !font-medium !text-gray-700">
                Last Maintenance Date
              </label>
              <input
                type="date"
                name="maintenanceDate"
                required
                className="!w-120 !text-black !border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#c52c2d]"
              />
            </div>

            <div className="!flex !flex-col">
              <label className="!mb-1 !font-medium !text-gray-700">PUC Date</label>
              <input
                type="date"
                name="pucDate"
                required
                className="!w-120 !text-black !border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#c52c2d]"
              />
            </div>

            <hr className="!my-2" />

            {/* File Inputs */}
            {[
              "Vehicle Photo",
              "FASTag Photo",
              "Maintenance Photo",
              "PUC Photo",
              "RC Book Photo",
            ].map((label, idx) => (
              <div key={idx} className="!flex !flex-col">
                <label className="!mb-1 !font-medium !text-gray-700">{label}</label>
                <input
                  type="file"
                  name={label.replace(/\s+/g, "").toLowerCase()}
                  required
                  className="!w-120 !text-black !border !border-gray-300 !rounded-md !p-2 focus:!outline-none focus:!ring-2 focus:!ring-[#c52c2d]"
                />
              </div>
            ))}

            <button
              type="submit"
              className="!w-120 !bg-[#c52c2d] !text-white !font-bold !py-2 !px-4 !rounded-md hover:!bg-[#a33036ff] !transition-colors disabled:!opacity-50"
            >
              Add Vehicle
            </button>
          </form>
          <Link href="/admin/vehicle">
            <button className="!bg-[#C62829] !ml-40 !text-white !mt-5 !px-5 !py-2 !rounded-lg !shadow !transition">
              Back to the List
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AddVehicle;
