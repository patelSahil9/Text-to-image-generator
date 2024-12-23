import React from "react";
import { SlMagicWand } from "react-icons/sl";

const Front = ({
  title = "Best text to image generator",
  subtitle = "Turn text to image, in seconds",
}) => {
  return (
    <div className="bg-blue-500 text-white h-screen w-screen flex  justify-center">
      <div className="flex flex-col items-center ">
        <p className="text-s mt-[90px]  h-[30px] flex items-center justify-center rounded-full border-2 border-black p-2">
          {title} <SlMagicWand fill="yellow" />
        </p>
        <div className='text-6xl font-bold flex flex-col items-center justify-center w-full mt-[50px] gap-5 ' style={{wordSpacing: '5px'}}>
  <div >
    Turn text to 
  </div>
  <div className='mt-2'>
    <span className='text-blue-600 '>&nbsp;image</span>
    ,in seconds
  </div>
</div>

      </div>
    </div>
  );
};

export default Front;
