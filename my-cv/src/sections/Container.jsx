import styles from "./Container.module.css";
import PenIcon from "../assets/icons/pen.png";
import greenLine from "../assets/icons/greenLine.png";
import card from "../assets/card.png";
import cardTwo from "../assets/cardTwo.png";
import cardThree from "../assets/cardThree.png";

import Skills from "./Skills";

const Container = () => {
  return (
    <div className={styles.container}>
      {/* <Sidebar />  ამას არ ვრთავთ, რადგან საიდბარი არ გინდა ამჯერად */}

      <main className={styles.mainContent}>
        <section id="about-me" className={styles.cvSection}>
          <h2>
            About me
            <img src={PenIcon} alt="Pen Icon" className={styles.headingIcon} />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim.
          </p>
        </section>

        <section id="education" className={styles.cvSection}>
          <h2>Education</h2>
          <div className={styles.educationContainer}>
            {/* Content for the first container */}
            <div className={styles.education}>
              <h3>2014</h3>
              <img
                src={greenLine}
                alt="Green Line"
                className={styles.greenLine}
              />
              <h3>2018</h3>
              <img
                src={greenLine}
                alt="Green Line"
                className={styles.greenLine}
              />
              <h3>2025</h3>
            </div>
            {/* Content for the second container (your timeline) */}
            <div className={styles.educationTimeline}>
              <div className={styles.educationItemOne}>
                <p>
                  Description of degree/school. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
              <div className={styles.educationItem}>
                <p>
                  Description of degree/school. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={styles.cvSection}>
          <h2>
            Experience
            <img src={PenIcon} alt="Pen Icon" className={styles.headingIcon} />
          </h2>
          <div className={styles.experienceItem}>
            <h3>
              <b>2024</b> Front-end developer & php programmer
            </h3>
            <h4>Google</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div className={styles.experienceItem}>
            <h3>
              <b>2025</b> Web Developer
            </h3>
            <h4>Twitter</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>2012</p>
          </div>
        </section>

        <section id="skills" className={styles.cvSection}>
          <Skills />
        </section>

        <section id="portfolio" className={styles.cvSection}>
          <h2>Portfolio</h2>
          <div className="styles.cards">
            <h4>
              All /<span>Code</span> / UI
            </h4>
            <img src={card} alt="First Card" className={styles.card} />
            <img src={cardThree} alt="Third Card" className={styles.card} />
            <img src={cardTwo} alt="Second Card" className={styles.card} />
          </div>
        </section>

        <section id="contacts" className={styles.cvSection}>
          <h2>Contacts</h2>
          {/* აქ შეგიძლია ჩასვა საკონტაქტო ინფორმაცია */}
        </section>

        <section id="feedbacks" className={styles.cvSection}>
          <h2>Feedbacks</h2>
          {/* აქ შეგიძლია ჩასვა ფიდბექების ინფორმაცია */}
        </section>
      </main>
    </div>
  );
};

export default Container;
