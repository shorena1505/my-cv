import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      {/* <Sidebar />  ამას არ ვრთავთ, რადგან საიდბარი არ გინდა ამჯერად */}

      <main className={styles.mainContent}>
        <h1>Shorena</h1>

        <section id="about-me" className={styles.cvSection}>
          <h2>About me</h2>
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
          <div className={styles.educationTimeline}>
            <div className={styles.educationItem}>
              <h3>2014 - Title</h3>
              <p>
                Description of degree/school. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
            <div className={styles.educationItem}>
              <h3>2020 - Title</h3>
              <p>
                Description of degree/school. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className={styles.cvSection}>
          <h2>Experience</h2>
          <div className={styles.experienceItem}>
            <h3>Front-end developer & php programmer</h3>
            <h4>Google</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>2012-2015</p>
          </div>
          <div className={styles.experienceItem}>
            <h3>Web Developer</h3>
            <h4>Twitter</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>2012</p>
          </div>
        </section>

        {/* SKILLS სექცია გამოტანილია experience სექციიდან */}
        <section id="skills" className={styles.cvSection}>
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Git</li>
            <li>Responsive Design</li>
          </ul>
        </section>

        {/* აქ დაამატე სხვა სექციებიც, როგორიცაა Portfolio, Contacts, Feedbacks */}
        {/* რადგან სურათზეა ესენი, Container.jsx-შიც უნდა იყოს, თუნდაც ცარიელი */}

        <section id="portfolio" className={styles.cvSection}>
          <h2>Portfolio</h2>
          {/* აქ შეგიძლია ჩასვა პორტფოლიოს ელემენტები */}
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
