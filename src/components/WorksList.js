import React from 'react';
import projects from './projects';
import Project from './Project';
import Contact from './Contact';
import '../styles/WorksList.scss';

const WorksList = props => {
    const { showDescription, removeDescription, isDescription } = props;
    return (
        <section className="Main__section_works">
            <ul className="works__list">
                {projects.map((project, index) => {
                    const { name, url, image, emoji, description } = project;
                    return (
                        <li key={index} className="works__item">
                            <Project
                                name={name}
                                url={url}
                                image={image}
                                emoji={emoji}
                                description={description}
                                isDescription={isDescription}
                                showDescription={showDescription}
                                removeDescription={removeDescription} />
                        </li>
                    );
                }
                )}
            </ul>
            <Contact />
        </section>
    );
}

export default WorksList;