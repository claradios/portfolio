import React from 'react';
import './App.scss';
import Contact from './components/Contact';
import Header from './components/Header';
import Main from './components/Main';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isDescription: false
    }
    this.showDescription=this.showDescription.bind(this);
    this.removeDescription=this.removeDescription.bind(this);
  }
  componentDidMount() {

  }

  showDescription(event){
    console.log('show');
    this.setState({       
      isDescription: true,
      show:'hola'
    })

  };
  removeDescription(event){
     console.log('remove');
     this.setState({
       isDescription:false,
       show:'adios'
     })
   };

  render() {
    const {showDescription, removeDescription} = this;
    const {isDescription} = this.state;
    return (
      <div className="App">
        <Header />
        <Contact/>       
        <Main isDescription={isDescription} showDescription={showDescription} removeDescription={removeDescription}/>
      </div>
    );
  }
}

export default App;
