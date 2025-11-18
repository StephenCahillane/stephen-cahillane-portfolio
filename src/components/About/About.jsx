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
                            <h3>Frontend Developer</h3>
                            <p>im a frontend developer with Experience in building responsive sites</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src='/laptop-screen.png' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimized backend-systems and APIs
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src='/coding.png' />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have experience designing fast and optimized UIs
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    );
}

export default About;
