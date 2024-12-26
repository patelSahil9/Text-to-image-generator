import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMagic } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const HowItWorks = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const steps = stepsRef.current;

    gsap.fromTo(
      steps,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: steps[0]?.parentNode,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-50 h-[750px] flex flex-col items-center  ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">How it works</h1>
      <p className="text-lg text-gray-600 mb-10">
        Transform Words Into Stunning Images
      </p>
      <div className="space-y-6 h-[144px] w-[805px]">
        <div
          className="flex items-start bg-white hover:shadow-md rounded-lg p-6"
          ref={(el) => (stepsRef.current[0] = el)}
        >
          <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Describe Your Vision
            </h3>
            <p className="text-gray-600">
              "Type a phrase, sentence, or paragraph that describes the image
              you want to create."
            </p>
          </div>
        </div>

        <div
          className="flex items-start bg-white hover:shadow-md rounded-lg p-6"
          ref={(el) => (stepsRef.current[1] = el)}
        >
          <div className="bg-purple-100 text-purple-500 p-3 rounded-full">
            <FaMagic className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Watch the Magic
            </h3>
            <p className="text-gray-600">
              "Our AI-powered engine will transform your text into a
              high-quality, unique image in seconds."
            </p>
          </div>
        </div>

        <div
          className="flex items-start bg-white hover:shadow-md rounded-lg p-6"
          ref={(el) => (stepsRef.current[2] = el)}
        >
          <div className="bg-green-100 text-green-500 p-3 rounded-full">
            <LuDownload />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Download & Share
            </h3>
            <p className="text-gray-600">
              "Instantly download your creation or share it with the world
              directly from our platform."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
