import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__links}>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default NavBar;