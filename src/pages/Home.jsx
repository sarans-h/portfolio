import React, { useState, useEffect, useRef } from 'react';
import PieChart from '../components/PieChart';
import { FaLinkedin, FaGithub, FaInstagram,FaNode, FaReact, FaDatabase, FaJava, FaHtml5, FaUikit, FaCss3, FaJs } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa6';
import rankers from '../assets/rankers.png'
import todo from '../assets/todo.png'
import comingsoon from '../assets/comingsoon.png'
import chess from '../assets/chess.png'
import blog from '../assets/blog.png'

import buyit from '../assets/buyit.png'
import CodeforcesGraph from '../components/CodeforcesGraph';
const Home = ({ homeRef, skillsRef, projectsRef, contactRef }) => {
  const [selectedProject, setSelectedProject] = useState(1); // Default to the first project
  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Rankers',
      description: 'A ranking web app.',
      details: `
       As a developer and competitive programming enthusiast, I've always wanted a tool to help visualize coding progress across different platforms. Rankers does just that by allowing users to compare their LeetCode and Codeforces contest ratings graphically.

      `,
      image:`${rankers}`,
      liveLink: 'https://rankers.onrender.com/',
      repoLink: 'https://github.com/sarans-h/rankers.git',
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'A scalable e-commerce app with payment integration.',
        details: `
          Built with React, Node.js, Express, and MongoDB, this e-commerce platform supports real-time product updates, payment gateway integration with Stripe, and user authentication. It is optimized for mobile and desktop with a smooth user experience.
        `,
        image: `${buyit}`,
        liveLink: 'https://buyit-9w3e.onrender.com/',
        repoLink: 'https://github.com/sarans-h/MarketPlace.git',
      },
      {
        id: 3,
        title: 'To Do App',
        description: 'A simple todo web app.',
        details: `
          Built with HTML, CSS, and JavaScript, this To-Do application provides a straightforward interface for managing tasks. Users can easily add new tasks, mark them as complete, and delete them as needed. The app features a clean, user-friendly design, ensuring an intuitive and efficient experience for task management on both desktop and mobile devices.
        `,
        image: `${todo}`,
        liveLink: 'https://todo-bysaransh.netlify.app',
        repoLink: 'https://github.com/sarans-h/ToDo',
      },
      {
        id: 4,
        title: 'Blog App',
        description: 'A blog writing app.',
        details: `
          Used html, css for the frontend and a REST API for the backend, this blog application allows users to create, read, update, and delete blog posts seamlessly. The app supports user to access to posts. It is designed to be responsive and user-friendly, ensuring a smooth and engaging experience on both mobile and desktop devices.
        `,
        image: `${blog}`,
        liveLink: 'https://blog-eld4.onrender.com/',
        repoLink: 'https://github.com/sarans-h/blog.git',
      },
      {
        id: 5,
        title: 'Chess',
        description: 'A real-time 2 player chess game ',
        details: `
        Built with React for the frontend and a REST API for the backend, this web-based chess application allows two players to compete in real-time games against each other. It features user to manage and support interactive gameplay with real-time updates and move tracking. The application is optimized for both mobile and desktop platforms, ensuring a smooth and responsive experience for players of all levels.
        `,
        image: `${chess}`,
        liveLink: 'https://chess-qmxo.onrender.com/',
        repoLink: 'https://github.com/sarans-h/chess.git',
      },{
        id: 6,
        title:"Coming Soon",
        description: "A coming soon project",
        details: ``,
        image: `${comingsoon}`,
        liveLink: 'https://blog-eld4.onrender.com/',
        repoLink: 'https://github.com/sarans-h/blog.git',
      }
     
    // Add more projects here as needed (up to 10)
  ];

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const selectedProjectData = projects.find(
    (project) => project.id === selectedProject
  );

  // Automatic Scrolling Logic
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 2, // Adjust the scroll speed
          behavior: 'smooth',
        });

        // Check if the scroll has reached the end, then reset
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 50); // Set interval speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      {/* Home Section */}
      <section
        ref={homeRef}
        id="home"
        className="h-[100VH] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 flex flex-col justify-center items-center text-center relative overflow-hidden -4 "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-stars bg-cover bg-center opacity-30"></div>
        <h2 className="text-white text-7xl font-extrabold mb-4 animate-fadeInUp">
          Hey, I'm Saransh Gupta
        </h2>
        <p className="text-white text-2xl max-w-xl mx-auto animate-slideIn">
        A passionate full-stack developer focused on building dynamic, responsive, and user-centric web applications, blending beautiful design with robust functionality for seamless web experiences. </p>
        <button className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-100 transition-all duration-300 animate-bounce">
          Let’s Dive In
        </button>
      </section>

      {/* Skills Section */}
      <section
  ref={skillsRef}
  id="skills"
  className="h-[auto] bg-gray-100 text-gray-800 flex flex-col justify-center items-center text-center p-10 relative py-11 pt-[4.75rem]"
>
  <h2 className="text-4xl font-bold mb-6 text-black">Why Should You <span className="text-blue-500">Hire Me?</span></h2>
  <p className="text-lg mb-10 leading-relaxed max-w-3xl">
  I am a dynamic, quick-thinking full-stack developer skilled in taking projects from initial information architecture to full deployment. Proficient in modern front-end frameworks like React and Next.js, and back-end technologies such as Node.js and Express. With expertise in MongoDB, RESTful APIs, and seamless integration of UI libraries like NextUI, I build responsive applications with a focus on user experience and performance.
  </p>
  <div className="flex justify-center items-center ">
  <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
      <div className="flex flex-wrap justify-around gap-11">
        {[
          { name: 'NodeJS', icon: <FaNode size={62}/> },
          { name: 'ReactJS', icon: <FaReact size={62}/> },
          { name: 'MongoDB', icon: <FaDatabase size={62}/> },
          { name: 'Java', icon: <FaJava size={62}/> },
          { name: 'HTML', icon: <FaHtml5 size={62}/> },
          { name: 'CSS', icon: <FaCss3 size={62}/> },
          { name: 'JavaScript', icon: <FaJs size={62}/> },
          { name: 'Github', icon: <FaGithub size={62}/> },

        ].map((software) => (
          <div key={software.name} className="flex flex-col  items-center space-y-7 space-x-10 ">
            <span className="text-3xl">{software.icon}
            <span className="text-lg text-gray-700">{software.name}</span>
            </span>
          </div>
        ))}
      </div>
      {/* Add your paragraph here */}
      <p className="text-gray-700 mt-6">
        I have experience working with a variety of technologies, including backend development with NodeJS, frontend development using ReactJS, and database management with MongoDB. I am proficient in Java for object-oriented programming and use HTML, CSS, and JavaScript for building responsive and interactive web applications. Additionally, I utilize GitHub for version control, enabling seamless collaboration and project management.
      </p>
    </div>
  </div>
</div>
<div className="flex justify-center items-center mt-11">
  <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Coding Skills</h3>
      <div className="flex flex-wrap justify-around gap-11">
      <CodeforcesGraph platform="codeforces" username="saransh_31" />
<CodeforcesGraph platform="leetcode" username="saransh_31" />
        
      </div>
      {/* Add your paragraph here */}
      <p className="text-gray-700 m-6 p-9">
      With a solid foundation in competitive programming, I have actively participated in contests on both Codeforces and LeetCode, demonstrating a commitment to continuous improvement and skill development. On Codeforces, I have engaged in multiple contests, showing a consistent upward trend in ratings.
      500+ questions in <a href="https://leetcode.com/u/saransh_31/" target="_blank" className='underline	' rel="noopener noreferrer">
  LeetCode
</a>.
      990+ rating in <a href="https://codeforces.com/profile/saransh_31" target="_blank" rel="noopener noreferrer" className='underline	'>
  Codeforces
</a>.


      </p>
    </div>
  </div>
</div>


</section>


      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="bg-gradient-to-r from-teal-500 via-green-500 to-blue-400 py-10 text-center pt-[5rem]"
        style={{ height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2 className="text-white text-5xl font-bold mb-10 animate-fadeInDown">
          Featured Projects
        </h2>

        {/* Featured Project Display */}
        <div className="bg-white rounded-lg shadow-lg p-5 lg:max-w-6xl lg:h-auto mx-auto mb-12 h-[80vh] w-[80vw]" >
          <img
            src={selectedProjectData.image}
            alt={selectedProjectData.title}
            className="w-full h-60 object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold mb-4">
            {selectedProjectData.title}
          </h3>
          <p className="text-gray-700 mb-6">{selectedProjectData.details}</p>
          {(selectedProjectData.title==="Coming Soon")?(null):(<div className="flex justify-center gap-4">
            <a
              href={selectedProjectData.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Live Demo
            </a>
            <a
              href={selectedProjectData.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              GitHub Repo
            </a>
          </div>)}
        </div>

        {/* Horizontally Scrollable Project Thumbnails */}
        <div
          
          className="flex overflow-x-auto gap-8 py-4 px-8"
          style={{ width: '80vw', scrollbarWidth: 'none' , height:"23vh" }}
        >
        {projects.map((project) => (
  <div
    key={project.id}
    onClick={() => handleProjectClick(project.id)}
    className={`cursor-pointer min-w-[250px] transition-all duration-300 transform ${
      selectedProject === project.id ? 'scale-110 border-1 border-black rounded' : ''
    } relative`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover rounded-lg mb-2"
    />
  </div>
))}

        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="h-[100vh] bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          I'm always open to discussing web development projects, ideas, or job
          opportunities. Feel free to reach out!
        </p>
        <button className="cursor-default px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition-all duration-300">
          Contact Me
        </button>
        <div className="flex gap-6 m-8">
        <a
          href="https://www.linkedin.com/in/saransh-gupta-5aa509250/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-300 transition-all"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sarans-h"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-300 transition-all"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/sarans_31"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-300 transition-all"
        >
          <FaInstagram />
        </a>
      </div>
      </section>
    </>
  );
};

export default Home;
