import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-auto"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={`${card.companies.name} logo`}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold flex flex-wrap items-center gap-1">
                  <span>{card.title}</span>
                  <span className="mx-1 text-lg">@</span>
                  <span
                    className="text-purple hover:text-purple-400 cursor-pointer transition-colors"
                    onClick={() => window.open(card.companies.url, "_blank")}
                  >
                    {card.companies.name}
                  </span>
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
                <div className="flex items-center flex-wrap gap-x-4 text-start md:text-lg font-semibold pt-4">
                  <p className="bg-primary/5 border rounded-md px-2 py-[3px] text-primary font-semibold">
                    Technologies
                  </p>
                  <div className="flex items-center">
                    {card.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center group relative"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="p-2"
                          onClick={() => window.open(tech.url, "_blank")}
                        />
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
