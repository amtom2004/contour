import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About';
import { Experience  } from './Components/Experience/Experience';
import { Project } from './Components/Project/Project';
import { Publication } from './Components/Publication/Publication';
import { Blog } from './Components/Blog/Blog';
import { BlogPost } from './Components/Blog/BlogPost';
import { Contact } from './Components/Contact/Contact';

function Home() {
  return (
    <div className={styles.homeContent}>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Publication />
      <Blog />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  )
}

export default App
