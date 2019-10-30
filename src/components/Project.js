import React from 'react';
import '../styles/Project.scss';

const Project = props => {
    const { name, url, emoji, description, showDescription, removeDescription, isDescription, projectId, currentId } = props;

    return (
        <div>
            <a className="works__link" href={url} target='blank'>
                <div
                    id={projectId}
                    className={((projectId === currentId) && isDescription) ? 'work__description' : 'work__picture-ct'}
                    onMouseOver={showDescription}
                    onMouseOut={removeDescription}>
                    {((projectId === currentId) && isDescription) ?
                        <div>
                            <h4 className="work__description-title" style={{ color: 'white' }}>{name}</h4>
                            <p className="work__description-text">{description}</p>
                        </div>
                        : emoji}
                </div>
            </a>
        </div>
    );
}

export default Project;