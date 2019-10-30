import React from 'react';

const Project = props => {
    const {name,url,image} = props;
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
            <div className="work__picture-ct" style={pictureStyle} ></div>
        </a>
    </div>
    );
}

export default Project;