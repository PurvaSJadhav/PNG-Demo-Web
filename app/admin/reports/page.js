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

const Report = ({ vehicles = [], loading = false }) => {
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
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md !bg-blue-100 !text-[#a33036ff]">
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
      <main className="!flex-1 !p-10 !ml-60 !bg-gray-100 !min-h-screen ">
        <h1 className="!text-3xl !ml-140 !font-bold !text-gray-800 !mb-8">Report</h1>

        <div className="!w-200 !ml-50 !bg-white !rounded-lg !shadow !p-6 !space-y-6">
          {/* Driver Name Row */}
          <div className="!flex !flex-col md:!flex-row !items-center !gap-4">
            <label className="!w-48 !text-sm !font-medium !text-gray-700">
              Driver Name
            </label>
            <select className="!flex-1 !text-black !border !border-gray-300 !rounded !px-3 !py-2">
              <option value="">Select Driver</option>
              <option value="arvind_kumar">Akshay Kumar</option>
              <option value="meena_reddy">Meena Reddy</option>
              <option value="suresh_chatterjee">Suresh Chatterjee</option>
            </select>
          </div>

          <div className="!text-center !text-black">OR</div>

          {/* Security Name Row */}
          <div className="!flex !flex-col md:!flex-row !items-center !gap-4">
            <label className="!w-48 !text-sm !font-medium !text-gray-700">
              Security Name
            </label>
            <select className="!flex-1 !text-black !border !border-gray-300 !rounded !px-3 !py-2">
              <option value="">Select Security</option>
              <option value="rajiv_singh">Rajiv Singh</option>
              <option value="priya_sharma">Priya Sharma</option>
              <option value="vikram_gupta">Vikram Gupta</option>
            </select>
          </div>
          <div className="!text-center !text-black">OR</div>

          {/* Car Name & Number Row */}
          <div className="!flex !flex-col md:!flex-row !items-center !gap-4">
            <label className="!w-48 !text-sm !font-medium !text-gray-700">
              Car Name & Number
            </label>
            <select className="!flex-1 !text-black !border !border-gray-300 !rounded !px-3 !py-2">
              <option value="">Select Car</option>
              <option value="mahindra_xuv_500_ka01ab1234">
                Mahindra XUV 500 - KA01AB1234
              </option>
              <option value="tata_indica_dl05cd5678">
                Tata Indica - DL05CD5678
              </option>
              <option value="hyundai_verna_mh12ef9876">
                Hyundai Verna - MH12EF9876
              </option>
            </select>
          </div>

          {/* From Date */}
          <div className="!flex !flex-col md:!flex-row !items-center !gap-4">
            <label className="!w-48 !text-sm !font-medium !text-gray-700">
              From Date
            </label>
            <input
              type="date"
              className="!flex-1 !border !text-black !border-gray-300 !rounded !px-3 !py-2"
            />
          </div>
          <div className="!text-center !text-black">To</div>

          {/* To Date */}
          <div className="!flex !flex-col md:!flex-row !items-center !gap-4">
            <label className="!w-48 !text-sm !font-medium !text-gray-700">
              To Date
            </label>
            <input
              type="date"
              className="!flex-1 !border !text-black !border-gray-300 !rounded !px-3 !py-2"
            />
          </div>

          {/* View Details Button */}
          <div className="!flex !justify-center">
            <Link href="/admin/generate-report">
              <button className="!bg-[#D7A260] !text-white !px-5 !py-2 !rounded !transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Report;
