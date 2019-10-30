import React from 'react';
import projects from './projects';
import Project from './Project';

const WorksList = props => {
    return (
        <section className="Main__section_works">
            <ul className="works__list">
                {projects.map((project,index) => {
                    const { name, url, image } = project;
                    return (
                        <li key={index} className="works__item">
                            <Project name={name} url={url} image={image} />
                        </li>
                    );
                }
                )}
            </ul>
        </section>
    );
}

export default WorksList;