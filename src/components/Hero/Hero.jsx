import React from 'react';
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section className={styles.container}>


            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Stephen</h1>
                <p className={styles.description}>Im a full stack developer with 5 years of Experience using React, Node JS, reach out if youd like to know more! </p>

                <a href='mailto:myemail@gmail.com' className={styles.contact}>Contact Me</a>
            </div>



            <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1}}>
                <div style={{ width: '325px', height: '325px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img className={styles.heroImg} src='/me-suit.jpg' alt='Hero Image of me' />
                </div>
            </div>





            <div className={styles.topBlurb} />
            <div className={styles.bottomBlurb} />
        </section>
    );
}

export default Hero;
