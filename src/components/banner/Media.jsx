import React from 'react'
import { FaHtml5, FaReact, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiSqlite, SiMysql, SiMongodb, SiApache } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
            <span className="bannerIcon" style={{ fontSize: '30px' }}>
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <FaLinux />
            </span>
            <span className="bannerIcon">
              <SiApache />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media