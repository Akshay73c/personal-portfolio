const Skills = () => {
  const skillSections = {
    "Programming Languages": [
      { icon: "devicon-java-plain-wordmark" },
      { icon: "devicon-python-plain-wordmark" },
      { icon: "devicon-cplusplus-plain-wordmark" },
      { icon: "devicon-javascript-plain" },
      { icon: "devicon-typescript-plain" },
    ],
    Frameworks: [
      { icon: "devicon-react-original-wordmark" },
      { icon: "devicon-tailwindcss-plain-wordmark" },
      { icon: "devicon-spring-plain-wordmark" },
      { icon: "devicon-nodejs-plain-wordmark" },
      { icon: "devicon-express-original-wordmark" },
    ],
    Databases: [
      { icon: "fa-solid fa-database" },
      { icon: "devicon-mysql-plain-wordmark" },
      { icon: "devicon-postgresql-plain-wordmark" },
      { icon: "devicon-mongodb-plain-wordmark" },
    ],
    DevOps: [
      { icon: "devicon-github-original-wordmark" },
      { icon: "devicon-docker-plain-wordmark" },
      { icon: "devicon-amazonwebservices-plain-wordmark" },
      { icon: "devicon-linux-plain" },
    ],
  };

  return (
    <div
      id="skills-section"
      className="flex flex-col items-center bg-[#f9f9f9] p-8 w-screen"
    >
      <h2 className="mb-8 text-4xl font-semibold">Skills</h2>
      <div className="w-full max-w-6xl px-4">
        {Object.entries(skillSections).map(([title, icons]) => (
          <div key={title} className="">
            {/* <h3 className="text-2xl font-medium mb-6 text-[#588061] text-center">
              {title}
            </h3> */}
            <div className="flex justify-center">
              {icons.map((skill, index) => (
                <IconCard key={index} iconClass={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IconCard = ({ iconClass }) => (
  <div className="flex flex-col items-center w-24 h-24 justify-center">
    <i
      className={`${iconClass} md:text-6xl text-5xl transition-all duration-300 text-[#588061] hover:text-[#a5d6b0] hover:scale-110`}
    ></i>
  </div>
);

export default Skills;
