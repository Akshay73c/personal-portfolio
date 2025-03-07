const Navbar = () => {
  return (
    <div className="flex justify-between h-24 w-screen fixed top-0 left-0 p-6 pt-8 bg-[#bfd6c4]/95 backdrop-blur-[1px] z-[1000] shadow-md">
      <div className="text-xl font-semibold mr-6">Akshay Chavan</div>
      <div>
        <div className="flex justify-center space-x-1 md:space-x-10 text-sm md:text-xl font-normal ">
          <a href="#about-section">About</a>
          <a href="#projects-section">Projects</a>
          <a href="#skills-section">Skills</a>
          <a href="#leave-message-section">Leave a Message!</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
