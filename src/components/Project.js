import React from 'react';
import '../styles/Project.scss';

const Project = props => {
    const { name, url, image, emoji, description, showDescription, removeDescription } = props;

    return (
        <div>
            <h4 style={{ color: 'blue' }}>{name}</h4>
            <a className="works__link" href={url} target='blank'>
                <div className="work__picture-ct" onMouseOver={showDescription} onMouseOut={removeDescription}>
                   
                    {emoji}
                </div>
            </a>
        </div>
    );
}

export default Project;