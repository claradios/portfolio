import React from 'react';
import AboutMe from './AboutMe';
import WorksList from './WorksList';
import '../styles/Main.scss';

const Main = props => {
    const {showDescription,removeDescription,isDescription,currentId} = props;
    return (
        <main className="App__main">
            <AboutMe/>
            <WorksList 
                isDescription={isDescription}
                showDescription={showDescription}
                removeDescription={removeDescription}
                currentId = {currentId}/>      
        </main>
    );
}

export default Main;