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

const Driver = ({ vehicles = [], loading = false }) => {
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

  const dummyDrivers = [
    {
      fullname: "Sachin Deshmukh",
      aadhar: "1234-5678-9012",
      email: "sachin.deshmukh@example.com",
      mobile: "9876543210",
    },
    {
      fullname: "Neha Kulkarni",
      aadhar: "2345-6789-0123",
      email: "neha.kulkarni@example.com",
      mobile: "9123456780",
    },
    {
      fullname: "Ajay More",
      aadhar: "3456-7890-1234",
      email: "ajay.more@example.com",
      mobile: "9988776655",
    },
    {
      fullname: "Priya Jadhav",
      aadhar: "4567-8901-2345",
      email: "priya.jadhav@example.com",
      mobile: "9012345678",
    },
    {
      fullname: "Ramesh Pawar",
      aadhar: "5678-9012-3456",
      email: "ramesh.pawar@example.com",
      mobile: "9876501234",
    },
    {
      fullname: "Shweta Patil",
      aadhar: "6789-0123-4567",
      email: "shweta.patil@example.com",
      mobile: "9871234567",
    },
    {
      fullname: "Vijay Shinde",
      aadhar: "7890-1234-5678",
      email: "vijay.shinde@example.com",
      mobile: "9765432109",
    },
    {
      fullname: "Anita Bhosale",
      aadhar: "8901-2345-6789",
      email: "anita.bhosale@example.com",
      mobile: "9856123478",
    },
    {
      fullname: "Dinesh Jagtap",
      aadhar: "9012-3456-7890",
      email: "dinesh.jagtap@example.com",
      mobile: "9823456781",
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
          <h2 className="!text-2xl !font-semibold !text-center">Mrs. Sharada Dhumal</h2>
          <p className="!text-sm !text-gray-300">sharada@compony.com</p>
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
      <main className="!flex-1 !p-10 !ml-64 !bg-gray-100 !min-h-screen">
        <div className="!flex !justify-between !items-center !mb-8">
          <h1 className="!text-3xl !font-bold !text-gray-800">Drivers List</h1>
          <Link href="/admin/add-driver">
            <button
              style={{ color: "#e0e7ff", backgroundColor: "#d8373fff" }}
              className="!text-white !px-5 !py-2 !rounded-lg !shadow hover:!bg-blue-700 !transition"
            >
              Add New Driver
            </button>
          </Link>
        </div>

        <div className="!overflow-x-auto">
          {/* Table Header */}
          <div className="!bg-white !rounded-lg !shadow !p-4 !mb-4">
            <div className="!flex !items-center !space-x-8 !font-semibold !text-gray-700">
              <div className="!w-10">No.</div>
              <div className="!flex-1">Full Name</div>
              <div className="!w-48">Aadhar No.</div>
              <div className="!flex-1">Email</div>
              <div className="!w-40">Mobile No.</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="!space-y-4">
            {dummyDrivers.map((driver, index) => (
              <div
                key={index}
                className="!bg-white !rounded-lg !shadow !p-4 hover:!shadow-lg !transition !cursor-pointer"
              >
                <div className="!flex !items-center !space-x-8">
                  <div className="!w-10 !text-sm !text-gray-700 !font-medium">
                    {index + 1}
                  </div>
                  <div className="!flex-1 !text-sm !text-gray-800">
                    {driver.fullname}
                  </div>
                  <div className="!w-48 !text-sm !text-gray-700">
                    {driver.aadhar}
                  </div>
                  <div className="!flex-1 !text-sm !text-blue-600 !underline">
                    {driver.email}
                  </div>
                  <div className="!w-40 !text-sm !text-gray-700">
                    {driver.mobile}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Driver;
