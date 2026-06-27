import React from 'react'
import { Link } from 'react-router-dom'
import blogs from "../Data/Blog.json"
import { getImageUrl } from '../../utils'
import styles from "./Blog.module.css"

export const Blog = () => {
  return (
    <section className={styles.container} id='blogs'>
      <h2 className={styles.title}>Blogs</h2>

      <div className={styles.content}>
        {
          blogs.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              className={styles.card}
              key={blog.id}
            >
              <img
                src={getImageUrl(blog.imageSrc)}
                alt={`${blog.title} cover`}
                className={styles.image}
                draggable="false"
              />
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span>{blog.date}</span>
                  <span className={styles.dot}>·</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <p className={styles.description}>{blog.description}</p>
                <ul className={styles.tags}>
                  {blog.tags.map((tag, tid) => (
                    <li className={styles.tag} key={tid}>{tag}</li>
                  ))}
                </ul>
                <span className={styles.link}>Read More</span>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  );
};
