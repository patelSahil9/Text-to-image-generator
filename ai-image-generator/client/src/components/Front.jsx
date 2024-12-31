import React, { useRef, useEffect } from "react";
import { SlMagicWand } from "react-icons/sl";
import { FaMagic } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HowItWorks from "./HowItWorks";
import { Link } from "react-router";

const Front = ({
  title = "Best text to image generator",
  subtitle = "Turn text to image, in seconds",
}) => {
  const textRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const text = textRef.current;
// const ig=igRef.current
    // Initial text animation
    const tl = gsap.timeline();
    tl.to(text.children[0], {
      duration: 1.5,
      y: -10,
      ease: "elastic",
      stagger: 0.2,
    })
      .to(text.children[1].children[0], {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
      })
      .to(text.children[1].children[1], {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
      });
  }, []);

  return (
    <>
      <div className="text-black h-[100%] w-full flex justify-center">
        <div className="w-full h-full flex flex-col items-center">
          <p className="text-s mt-[5%] h-[2%] flex items-center justify-center rounded-full border-2 border-gray-400 p-2">
            {title} <SlMagicWand fill="yellow" />
          </p>
          <div
            className="l font-bold flex flex-col items-center justify-center w-full mt-[50px] gap-5"
            style={{ wordSpacing: "5px" }}
            ref={textRef}
          >
            <div className="text-6xl">Turn text to</div>
            <div className="mt-2 text-6xl w-full text-center flex items-center justify-center">
              <div className="opacity-0 text-blue-700">&nbsp;image</div>
              <div className="opacity-0">, in seconds</div>
            </div>
          </div>
          <Link to="/generate" type="button" className="mt-6 px-6 py-3 bg-black text-white text-l rounded-full hover:scale-105 transition ease-in-out active:scale-95 duration-300">
            Generate Images
          </Link>
        <div className="w-[542px] h-[78px] mt-[100px] flex items-center justify-center gap-4" > 
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[76px] h-full rounded-md " />
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[76px] h-full rounded-md " />
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[76px] h-full rounded-md " />
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[76px] h-full rounded-md " />
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[76px] h-full rounded-md " />
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[76px] h-full rounded-md " />
        </div>
        <p>Images Generated from Imagify</p>
        </div>
      </div>
      
    </>
  );
};

export default Front;

