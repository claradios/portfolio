import React from 'react';
import './App.css';

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
          <section className="Main__section_works">
            <ul className="works__list">
              <li className="work__project">
                <h4 className="work__title">titulo del proyecto</h4>
                <div className="work__picture"><a href="#"><img alt="" src=""/></a></div>                
              </li>
              {/* <li className="work__project"></li>
              <li className="work__project"></li>
              <li className="work__project"></li>
              <li className="work__project"></li>
              <li className="work__project"></li> */}
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
            <li className="contact__linkedin"></li>
            <li className="contact__github"></li>
            <li className="contact__instagram"></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
