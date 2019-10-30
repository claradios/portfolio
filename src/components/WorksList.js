import React from 'react';
import projects from './projects';
import Project from './Project';
import Contact from './Contact';
import '../styles/WorksList.scss';

const WorksList = props => {
    return (
        <section className="Main__section_works">
            <ul className="works__list">
                {projects.map((project,index) => {
                    const { name, url, image, emoji } = project;
                    return (
                        <li key={index} className="works__item">
                            <Project name={name} url={url} image={image} emoji={emoji}/>
                        </li>
                    );
                }
                )}
            </ul>
            <Contact/>
        </section>
    );
}

export default WorksList;