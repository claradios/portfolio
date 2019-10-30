import React from 'react';
import '../styles/AboutMe.scss';
import Contact from './Contact';

const AboutMe = props => {
    return (
        <section id="about-me" className="Main__section_about-me">
            <div className="about-me__container">
                <h3 className="about-me__title">sobre mi</h3>
                <p className="about-me__text">
                    La arquitectura del futuro es digital y es ahí donde quiero seguir traspasando mis habilidades técnicas y de diseño.
                </p>
                <p className="about-me__text">
                    ¿Quieres ver alguno de mis últimos proyectos de código?
                </p>
            </div>     
        </section>
    );
}

export default AboutMe;