import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior customer service representative "
            subTitle="Falcon Courier Company (Pvt) Ltd  - (2017 - 2019)"
            result="Pakistan (Pk)"
            des="
            Resolving complex inquiries, handling escalated issues, promoting customer loyalty, and improving processes are crucial in customer service. These tasks require adept problem-solving and a commitment to excellence."
          />
          <ResumeCard
            title="Branch supervisor"
            subTitle="DTD WORLDWIDE EXPRESS PVT LTD  - (2019 - 2023)"
            result="Pakistan (Pk)"
            des="Team management, customer service, financial management, and relationship management are vital for organizational success. Effective leadership fosters collaboration, forming a strong foundation for achieving business objectives."
          />
          <ResumeCard
            title="Remote Full Stack Web Developer"
            subTitle=" HIRA DENTAL LABORATORY (PVT) LTD  - (2023 - Current)"
            result="United Kingdom (Gb)"
            des="Website development involves various key aspects to ensure a robust and efficient platform. Server-side development forms the backbone, handling data processing and user requests."
          />
        </div>
      </div>
      
        
    </motion.div>
  );
};

export default Experience;
