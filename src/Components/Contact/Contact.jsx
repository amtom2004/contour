import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.content}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto: amtom2004@gmail.com">
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" className={styles.linkImage}/>
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/amtom2004">
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" className={styles.linkImage}/>
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.github.com/amtom2004">
                        <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" className={styles.linkImage}/>
                    </a>
                </li>
            </ul>
        </div>
        <div className={styles.copyright}>
            © {new Date().getFullYear()} Beehive Studios. All rights reserved.
        </div>
    </footer>
  )
}
