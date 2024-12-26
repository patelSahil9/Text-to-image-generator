import React from "react";

export default function HowItWorks2() {
  return (
    <div className="bg-gray-500 h-[750px] flex flex-col   ">
      <div className="flex flex-col items-center  ">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 ">
          Create AI Images
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          {" "}
          Turn your imagination into visuals
        </p>
      </div>
      <div className="flex flex-row ">
        <div className=" bg-white h-[393px] w-[393px] ml-[209px]">
          <img src="/howitworks.png" className="w-full h-full" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 ">
          {" "}
          Introducing the AI-Powered Text to Image Generator
        </h1>
      </div>
    </div>
  );
}
