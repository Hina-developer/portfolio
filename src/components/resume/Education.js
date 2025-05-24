import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's in software Engineering"
            subTitle="Lahore Garrison University (2020 - 2023)"
            result="Pakistan (Pk)"
            des="I pursued a degree in Software Engineering from Lahore Garrison University between 2020-2023. This comprehensive program equipped me with in-depth knowledge of software development, programming languages, and computer science principles."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Punjab Group Of colleges (2018 - 2020)"
            result="Pakistan (Pk)"
            des="I completed my FSc Pre-Engineering from Punjab Group of Colleges between 2018-2020. This program provided a strong foundation in science and engineering, covering calculus, physics, chemistry, and engineering principles. It enhanced my technical skills, analytical thinking, and problem-solving abilities."
          />
          <ResumeCard
            title="Primary Education"
            subTitle="Khursheed Model High School (2016 - 2018)"
            result="Pakistan (Pk)"
            des="I completed my Matriculation Degree from Khursheed Model High School  between 2016-2018. This program provided a strong foundation in science, covering calculus, physics, chemistry,Computer Science. "
          />
        </div>
      </div>
   

    
    </motion.div>
  );
}

export default Education
