import React from 'react';
import './App.scss';
import Contact from './components/Contact';
import Header from './components/Header';
import Main from './components/Main';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isDescription: false,
      currentId:'hola'
    }
    this.showDescription=this.showDescription.bind(this);
    this.removeDescription=this.removeDescription.bind(this);
  }
  componentDidMount() {

  }

  showDescription(event){
    const id = parseInt(event.currentTarget.id);
    this.setState({       
      isDescription: true,
      currentId:id
    })
  };

  removeDescription(event){  
     this.setState({
       isDescription:false,
       currentId:''
     })
   };

  render() {
    const {showDescription, removeDescription} = this;
    const {isDescription,currentId} = this.state;
    return (
      <div className="App">
        <Header />
        <Contact/>       
        <Main 
        isDescription={isDescription} 
        showDescription={showDescription} 
        removeDescription={removeDescription}
        currentId={currentId}/>
      </div>
    );
  }
}

export default App;
