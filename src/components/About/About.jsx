import React from 'react';
import styles from './About.module.css';


const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>

            <div className={styles.content}>
                <img className={styles.aboutImage} src='/freelancer.png' alt='About Image' />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src='/cursor.png' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>im a frontend developer with Experience in building responsive sites</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src='/pc.png' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimized backend-systems and APIs
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src='/wireframe/png' />
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
