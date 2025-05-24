import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projecttwo,
  projectThree,
  ProjectFour,
  projectFive,
  projectSix,
  projectSeven,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Hira Dental Lab"
          des=" Developed hiradentallab.com using HTML, CSS, JavaScript, and Bootstrap for frontend
          design. Employed Django Python for backend functionality and utilized SQLite 3 for secure database
          management. Revolutionized dental solutions with innovative technology and precision craftsmanship. 
         https://hiradentallab.com"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="  Developed a dynamic dental e-commerce platform using React.js and Django Python, with MySQL for database management. Key features: responsive design, intuitive UI, secure authentication, comprehensive product catalog, efficient search, seamless checkout, order management, dynamic admin panel, and scalable architecture. Demonstrates proficiency in React.js, Django, and MySQL, delivering tailored solutions.
          https://hira-tech.co.uk/"
          src={projecttwo}
        />
        <ProjectsCard
          title="Denture Repairs"
          des="Frontend design for denturerepairscoventry.co.uk was created with HTML, CSS,
          JavaScript, and Bootstrap. used SQLite 3 for safe database administration and Django Python for backend
          functionality. dentistry solutions that have been transformed by cutting-edge technology and expert
          craftsmanship. 
     https://denturerepairscoventry.co.uk"
          src={projectThree}
        />
        <ProjectsCard
          title=" Cubes Smashed: An Interactive Web Game Project"
          des="Welcome to Cubes Smashed, an engaging web game where players unleash their skills in cube destruction! Developed using HTML, CSS, and JavaScript, this dynamic game offers thrilling gameplay with a time-bound challenge.
Players are challenged to destroy cubes within a time limit, enjoying seamless gameplay with responsive controls and dynamic visuals. Choose from adjustable difficulty levels to tailor the challenge to your skills. The game features a responsive design, ensuring an optimal experience across all devices. Compete for high scores with friends via the integrated leaderboard.

Explore Cubes Smashed now and test your cube destruction skills!

Check out the game here: https://hina-developer.github.io/My-Game.github.io/"
          src={ProjectFour}
        />
        <ProjectsCard
          title="E-commerce Admin Panel"
          des="I developed a robust e-commerce admin panel using React to streamline online store management.Its intuitive interface and comprehensive features enable administrators to handle orders, invoices, customers, products, and staff effectively. This project showcases my ability to integrate complex backend functionality with a modern and responsive frontend, delivering a high-quality solution for e-commerce management.

Customer management capabilities enable administrators to handle customer profiles, view order histories, and implement support features. The product management section allows for adding, updating, and deleting products, managing categories and stock, and handling product images and descriptions.
https://pk.admin.hira-tech.co.uk/"
          src={projectFive}
        />
        
                <ProjectsCard
          title="Linux Server Management"
          des="My expertise lies in Linux server management, with a focus on Apache2 web server configuration and administration. This includes setting up virtual hosts, managing SSL certificates, and optimizing server performance to ensure secure and efficient web hosting. The project highlights my ability to manage server-side tasks, delivering reliable and high-performance web applications. I have successfully hosted and managed over 8 websites built with HTML and 6 websites developed using React on Apache2 servers. Additionally, I have deployed and maintained 2 CAD/CAM software solutions, demonstrating my capability to operate in complex technical environments with precision and efficiency."
          src={projectSix}
        />
                        <ProjectsCard
          title="Customer Service Bot"
          des="I am currently working on the Hira Tech Customer Service Bot project, developing an AI-powered chatbot to enhance customer support by delivering efficient and accurate responses to inquiries. Utilizing Python and NLP frameworks like SpaCy, NLTK, and Transformers, I am training the bot to recognize intents, extract entities, and generate context-aware responses, with dialogue management handled via Rasa or custom systems. My responsibilities include data preparation, model training, dialogue flow design, and performance optimization. The bot, now in the training phase, aims to improve customer satisfaction, reduce response times, and scale support operations, with future plans for multilingual support and multi-channel deployment."
          src={projectSeven}
        />
      </div>
    </section>
  );
};

export default Projects;
