import "./css/Projects.css";
import NetflixBox from "../components/Projects/NetflixBox";
import Reality from "../components/Projects/FullStack/Reality";
import NoticeBoard from "../components/Projects/FullStack/NoticeBoard";
import OldWeb from "../components/Projects/OldWeb";

const Projects = () => {
  return (
    <section className="Projects">
      <section className="allProjects">

        <article className="language">
          <div className="tittle-box">
            <h1>React - FullStack</h1>
          </div>
          <div className="projects-box">
            <div className="oneProject">
              <Reality />
            </div>
            <div className="oneProject">
              <NoticeBoard />
            </div>
          </div>
        </article>

        <article className="language">
          <div className="tittle-box">
            <h1>React - FrontEnd</h1>
          </div>

          <div className="projects-box netf">
            <div className="oneProject">
              <NetflixBox />
            </div>
          </div>
        </article>

        <article className="language">
          <div className="tittle-box">
            <h1>JS | PHP | SQL</h1>
          </div>
          <div className="projects-box">
            <div className="oneProject">
              <OldWeb />
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Projects;
