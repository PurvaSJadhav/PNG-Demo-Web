"use client";

import {
  User,
  Home,
  UserSquare,
  UserCheck,
  ShieldCheck,
  Car,
  Users,
  MapPin,
  BarChart2,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import "./Dashboard.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";

const Dashboard = () => {
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

  const chartData = [
    { name: "Driver On Ride", value: 200, color: "#f97316" },
    { name: "Available Driver", value: 280, color: "#22c55e" },
    { name: "Today's Security", value: 520, color: "#3b82f6" },
  ];

  return (
    <div className="dashboard">
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
            <div 
            style={{ backgroundColor: "#e0e7ff", color: "#a33036ff" }}
            className="!flex !items-center !gap-3 !px-3 !py-2 !rounded-md hover:!bg-[#D7A260] !transition-colors">
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
      <main className="content">
        <h1 className="heading !ml-60 pt-3">Admin Dashboard</h1>

        {/* Top Cards */}
        <div className="cardRow !ml-62">
          <div className="statCard statPrimary">
            <div className="flex">
              <h2>40</h2>
              <div className="ml-36 text-black text-large pt-3">
                <Users size={30} />
              </div>
            </div>
            <div className="statHeader">
              <h4 className="text-2xl">Total Drivers</h4>
            </div>
          </div>

          <div className="statCard">
            <div className="flex">
              <h2>26</h2>
              <div className="ml-36 text-black text-large pt-3">
                <UserSquare size={30} color="orange" />
              </div>
            </div>
            <div className="statHeader">
              <p className="text-2xl">Drivers on Ride</p>
            </div>
          </div>

          <div className="statCard">
            <div className="statHeader">
              <h2>14</h2>
              <UserCheck size={30} color="orange" />
            </div>
            <p className="text-2xl text-black">Available Driver</p>
          </div>

          <div className="statCard">
            <div className="statHeader">
              <h2>10</h2>
              <ShieldCheck size={30} color="orange" />
            </div>
            <p className="text-2xl text-black">Security Count</p>
          </div>
        </div>

        {/* Driver Info + Progress */}
        <div className="mainRow !ml-62">
          {/* Left Section */}
          <div className="infoSection">
            <h2 className="sectionTitle1">Current Activity</h2>
            <div className="infoBox">
              <div className="row topRow">
                <p>
                  <b>Name:</b> Akshay Kumar
                </p>
                <p>
                  <b>Route:</b> Pune to Mumbai
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Passenger:</b> Dhanshree Gandas
                </p>
                <p>
                  <b>Car:</b> BMW
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Car Registration No.:</b> MH12AB1234
                </p>
                <div className="text-sm mr-4 pt-1">
                  <Link href="/admin/track" className="trackBtn">
                    Track
                  </Link>
                </div>
              </div>
            </div>
            <div className="infoBox">
              <div className="row topRow">
                <p>
                  <b>Name:</b> Dilip Jadhav
                </p>
                <p>
                  <b>Route:</b> Delhi to Mumbai
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Passenger:</b> Purva Jadhav
                </p>
                <p>
                  <b>Car:</b> Audi
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Car Registration No.:</b> MH02AC2548
                </p>
                <div className="text-sm mr-4 pt-1">
                  <Link href="/admin/track" className="trackBtn">
                    Track
                  </Link>
                </div>
              </div>
            </div>
            <div className="infoBox">
              <div className="row topRow">
                <p>
                  <b>Name:</b> Premraj Joshi
                </p>
                <p>
                  <b>Route:</b> Bengaluru to Pune
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Passenger:</b> Sharmila Suryavanshi
                </p>
                <p className="carclass">
                  <b>Car:</b> Tata Nexon
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Car Registration No.:</b> MH16BH3199
                </p>
                <div className="text-sm mr-4 pt-1">
                  <Link href="/admin/track" className="trackBtn">
                    Track
                  </Link>
                </div>
              </div>
            </div>

            <div className="infoBox">
              <div className="row topRow">
                <p>
                  <b>Name:</b> Sachin Deshmukh
                </p>
                <p>
                  <b>Route:</b> Kerala to Pune
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Passenger:</b> Madan Piske
                </p>
                <p className="carclass">
                  <b>Car:</b> Tata Safari
                </p>
              </div>
              <div className="row bottomRow">
                <p>
                  <b>Car Registration No.:</b> MH02KY7856
                </p>
                <div className="text-sm mr-4 pt-1">
                  <Link href="/admin/track" className="trackBtn">
                    Track
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="analyticsWrapper">
            <h2 className="sectionTitle">Analytics</h2>

            <div className="progressBoxNew flex flex-row items-center justify-between">
              {/* Donut Pie Chart */}
              <ResponsiveContainer width="50%" height={250}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={106}
                    dataKey="value"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Legend - single line sentences */}
              <div className="chartLegendRow">
                {chartData.map((item, idx) => (
                  <div key={idx}>
                    <span
                      className="dot"
                      style={{ background: item.color }}
                    ></span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Empty Card below Analytics */}
            <div className="!flex flex-row">
              <div className="!w-70 relative bg-white shadow-md rounded-xl !p-6 !ml-4 !mt-5 h-[120px]">
                {/* Badge top-right */}
                <div className="absolute top-3 right-3 bg-green-500 text-white text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  5
                </div>

                {/* Card text */}
                <div className="!pt-6 text-black !text-2xl font-semibold text-center">
                  Pending Requests
                </div>
              </div>

              <div className="!w-68 relative bg-white shadow-md rounded-xl p-6 !ml-4 !mt-5 h-[120px]  ">
                <div className="!pt-5 text-black !text-2xl font-semibold text-center">
                  <Link href="/admin/request">                  
                  View All Requests</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
