import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import blogs from '../Data/Blog.json'
import { getImageUrl } from '../../utils'
import styles from './BlogPost.module.css'

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case 'heading':
      return <h2 className={styles.blockHeading}>{block.text}</h2>;
    case 'paragraph':
      return <p className={styles.blockParagraph}>{block.text}</p>;
    case 'quote':
      return <blockquote className={styles.blockQuote}>{block.text}</blockquote>;
    case 'code':
      return (
        <div className={styles.codeWrapper}>
          {block.language && <span className={styles.codeLang}>{block.language}</span>}
          <pre className={styles.blockCode}><code>{block.text}</code></pre>
        </div>
      );
    default:
      return null;
  }
};

export const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!blog) {
    return (
      <div className={styles.notFound}>
        <h2>Post not found.</h2>
        <Link to="/#blogs" className={styles.backLink}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <div className={styles.hero}>
        <img
          src={getImageUrl(blog.imageSrc)}
          alt={blog.title}
          className={styles.heroImage}
          draggable="false"
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.wrapper}>
        <Link to="/#blogs" className={styles.backLink}>← Back to Blog</Link>

        <ul className={styles.tags}>
          {blog.tags.map((tag, i) => (
            <li className={styles.tag} key={i}>{tag}</li>
          ))}
        </ul>

        <h1 className={styles.title}>{blog.title}</h1>

        <div className={styles.meta}>
          <span className={styles.metaDate}>{blog.date}</span>
          <span className={styles.metaDot}>·</span>
          <span className={styles.metaRead}>{blog.readTime}</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.body}>
          {blog.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>

        <div className={styles.divider} />

        <Link to="/#blogs" className={styles.backLink}>← Back to Blog</Link>
      </div>
    </article>
  );
};
