import React from "react";
// import Sidebar from "../dashboard/Sidebar";
// import Navbar from "../dashboard/Navbar";
// import Footer from "../dashboard/Footer";
// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router";
import Navbar from "@/pages/Dashboard/Admin/Navbar";
import Sidebar from "@/pages/Dashboard/Admin/Sidebar";
import Footer from "@/pages/Dashboard/Admin/Footer";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
            <Outlet/> 
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
