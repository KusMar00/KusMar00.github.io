import { skills } from "../constants";
import styles from "../styles";

const Skills = () => (
  <section id="skills" className={`${styles.paddingY}`}>
    <h2 className="font-poppins text-white text-5xl font-semibold">
      Skills<span className="text-secondary">.</span>
    </h2>
    <div className="text-white font-poppins text-xl flex xs:flex-row flex-col flex-wrap items-start justify-between bg-zinc-800 rounded-xl p-[50px] mt-10 border-2 border-solid border-zinc-800 hover:border-secondary">
      {skills.map((category) => (
        <ul
          id={category.id}
          className="w-15 flex-shrink-0 relative min-w-[230px] my-3"
        >
          <li className="text-2xl font-semibold mb-4">
            {category.title}
            <span className="text-secondary">.</span>
          </li>
          {category.skills.map((skill, index) => (
            <li
              className={`${
                index === category.skills.length - 1 ? "mb-0" : "mb-1"
              }`}
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
);

export default Skills;
