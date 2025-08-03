import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.topBlur}/>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aron Mathew Tom</h1>
            <p className={styles.description}>
                I'm a Software Developer with expertise in Machine Learning and Computer Vision
            </p>
            <a href="mailto:amtom2004@gmail.com" className={styles.contactBtn}>Connect Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg} draggable="false"/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}