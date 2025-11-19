import React from 'react';
import styles from './About.module.css';


const About = () => {
    return (
        <section className={styles.container} id="about">


            <div style={{ position: 'relative', width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column' }}>
                <div className={styles.yellowPlanet} />
                <img className={styles.aboutImage} src='/about-spaceman (1).jpg' alt='About Image' />
                <div className={styles.bottomBlur} />
            </div>

            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src='/cursor.png' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Development</h3>
                            <p>I build fast, responsive, and user-focused web apps. I excel at creating seamless interfaces that integrate with backend API architecture.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src='/laptop-screen.png' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I build clean, efficient, and lightweight backend systems, focusing on fast APIs, scalable architecture, and maintainable code using Node.js and Express.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src='/coding.png' />
                        <div className={styles.aboutItemText}>
                            <h3>Founder & Developer</h3>
                            <p>
                                I built and released my own platform—designing the UI, architecture, and core functionality—which now serves active users in the sales industry.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    );
}

export default About;
