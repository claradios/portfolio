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
                        <div><h4 style={{ color: 'blue' }}>{name}</h4><p>{description}</p></div>
                        : emoji}
                </div>
            </a>
        </div>
    );
}

export default Project;