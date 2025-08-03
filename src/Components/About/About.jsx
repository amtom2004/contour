import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="About Image" draggable="false"/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" draggable="false"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            Experience in developing fast and optimised server systems and APIs
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" draggable="false"/>
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning Developer</h3>
                        <p>
                            Experience in developing Deep Learning and Computer Vision Models
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" draggable="false"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            Designed multiple Landing pages and have systems as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
