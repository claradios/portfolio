import React from 'react';
import './App.scss';
import projects from './components/projects';
import { isAbsolute } from 'path';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>Clara Dios</h1>
          <h2>front-end developer</h2>
        </header>
        <main className="App__main">
          <section className="Main__section_about-me">
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
              {projects.map(project =>
                <li className="works__item">
                  <div>
                    <h4>{project.name}</h4>
                    <div className="work__picture-ct"><a href={project.url}><img className="work__picture" alt="" src={project.image} /></a></div>
                  </div>
                </li>)}
            </ul>
          </section>
          <section className="Main__section_other">
            <li className="other__project"></li>
            <li className="other__project"></li>
            <li className="other__project"></li>
          </section>
        </main>
        <footer className="App__footer">
          <ul className="contact__icons-list">
            <li className="contact__item"><a href="mailto:clara.dios.diez@gmail.com" target="blank"><i className="far fa-envelope card-icon"></i></a></li>
            <li className="contact__item"><a href="https://www.linkedin.com/in/claradios/" target="blank"><i className="fab fa-linkedin-in linkedin-icon"></i></a></li>
            <li className="contact__item"><a href="https://github.com/claradios" target="blank"><i className="fab fa-github-alt github-icon"></i></a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
