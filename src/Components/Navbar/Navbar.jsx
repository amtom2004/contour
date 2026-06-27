import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isBlog = pathname.startsWith('/blog/');
  return <nav className={`${styles.navbar} ${isBlog ? styles.navbarBlog : ''}`}> 
    <a className={styles.title} href='/'>Aron Mathew Tom</a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={
            menuOpen 
            ? getImageUrl("nav/closeIcon.png") 
            : getImageUrl("nav/menuIcon.png")} 
            alt="Menu Icon"
            onClick={() => setMenuOpen(!menuOpen)
            }
            draggable="false"
            />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
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
                <a href='#publication'>Publications</a>
            </li>
            <li>
                <a href='/#blogs'>Blog</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  </nav>
}
