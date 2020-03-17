const Portfolio = () => (
  <>
    <section id="portfolio">
      <h3>Some of my projects</h3>
      <div className="grid projects">
        <a href="">
          <img src="images/project_1.png" alt="spaceship" />
          <h4>Space Race Game</h4>
        </a>
        <a href="">
          <img src="images/project_2.png" alt="cosmos" />
          <h4>GGame</h4>
        </a>
        <a href="">
          <img src="images/project_3.png" alt="astronaut" />
          <h4>Space Api</h4>
        </a>
      </div>
    </section>
    <section id="skills">
      <h3>Things I can do</h3>
      <ul className="grid">
        <li>
          <img src="images/comet_1.svg" alt="comet" />
          <h4>Javascript</h4>
        </li>
        <li>
          <img src="images/comet_2.svg" alt="comet" />
          <h4>React</h4>
        </li>
        <li>
          <img src="images/comet_3.svg" alt="comet" />
          <h4>Next.JS</h4>
        </li>
        <li>
          <img src="images/comet_4.svg" alt="comet" />
          <h4>NodeJS</h4>
        </li>
      </ul>
    </section>
  </>
);
export default Portfolio;
