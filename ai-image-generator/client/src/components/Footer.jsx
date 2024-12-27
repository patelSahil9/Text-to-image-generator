import React from "react";
import { CiFacebook,CiInstagram,CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="h-[45px] w-full flex flex-row static bottom-0">
      <div className="flex justify-center items-center w-[144px] h-full">
        <img src="/LOGO.png" className="w-[140px] h-full" />
      </div>
      <div className="flex justify-center items-center ml-[50px] h-full">|</div>
      <div className="flex justify-center items-center ml-[50px] h-full">
        All right reserved. Copyright @imagify
      </div>
      <div className="flex justify-center items-center h-full gap-3 ml-[860px]">
        <CiFacebook className="h-[30px] w-[30px]  rounded-full  hover:cursor-pointer hover:scale-110 transition-all duration-300"/>
        <CiInstagram className="h-[30px] w-[30px]  rounded-full  hover:cursor-pointer hover:scale-110 transition-all duration-300"/>
        <CiTwitter className="h-[30px] w-[30px]  rounded-full  hover:cursor-pointer hover:scale-110  transition-all duration-300"/>
      </div>
    </div>
  );
}
