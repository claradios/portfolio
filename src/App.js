import React from 'react';
import './App.scss';
import Contact from './components/Contact';
import Header from './components/Header';
import Main from './components/Main';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {

    return (
      <div className="App">
        <Header />
        <Contact/>       
        <Main />
      </div>
    );
  }
}

export default App;
