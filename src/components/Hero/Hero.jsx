import React from 'react';
import styles from './Hero.module.css'
import Navbar from '../Navbar/Navbar';
const Hero = () => {



    return (
        <div className={styles.fullPageContainer}>
            <Navbar />
            <section className={styles.container}>

                <div className={styles.content}>
                    <div className={styles.welcomeBlock}>
                        <p>Welcome to my Portfolio</p>
                    </div>
                    <h1 className={styles.title}>Hi, I'm Stephen</h1>
                    <p className={styles.description}>Im a full stack developer with 5 years of Experience using React, Node JS, reach out if youd like to know more! </p>

                    <button className={styles.contact}>
                        Contact Me
                        <img src='/right.png' style={{ width: '30px' }} />
                    </button>
                </div>



                <div className={styles.heroWrapper}>
                    <div className={styles.bluePlanet}>
                        <div className={styles.heroImageContainer}>
                            <img className={styles.heroImg} src='/spaceman (1).jpg' alt="Hero" />
                        </div>
                    </div>
                </div>



                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />

                <div className={styles.rocket} />
            </section>

        </div>

    );
}

export default Hero;
