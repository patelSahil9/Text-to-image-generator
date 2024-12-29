import React from "react";

export default function Generate() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center">
      <div className="flex flex-col items-center">
        <div className="h-[356px] w-[356px] bg-pink-500 mt-[50px] left-0">
          {/* generated image */}
        </div>

        <div className="flex items-center bg-gray-700 p-1 rounded-full h-[54px] w-[653px] mt-10">
      <input
        type="text"
        placeholder="Describe what you want to generate"
        className="flex-1 bg-gray-700 text-white rounded-full placeholder-gray-400 focus:outline-none px-4"
      />
      <button className= "h-[48px] w-[195px]  bg-gray-900 border-none text-white rounded-full hover:bg-black transition">
        Generate
      </button>
    </div>
      </div>
    </div>
  );
}
