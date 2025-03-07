import { Divider } from "../App";

const About = () => {
  return (
    <div id="about-section" className="flex flex-col items-center space-y-4">
      <div className="text-4xl">Hey World, I'm Aksh :)</div>
      <Divider />
      <div className="w-80 h-80 mt-4 mb-[37px] rounded-full shadow-lg overflow-hidden">
        <img
          src="./123.png"
          alt="Akshay Chavan"
          className="w-full h-full object-cover rounded-full transition-transform duration-400 ease-in-out hover:scale-125"
        />
      </div>
      <div className="md:w-4xl">
        <p>
          Heyy, I'm a software dev who's incredibly excited about the tech
          world. With a B.Tech degree, I'm well equipped with a technical
          skillset and an eagerness to experiment! I'm always looking for new
          opportunities to learn and grow as a developer.
        </p>
        <br />
        <p>
          Outside of career and academics, I enjoy reading books,listening
          addiobooks and all the geeky stuff lol!
        </p>
      </div>
      <br />
      <div className="social-links text-4xl text-[#588061]  ">
        <a
          href="https://twitter.com/Akshay17c"
          target="_blank"
          className="mx-3"
        >
          <i className="fa-brands fa-twitter transition-all duration-300 hover:text-[#a5d6b0] hover:scale-120"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/akshay-chavan7/"
          target="_blank"
          className="mx-3"
        >
          <i className="fa-brands fa-linkedin transition-all duration-300  hover:text-[#a5d6b0] hover:scale-120"></i>
        </a>
        <a href="https://github.com/Akshay73c" target="_blank" className="mx-3">
          <i className="fa-brands fa-github transition-all duration-300  hover:scale-120"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
