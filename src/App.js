import React from 'react';
import './App.scss';
import projects from './components/projects';
import Contact from './components/Contact';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {

    return (
      <div className="App">
        <header className="App__header">
          <h1>Clara Dios</h1>
          <h2>front-end developer</h2>
          <a className="App_header_arrow" href="#about-me"><span className="arrow-icon">^</span></a>
        </header>
        <main className="App__main">
          <section id="about-me" className="Main__section_about-me">
            <div className="about-me__container">
              <h3 className="about-me__title">sobre mi</h3>
              <p className="about-me__text">
                La arquitectura del futuro es digital y es ahí donde quiero seguir traspasando mis habilidades técnicas y de diseño.
              </p>
              <p className="about-me__text">
                ¿Quieres ver alguno de mis últimos proyectos de código?
              </p>
            </div>
          </section>
          <section className="Main__section_works">
            <ul className="works__list">
              {projects.map((project) => {
                var pictureStyle = {
                  backgroundImage: `url(${project.image})`,
                  backgroundRepeat: 'no-repeat',
                  // backgroundAttachment: 'fixed',
                  backgroundPosition: 'center'
                };
                return (
                  <li className="works__item">
                    <div>
                      <h4>{project.name}</h4>
                      <a className="works__link" href={project.url} target='blank'>
                        <div className="work__picture-ct" style={pictureStyle} ></div>
                      </a>
                    </div>
                  </li>
                );
              }
              )}
            </ul>
          </section>
          <section className="Main__section_other">
            <li className="other__project"></li>
            <li className="other__project"></li>
            <li className="other__project"></li>
          </section>
        </main>
      <Contact/>
      </div>
    );
  }
}

export default App;
