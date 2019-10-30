import React from 'react';
import projects from './projects';

const WorksList = props => {
    return(
        <section className="Main__section_works">
                <ul className="works__list">
                    {projects.map((project) => {
                        var pictureStyle = {
                            backgroundImage: `url(${project.image})`,
                            backgroundRepeat: 'no-repeat',
                            // backgroundAttachment: 'fixed',
                            backgroundPosition: 'center'
                        };
                        return (
                            <li className="works__item">
                                <div>
                                    <h4>{project.name}</h4>
                                    <a className="works__link" href={project.url} target='blank'>
                                        <div className="work__picture-ct" style={pictureStyle} ></div>
                                    </a>
                                </div>
                            </li>
                        );
                    }
                    )}
                </ul>
            </section>
    );
}

export default WorksList;