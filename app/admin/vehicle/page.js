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

const Vehicle = ({ vehicles = [], loading = false }) => {
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

  const dummyVehicles = [
    {
      companyModel: "Maruti Suzuki Swift",
      regNumber: "MH12AB1234",
      fastagDate: "2025-08-10",
      maintenanceDate: "2025-07-15",
      pucDate: "2025-09-01",
    },
    {
      companyModel: "Hyundai Creta",
      regNumber: "MH14XY5678",
      fastagDate: "2025-08-20",
      maintenanceDate: "2025-06-28",
      pucDate: "2025-08-25",
    },
    {
      companyModel: "Honda City",
      regNumber: "MH31CD9101",
      fastagDate: "2025-07-30",
      maintenanceDate: "2025-07-10",
      pucDate: "2025-09-05",
    },
    {
      companyModel: "Tata Nexon",
      regNumber: "MH15EF3456",
      fastagDate: "2025-08-12",
      maintenanceDate: "2025-07-22",
      pucDate: "2025-08-30",
    },
    {
      companyModel: "Toyota Innova Crysta",
      regNumber: "MH02GH7890",
      fastagDate: "2025-08-05",
      maintenanceDate: "2025-07-18",
      pucDate: "2025-09-02",
    },
    {
      companyModel: "Kia Seltos",
      regNumber: "MH20IJ1122",
      fastagDate: "2025-08-25",
      maintenanceDate: "2025-07-12",
      pucDate: "2025-08-29",
    },
    {
      companyModel: "Mahindra XUV700",
      regNumber: "MH27KL3344",
      fastagDate: "2025-08-08",
      maintenanceDate: "2025-07-20",
      pucDate: "2025-09-07",
    },
  ];

  return (
    <div className="!flex !min-h-screen !font-sans !bg-[#F7F2E9]">
      {/* Sidebar */}
      <aside className="!w-64 !bg-[#c52c2d] !text-white !min-h-screen !p-5 !flex !flex-col !items-center !shadow-md !fixed">
        <div className="!flex !flex-col !items-center !mb-12 !mt-10">
          <div className="!w-24 !h-24 !bg-white !rounded-full !flex !items-center !justify-center !text-[#0b2c4d] !font-bold !text-xl !mb-4">
            <User size={40} />
          </div>
          <h2 className="!text-2xl !font-semibold !text-center">
            Mrs. Sharada Dhumal
          </h2>
          <p className="!text-sm !text-gray-300">sharada@compony.com</p>
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
      <main className="!flex-1 !p-10 !ml-64 !bg-gray-100 !min-h-screen">
        <div className="!flex !justify-between !items-center !mb-8">
          <h1 className="!text-3xl !font-bold !text-gray-800">Vehicle List</h1>
          <Link href="/admin/add-vehicle">
            <button
              style={{ color: "#e0e7ff", backgroundColor: "#d8373fff" }}
              className="!text-white !px-5 !py-2 !rounded-lg !shadow hover:!bg-blue-700 !transition"
            >
              Add New Vehicle
            </button>
          </Link>
        </div>

        <div className="!overflow-x-auto">
          {/* Table Header */}
          <div className="!bg-white !rounded-lg !shadow !p-4 !mb-4">
            <div className="!flex !items-center !text-gray-700 !font-semibold">
              <div className="!w-10">No.</div>
              <div className="!flex-1">Company & Model</div>
              <div className="!w-48">Registration Number</div>
              <div className="!w-40">Last FASTag Date</div>
              <div className="!w-48">Last Maintenance Date</div>
              <div className="!w-32">PUC Date</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="!space-y-4">
            {dummyVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="!bg-white !rounded-lg !shadow !p-4 hover:!shadow-lg !transition !cursor-pointer"
              >
                <div className="!flex !items-center !text-sm !text-gray-700">
                  <div className="!w-10 !font-medium">{index + 1}</div>
                  <div className="!flex-1 !text-gray-800">
                    {vehicle.companyModel}
                  </div>
                  <div className="!w-48">{vehicle.regNumber}</div>
                  <div className="!w-40">{vehicle.fastagDate}</div>
                  <div className="!w-48">{vehicle.maintenanceDate}</div>
                  <div className="!w-32">{vehicle.pucDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vehicle;
