import React from 'react';
import '../styles/Project.scss';

const Project = props => {
    const { name, url, emoji, description, showDescription, removeDescription, isDescription, projectId, currentId } = props;
    
    return (        
        <div>
            <h4 style={{ color: 'blue' }}>{isDescription && name}</h4>
            <a className="works__link" href={url} target='blank'>
                <div 
                id={projectId} 
                className={((projectId === currentId) && isDescription)?'work__description':'work__picture-ct'} 
                onMouseOver={showDescription} 
                onMouseOut={removeDescription}>
                   {((projectId === currentId) && isDescription) ? description : emoji}                  
                </div>
            </a>
        </div>
    );
}

export default Project;