import React from "react";

export default function HowItWorks2() {
  return (
    <div className="bg-gray-50 h-[750px] flex flex-col   ">
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
        <div className="  h-[393px] w-[393px] rounded-3xl ml-[209px]">
          <img
            src="https://images.unsplash.com/photo-1616019459068-4cc6dca4d3a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className=" font-semibold ml-[100px] h-[412px] w-[596px] ">
          <h1 className="text-4xl font-bold text-gray-800 mb-4  ">
            {" "}
            Introducing the AI-Powered Text to Image Generator
          </h1>
          <p>
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p>
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don’t yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
}
