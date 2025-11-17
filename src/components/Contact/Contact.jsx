import React from 'react';
import styles from './Contact.module.css';


const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact Me</h2>
                <p>Feel free to reach out!</p>

            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src='/email (1).png' />
                    <a href='mailto:myemail@email.com'>myemail@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src='linkedin (1).png' />
                    <a href=''>LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src='/github.png' />
                    <a href=''>Github</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;
