import React from 'react';
import styles from './Hero.module.css'
import Navbar from '../Navbar/Navbar';
import Typewriter from "typewriter-effect";


const Hero = () => {



    return (
        <div className={styles.fullPageContainer}>
            <Navbar />
            <section className={styles.container}>

                <div className={styles.content}>
                    <div className={styles.welcomeBlock}>
                        <p>Welcome to my Portfolio</p>
                    </div>
                    <h1 className={styles.title}>
                        <Typewriter
                            options={{
                                html: true,
                                strings: [
                                    "<span style='color:#f4f4f4;'>Hi, I'm Stephen.</span>",
                                    "<span style='color:#f4f4f4;'>Web Developer.</span>"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 70
                            }}
                        />
                    </h1>
                    <p className={styles.description}>
                        Full stack developer with 5 years of experience specializing in React, Node JS, and Java.
                        Reach out if you would like to know more!
                    </p>

                    <button className={styles.contact} onClick={() => window.location.href = "mailto:stephencahillane1@gmail.com"}>
                        Contact Me
                        <img src='/right.png' style={{ width: '30px', marginLeft: '8px' }} />
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


            </section>

        </div>

    );
}

export default Hero;
