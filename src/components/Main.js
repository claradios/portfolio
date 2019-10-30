import React from 'react';
import AboutMe from './AboutMe';
import WorksList from './WorksList';

const Main = props => {
    return (
        <main className="App__main">
            <AboutMe/>
            <WorksList/>            
            <section className="Main__section_other">
                <li className="other__project"></li>
                <li className="other__project"></li>
                <li className="other__project"></li>
            </section>
        </main>
    );
}

export default Main;