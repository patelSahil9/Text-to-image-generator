import React from "react";

export default function Pricing() {
  return (
    <div className="w-screen h-screen  flex flex-col items-center">
      <p className="text-s  h-[30px] w-[140px] flex items-center justify-center rounded-full border-2 border-gray-400 p-2">
        Our Plans
      </p>
      <h1 className="text-5xl font-bold mt-3 flex">Choose the plan</h1>
        {/* cards */}
      <div className="flex flex-row gap-5 mt-10">
        <div className="w-[333px] h-[394px] bg-gray-50 rounded-2xl flex flex-col  shadow-md border-r-gray-400 border-b-gray-300 hover:shadow-2xl p-6">
          <div className="flex flex-col ml-8 ">
          <div className="w-12 h-12  rounded-full overflow-hidden">
              <img src="/logo1.png" alt="Icon" className="w-full h-full" />
            </div>
            <h1 className="text-2xl font-bold mt-6">Basic</h1>
            <p className="text-gray-600 mt-2">Best for personal use.</p>
          </div>
          <div className="flex flex-row items-center ml-8 gap-3">
            <h1 className="text-3xl font-bold mb-5 ">$10</h1>
            <p className="text-gray-600 text-sm">/ 100 credits</p>
          </div>
          <div className="flex flex-col items-center mt-7">
            <button className="bg-gray-500 text-white w-[220px] h-[46px] rounded-md border-none hover:bg-gray-700 mt-4">
              Get started
            </button>
          </div>
        </div>
        <div className="w-[333px] h-[394px] bg-gray-50 rounded-2xl flex flex-col  shadow-md border-r-gray-400 border-b-gray-300 hover:shadow-2xl p-6">
          <div className="flex flex-col ml-8 ">
          <div className="w-12 h-12  rounded-full overflow-hidden">
              <img src="/logo1.png" alt="Icon" className="w-full h-full" />
            </div>
            <h1 className="text-2xl font-bold mt-6">Advanced</h1>
            <p className="text-gray-600 mt-2">Best for Business use.</p>
          </div>
          <div className="flex flex-row items-center ml-8 gap-3">
            <h1 className="text-3xl font-bold mb-5 ">$50</h1>
            <p className="text-gray-600 text-sm">/ 500 credits</p>
          </div>
          <div className="flex flex-col items-center mt-7">
          <button className="bg-gray-500 text-white w-[220px] h-[46px] rounded-md border-none hover:bg-gray-700 mt-4">
              Get started
            </button>
          </div>
        </div>
        <div className="w-[333px] h-[394px] bg-gray-50 rounded-2xl flex flex-col  shadow-md border-r-gray-400 border-b-gray-300 hover:shadow-2xl p-6">
          <div className="flex flex-col ml-8 ">
            <div className="w-12 h-12  rounded-full overflow-hidden">
              <img src="/logo1.png" alt="Icon" className="w-full h-full" />
            </div>
            <h1 className="text-2xl font-bold mt-6">Business</h1>
            <p className="text-gray-600 mt-2">Best for enterprise use.</p>
          </div>
          <div className="flex flex-row items-center ml-8 gap-3">
            <h1 className="text-3xl font-bold mb-5 ">$250</h1>
            <p className="text-gray-600 text-sm">/ 5000 credits</p>
          </div>
          <div className="flex flex-col items-center mt-7">
          <button className="bg-gray-500 text-white w-[220px] h-[46px] rounded-md border-none hover:bg-gray-700 mt-4">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
