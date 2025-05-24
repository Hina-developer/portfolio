import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Database Expert.", "React Developer.", "Django Developer.", "Linux Expert."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Discover the captivating universe that belongs to me.</h4>
        <h3 className="text-5xl font-bold text-white">
          Hi, I'm <span style={{ color: "#ffd700 " }}>Hina Shahbaz</span>
        </h3>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ffd700 "
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a passionate full-stack web developer with expertise in HTML, CSS, JavaScript, and React.js for frontend development, along with Python and Django for backend development. I excel in working with SQL, SQLite3, MySQL, and MongoDB databases. Additionally, I am a Linux expert, proficient in managing and deploying applications using Apache2 for robust and secure server environments. My focus is on crafting efficient and scalable web applications that boast sleek design and seamless user experience. My portfolio showcases a range of projects aimed at solving real-world problems, and I'm always ready to take on new challenges.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner