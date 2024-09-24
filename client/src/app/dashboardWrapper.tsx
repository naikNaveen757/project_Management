"use client";

import React, { Children, useEffect } from "react";
import Navbar from "@/app/components/Navbar/page";
import Sidebar from "@/app/components/Sidebar/index";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ Children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* slidebar */}
      <Sidebar />
      slidebar
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64m"}`}
      >
        {/* Navbar */}
        <Navbar />
        {Children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children} </DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
