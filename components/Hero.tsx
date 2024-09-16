import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Cover } from "./ui/cover";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["Fullstack", "Curious", "Innovative", "Passionate"];
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* change bg color to bg-black-100 and reduce grid color from */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative sm:mt-10 mt-20 z-10 text-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-center text-blue-100 max-w-80">
            Dynamic Magical portfolio
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-10 sm:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <div className="sm:mb-3 mb-0">
              Build amazing websites <br />
            </div>
            with me at <Cover>warp speed</Cover>
          </h1>
          {/* change md:text-6xl, add more responsive code */}
          {/* <TextGenerateEffect
            words="Did You look for Best User Experience Developer"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /> */}
          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Sujal, A Next.js Developer From India.
          </p> */}
          <div className="h-20 mb-2 sm:mb-0 flex justify-center items-center px-4">
            <div className="text-2xl sm:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              Hi! I&apos;m Sujal, A
              <FlipWords words={words} />
              {"Developer From India"}
            </div>
          </div>
          <a href="#projects" title="MagicButton">
            <MagicButton
              handleClick={() => {}}
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
