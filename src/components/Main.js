import React from 'react';
import AboutMe from './AboutMe';
import WorksList from './WorksList';

const Main = props => {
    return (
        <main className="App__main">
            <AboutMe/>
            <WorksList/>      
        </main>
    );
}

export default Main;