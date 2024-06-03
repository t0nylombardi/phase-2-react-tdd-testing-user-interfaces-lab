function App() {
  return (
    <section className="flex items-center justify-center my-12">
      <header className="text-white mx-[28rem]">
        <h1 className="text-[3rem] py-12">
          Hi, I'm <a href="https://t0nylombardi.dev">T0nylombardi</a>
        </h1>
        <div className="flex flex-row align-center">
          <img
            className="rounded-full h-64 w-64 object-cover"
            src="http://placebeard.it/1024"
            alt="My profile pic"
          />
          <div className="flex flex-col px-12 justify-center align-middle">
            <h2 className="text-[2rem] py-2">_About Me</h2>
            <p className="text-lg py-2">
              {"// get a small overview of who I am "}
            </p>
            <p className="text-lg">
              I am A self-taught, meticulous & motivated Full Stack Developer
              with 10+ years of hands-on experience, particularly in Ruby and
              Ruby on Rails. I have worked on Ruby on Rails e-commerce
              architecture, breaking down monoliths, working on microservices,
              helping with DevOps, and leading a team through the full-stack
              life cycle. From my first professional job as a junior developer,
              My journey has been driven by an insatiable curiosity for emerging
              technologies. With a passion for staying at the forefront of
              innovation, I'm excited to contribute to this dynamic field and
              participate in its remarkable journey. I am also committed to
              actively learning from every experience that I have. During every
              job and position I have held, I learned about what it takes to
              succeed in this field, and I've carried that lesson throughout the
              years as I've worked.
            </p>
            <div className="flex flex-row justify-between py-12">
              <a
                href="https://github.com/t0nylombardi"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/t0nylombardi"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default App;
