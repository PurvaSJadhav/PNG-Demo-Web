"use client";

import {
    User, Home, UserSquare, ShieldCheck, Car, Users,
    MapPin, BarChart2, LogOut, FileText
} from "lucide-react";
import Link from "next/link";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./generate-report.css";

const generateReport = () => {
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

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Report", 14, 20);
        doc.setFontSize(12);
        doc.text("1 Jan to 1 Sept", 14, 28);

        autoTable(doc, {
            startY: 40,
            head: [["Label", "Value"]],
            body: [
                ["Driver Name", "Akshay Kumar"],
                ["Car Details", "Audi (MH 12 AB 4589)"],
                ["Total Trip (in KM)", "20000"],
                ["FASTag", "See"],
                ["PUC", "See"],
                ["Stay Allowance", "2000 (See)"],
                ["Food Allowance", "4000 (See)"],
                ["Maintenance Expenses", "15000 (See)"],
                ["Miscellaneous expenses", "3000 (See)"],
                ["Car Mileage", "10 (See)"],
            ],
        });

        doc.save("report.pdf");
    };

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="profile">
                    <div className="avatar">
                        <User size={40} />
                    </div>
                    <h2>Mrs. Sharada Dhumal</h2>
                    <p>sharada@company.com</p>
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

            {/* Report Main Content */}
            <main className="content !pl-60">
                <div className="report-container">
                    <h1 className="report-title">Report</h1>
                    <p className="report-subtitle">1 Jan 2025 To 1 Sept 2025</p>

                    <table className="report-table">
                        <tbody>
                            <tr><td className="label">Driver Name</td><td>Akshay Kumar</td></tr>
                            <tr><td className="label">Car Details</td><td>Audi (MH 12 AB 4589)</td></tr>
                            <tr><td className="label">Total Trip (in KM)</td><td>20000</td></tr>
                            <tr>
                                <td className="label">FASTag</td>
                                <td className="row-flex">
                                    <span></span>
                                    <Link href="/diagnosis"><span className="see-link">See</span></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="label">PUC</td>
                                <td className="row-flex">
                                    <span></span>
                                    <Link href="/diagnosis"><span className="see-link">See</span></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="label">Stay Allowance</td>
                                <td className="row-flex">
                                    <span>2000</span>
                                    <Link href="/diagnosis"><span className="see-link">See</span></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="label">Food Allowance</td>
                                <td className="row-flex">
                                    <span>4000</span>
                                    <Link href="/diagnosis"><span className="see-link">See</span></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="label">Maintenance Expenses</td>
                                <td className="row-flex">
                                    <span>15000</span>
                                    <Link href="/diagnosis"><span className="see-link">See</span></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="label">Miscellaneous expenses</td>
                                <td className="row-flex">
                                    <span>3000</span>
                                    <Link href="/diagnosis"><span className="see-link">See</span></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="label">Car Mileage</td>
                                <td className="row-flex">
                                    <span>10</span>
                                    <Link href="/diagnosis"><span className="see-link">See</span></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Download PDF Button */}
                    <div className="pdf-btn" onClick={downloadPDF}>
                        <FileText size={18} />
                        <button className="!bg-[#C62829] !ml-10 !text-white !mt-4 !px-5 !py-2 !rounded-lg !shadow !transition !p-2">
                            Download PDF
                        </button>
                    </div>

                    <Link href="/admin/reports">
                        <button className="!bg-[#C62829] !ml-40 !text-white !mt-4 !px-5 !py-2 !rounded-lg !shadow !transition">
                            Back to the List
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default generateReport;
