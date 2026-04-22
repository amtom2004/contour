import styles from './App.module.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About';
import { Experience  } from './Components/Experience/Experience';
import { Project } from './Components/Project/Project';
import { Publication } from './Components/Publication/Publication';
import { Contact } from './Components/Contact/Contact';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Publication />
      <Contact />
    </div>
  )
}

export default App
