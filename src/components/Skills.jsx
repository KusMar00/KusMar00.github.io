import { skills } from "../constants";
import styles from "../styles";

const Skills = () => (
  <section id="skills" className={`${styles.paddingY}`}>
    <h2 className="font-poppins text-white text-5xl font-semibold">
      Skills<span className="text-secondary">.</span>
    </h2>
    <div className="text-white">
      {skills.map((category) => (
        <div id={category.id}>
          <ul>
            <li>{category.title}</li>
            {category.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
