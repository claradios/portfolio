import React from 'react';
import '../styles/Project.scss';

const Project = props => {
    const {name,url,image,emoji} = props;
    var pictureStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    };
    return(
        <div>
        <h4 style={{color:'blue'}}>{name}</h4>
        <a className="works__link" href={url} target='blank'>
            <div className="work__picture-ct" 
            // style={pictureStyle} 
            ><span>{emoji}</span></div>
        </a>
    </div>
    );
}

export default Project;