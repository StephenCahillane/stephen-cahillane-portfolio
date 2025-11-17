import React from 'react';
import styles from './Hero.module.css'
import Navbar from '../Navbar/Navbar';
const Hero = () => {



    return (
        <div className={styles.fullPageContainer}> 
            <Navbar />
            <section className={styles.container}>

                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Stephen</h1>
                    <p className={styles.description}>Im a full stack developer with 5 years of Experience using React, Node JS, reach out if youd like to know more! </p>

                    <a href='mailto:myemail@gmail.com' className={styles.contact}>Contact Me</a>
                </div>



                <div className={styles.heroWrapper}>

                    <div className={styles.heroImageSpinner}>
                        <div className={styles.heroImageContainer}>
                            <img className={styles.heroImg} src="/me-suit.jpg" alt="Hero" />
                        </div>
                    </div>
                </div>



                <div className={styles.topBlurb} />
                <div className={styles.bottomBlurb} />
            </section>

        </div>

    );
}

export default Hero;
