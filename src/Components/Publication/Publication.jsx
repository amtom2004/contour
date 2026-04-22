import React from 'react'
import publications from "../Data/Publication.json"
import { getImageUrl } from '../../utils'
import styles from "./Publication.module.css"

export const Publication = () => {
  return (
    <section className={styles.container} id='publication'>
        <h2 className={styles.title}>Publications</h2>

        <div className={styles.content}>
            <ul className={styles.publication}>
                {
                    publications.map((pub, id) => {
                        return (
                            <li className={styles.publicationItem} key={id}>
                                <img 
                                    src={getImageUrl(pub.logo)} 
                                    alt={`${pub.publisher} Logo`} 
                                    draggable="false"
                                />

                                <div className={styles.publicationItemDetails}>
                                    <h3>{pub.title}</h3>
                                    <p>{pub.publisher}, {pub.date}</p>

                                    <ul>
                                            <a 
                                                href={pub.source} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                View Publication
                                            </a>
                                    </ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
  );
};