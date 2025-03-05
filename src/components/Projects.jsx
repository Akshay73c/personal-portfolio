const Projects = () => {
  return (
    <div
      id="projects-section"
      className="w-full m-auto flex flex-col items-center text-center gap-8"
    >
      <h2 className="text-4xl font-semibold">Projects</h2>
      <div className="project-subsection w-full mb-16">
        {/* <h3 className="mb-8 text-2xl font-medium underline">Software</h3> */}
        <div className="swiper card-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a
                href="https://github.com/Akshay73c/CivicConnect"
                target="_blank"
                className="project-box flex flex-col text-center border border-[#d7dbd8] rounded-xl p-4 bg-[#f9f9f9] shadow-lg"
              >
                <picture>
                  <img
                    src="./civic.png"
                    alt="CivicConnect"
                    className="h-44 w-56 object-cover rounded-sm mb-3"
                  ></img>
                </picture>
                <h4 className="mb-2 text-xl font-semibold">CivicConnect</h4>
                <h5 className="mb-2 font-medium">
                  <em>ReactJS, Java Springboot, MySQL</em>
                </h5>
                <p className="text-sm font-light text-[#494a4a]">
                  a web application that assists citizen-interaction with local
                  government, enabling submission and tracking of service
                  requests such as trash pickup, event permits and providing
                  access to government newsletters and area-specific events.
                </p>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://github.com/Akshay73c/Receipe-search-app"
                target="_blank"
                className="project-box flex flex-col text-center border border-[#d7dbd8] rounded-xl p-4 bg-[#f9f9f9] shadow-lg"
              >
                <picture>
                  <img
                    src="./recipe.png"
                    alt="Recipe App"
                    className="h-44 w-56 object-cover rounded-sm mb-3"
                  ></img>
                </picture>
                <h4 className="mb-2 text-xl font-semibold">
                  Recipe Search App
                </h4>
                <h5 className="mb-2 font-medium">
                  <em>ReactJS, Tailwind CSS</em>
                </h5>
                <p className="text-sm font-light text-[#494a4a]">
                  A website which lets you find the ingredient set of tens of
                  thousands of food and dishes. Simply search any type of dish
                  you like and it will find you its suitable ingredients to
                  prefer!
                </p>
              </a>
            </div>

            <div className="swiper-slide">
              <a
                href="https://github.com/Akshay73c/medium-clone"
                target="_blank"
                className="project-box flex flex-col text-center border border-[#d7dbd8] rounded-xl p-4 bg-[#f9f9f9] shadow-lg"
              >
                <picture>
                  <img
                    src="./medium.png"
                    alt="Medium-clone"
                    className="h-44 w-56 object-cover rounded-sm mb-3"
                  ></img>
                </picture>
                <h4 className="mb-2 text-xl font-semibold">Medium-clone</h4>
                <h5 className="mb-2 font-medium">
                  <em>Hono/Express, ReactJS, Postgres</em>
                </h5>
                <p className="text-sm font-light text-[#494a4a]">
                  a full-stack clone of popular blogging website-medium enabling
                  users to create, share, and discover engaging content. Users
                  can create an account, write articles, like, comment, and
                  share articles.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
