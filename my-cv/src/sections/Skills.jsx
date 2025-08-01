import styles from "./Skills.module.css";

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JQuery", level: 75 },
    { name: "PHP", level: 50 },
    { name: "Laravel 2 (fra...", level: 20 },
  ];

  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsHeading}>Skills</h2>
      <div className={styles.skillsList}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.skillBar}>
              <div
                className={styles.skillLevel}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.proficiencyLabels}>
        <span className={styles.label}>Beginner</span>
        <span className={styles.label}>Proficient</span>
        <span className={styles.label}>Expert</span>
        <span className={styles.label}>Master</span>
      </div>
    </div>
  );
};

export default Skills;
