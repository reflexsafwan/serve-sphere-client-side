import React from "react";
import Carousel from "./carousel/Carousel";
import { Link } from "react-router";
import { motion, spring } from "motion/react";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <motion.h1
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    delay: 0.2,
                 
                  }}
                  className="text-3xl font-semibold dark:text-gray-600 text-red-400 lg:text-4xl"
                >
                  Your <span className="text-[#FF637D]">Time</span> Can Be
                  <br />
                  Someone’s
                  <span className="text-[#FF637D]"> Lifeline</span>
                </motion.h1>

                <p className="mt-3">
                  We’re seeking passionate volunteers to support meaningful
                  causes. Be the reason someone smiles. Help us make a real
                  difference
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#EB5971] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Became a Volunteer
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              {/* <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue Illustration"
              /> */}

              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
