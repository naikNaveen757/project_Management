import React from 'react';
import Navbar from "@/app/components/Navbar/page";
import Sidebar from "@/app/components/Sidebar/index";


const DashboardWrapper = ({ Children }:{children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
        {/* slidebar */}
        <Sidebar/>
        slidebar
            <main className={'flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64'}>
            {/* Navbar */}
            <Navbar/>
            {Children}
            </main>

    </div>

  );
};

export default DashboardWrapper;