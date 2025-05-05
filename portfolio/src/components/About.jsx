import React from "react";
import backgroundImage from "../assets/images/AboutPatternBg.png"; 
// import CircleBg from "../assets/images/AboutImgbg.png"; // new fancy circle background
// main page background
import AboutImage from "../assets/images/AboutMainImg.png"; // your main profile picture

const About = () => {
  return (
    <section id="About"
      className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 min-h-screen about-main-section bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Left Side - Image and Circle */}
      <div className="imgdiv">
      {/* <div className="main-image-bg">
        <img
          src={CircleBg}
          alt="Background Circle"
          className="imgbg"
        />
        </div> */}
        <div className="main-image">
        <img
          src={AboutImage}
          alt="Profile"
          className="imgmain"
        />
        </div>
      </div>

      {/* Right Side - About Text */}
      <div className="max-w-xl">
        <h2 className="text-indigo-600 font-bold uppercase text-sm mb-2">About Me</h2>
        <h1 className="text-4xl font-bold mb-4">Designing Dreams, Building Futures</h1>
        <p className="text-gray-600 mb-6">
          Hello! I'm a passionate B.Tech student, excited about turning ideas into real-world solutions. 
          I'm currently building my skills and preparing to contribute fresh and innovative ideas to the tech world.
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="bg-orange-100 p-4 rounded-md shadow-md">
            <h3 className="text-orange-500 font-semibold text-lg">Student Projects</h3>
            <p className="text-gray-600 text-sm">
              Working on academic and personal tech projects to sharpen my skills.
            </p>
          </div>
          <div className="bg-purple-100 p-4 rounded-md shadow-md">
            <h3 className="text-purple-600 font-semibold text-lg">Learning Journey</h3>
            <p className="text-gray-600 text-sm">
              Constantly learning new technologies, frameworks, and best practices.
            </p>
          </div>
        </div>

        {/* Download CV Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;
