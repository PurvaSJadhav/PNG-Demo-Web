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

const Request = ({ vehicles = [], loading = false }) => {
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
            <div className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md !bg-blue-100 !text-[#a33036ff]">
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
        {/* Status Boxes */}
        <div className="!grid !grid-cols-3 !gap-6 !mb-10">
          <div className="!bg-yellow-400 !text-white !rounded-lg !shadow !p-6 !flex !flex-col !items-center !justify-center">
            <h2 className="!text-xl !font-semibold">Pending Requests</h2>
            <p className="!text-3xl !font-bold">5</p>
          </div>
          <div className="!bg-green-500 !text-white !rounded-lg !shadow !p-6 !flex !flex-col !items-center !justify-center">
            <h2 className="!text-xl !font-semibold">Approved Requests</h2>
            <p className="!text-3xl !font-bold">42</p>
          </div>
          <div className="!bg-red-500 !text-white !rounded-lg !shadow !p-6 !flex !flex-col !items-center !justify-center">
            <h2 className="!text-xl !font-semibold">Rejected Requests</h2>
            <p className="!text-3xl !font-bold">7</p>
          </div>
        </div>

        {/* Pending Request Cards */}
        <div className="!space-y-6">
          {[
            {
              fullname: "Akshay Kumar",
              routingRequest: "Pickup goods from Delhi Warehouse",
              route: "Delhi → Jaipur",
            },
            {
              fullname: "Meena Reddy",
              routingRequest: "Transport passengers to Chennai Station",
              route: "Chennai → Bangalore",
            },
            {
              fullname: "Suresh Chatterjee",
              routingRequest: "Delivery of office equipment",
              route: "Kolkata → Siliguri",
            },
            {
              fullname: "Chandra Shekhar",
              routingRequest: "Delivery of Machinery parts",
              route: "Kolkata → Pune",
            },
          ].map((request, index) => (
            <div
              key={index}
              className="!bg-white !rounded-lg !shadow !p-6 !flex !flex-col md:!flex-row !justify-between !items-start md:!items-center !space-y-4 md:!space-y-0"
            >
              <div>
                <h3 className="!text-lg !font-semibold !text-gray-800">
                  Name: {request.fullname}
                </h3>
                <p className="!text-gray-600">
                  Routing Request: {request.routingRequest}
                </p>
                <p className="!text-gray-600">Route: {request.route}</p>
              </div>
              <div className="!flex !space-x-4">
                <button className="!bg-green-500 !text-white !px-4 !py-2 !rounded hover:!bg-green-600 !transition">
                  Approve
                </button>
                <button className="!bg-red-500 !text-white !px-4 !py-2 !rounded hover:!bg-red-600 !transition">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Request;
