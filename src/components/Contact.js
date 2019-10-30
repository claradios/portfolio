import React from 'react';

const Contact = props => {
    return (
        <section className="App__contact">
            <ul className="contact__icons-list">
                <li className="contact__item">
                    <a href="mailto:clara.dios.diez@gmail.com" target="blank"><i className="far fa-envelope card-icon"></i></a>
                </li>
                <li className="contact__item">
                    <a href="https://www.linkedin.com/in/claradios/" target="blank"><i className="fab fa-linkedin-in linkedin-icon"></i></a>
                </li>
                <li className="contact__item">
                    <a href="https://github.com/claradios" target="blank"><i className="fab fa-github-alt github-icon"></i></a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;