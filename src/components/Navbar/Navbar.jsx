import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>

            <div className={styles.menu}>
                <ul onClick={() => setMenuOpen(false)} className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li>
                        <a href='#about'>About</a>
                    </li>

                    <li>
                        <a href='#experience'>Experience</a>
                    </li>

                    <li>
                        <a href='#projects'>Projects</a>
                    </li>

                    <li>
                        <a href='#contact'>Contact</a>
                    </li>

                    <li className={styles.link} onClick={() => window.open('mailto:myemail@email.com')}>
                        <img src='/email (1).png' style={{ width: '20px' }} />
                    </li>
                    <li className={styles.link} onClick={() => window.open('https://www.linkedin.com/in/stephen-cahillane-68689b27b/')}>
                        <img src='linkedin (1).png' style={{ width: '20px' }} />
                    </li>
                    <li className={styles.link} onClick={() => window.open('https://github.com/StephenCahillane')}>
                        <img src='/github.png' style={{ width: '20px' }} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
