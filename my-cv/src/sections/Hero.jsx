import styles from "./Hero.module.css";
import shorenaPhoto from "../assets/shorena.jpg";
import bgPhoto from "../assets/background.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <img src={bgPhoto} alt="background" className={styles.heroBg} />
      <img src={shorenaPhoto} alt="Shorena" className={styles.heroImage} />
      <h1 className={styles.name}>Shorena Nemsadze</h1>
      <h2 className={styles.position}>Programmer. Creative. Innovator</h2>
      <p className={styles.description}>
        Motivated and detail-oriented developer with a passion for coding and
        strong organizational skills.
      </p>
      <Link to="/container" className={styles.button}>
        Know more
      </Link>
    </section>
  );
};

export default Hero;
