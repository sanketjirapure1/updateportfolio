import React from "react";
import { motion } from "framer-motion";
import ResumeCard1 from "./ResumeCard1";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-8 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard1
            title="Software Developer (Reactjs Developer)"
            subTitle="Embel Technologies PVT Ltd,Pune - (Dec-2021 - Present)"
            result="Pune"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard1
            title="Software Developer"
            subTitle="Whiz It Services LLP,Pune - (June-2021 - Dec-2021)"
            result="Pune"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
