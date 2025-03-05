import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="pt-24 flex flex-col flex-grow items-center">
        <div id="about-section" className="scroll-mt-24">
          <About />
        </div>
        <Divider />
        <div id="projects-section" className="scroll-mt-24">
          <Projects />
        </div>
        <Divider />
        <div id="skills-section" className="scroll-mt-24">
          <Skills />
        </div>
        <Divider />
      </div>

      <div
        id="leave-message-section"
        className="min-h-[40vh] flex flex-col items-center justify-center text-center gap-4 scroll-mt-24"
      >
        <h2 className="mb-4 text-4xl font-semibold">Leave a Message!</h2>
        <p className="text-xl text-[#555] max-w-xl">coming soon :)</p>
      </div>
      <Footer />
    </div>
  );
}

export const Divider = () => {
  return <div className="w-40 h-2 bg-[#bfd6c4] m-8 rounded-full"></div>;
};

const Footer = () => {
  return (
    <footer className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[#909090] mt-8 border-t border-[#d7dbd8]">
      <div className="py-6 px-4 text-center text-[#fff]">
        <p className="text-sm">
          &copy; 2025 Akshay Chavan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default App;
