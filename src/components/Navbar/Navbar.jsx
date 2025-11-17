import React, {useState} from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>

            <div className={styles.menu}>
                <img onClick={() => setMenuOpen(!menuOpen)} className={styles.menuBtn} src='/burger-bar.png' alt='menu.Button'/>
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
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
