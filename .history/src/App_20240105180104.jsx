import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";
import { NotDeployed } from "./components/NotDeployed/NotDeployed";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <NotDeployed />
    </div>
  );
}

export default App;
