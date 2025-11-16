import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ada</h1>
                <p className={styles.description}>Im a full stack developer with 5 years of Experience using React, Node JS, reach out if youd like to know more! </p>

                <a href='mailto:myemail@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div> 

            <img  className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt='Hero Image of me'/>

            <div className={styles.topBlurb} />
            <div className={styles.bottomBlurb} />
        </section>
    );
}

export default Hero;
