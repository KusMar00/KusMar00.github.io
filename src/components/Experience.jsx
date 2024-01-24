import styles from "../styles";
import { experience } from "../constants";
import { FiGlobe, FiGithub } from "react-icons/fi";

const Experience = () => (
  <section id="experience" className={`${styles.paddingY}`}>
    <h2 className="font-poppins text-white text-5xl font-semibold">
      Experience<span className="text-secondary">.</span>
    </h2>
    <div className="mt-10 w-full flex sm:flex-row flex-col flex-wrap  justify-between font-poppins">
      {experience.map((exp) => (
        <div
          key={exp.id}
          className="rounded-xl p-7 mt-7 sm:w-[49%] w-full bg-zinc-800 border-2 border-solid border-zinc-800 hover:border-secondary text-white"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-2xl mb-4">
              {exp.title}
              <span className="text-secondary">.</span>
            </h3>
            <div className="flex text-zinc-400 text-xl">
              {exp.siteUrl && (
                <a href={exp.siteUrl} target="_blank">
                  <FiGlobe className="hover:text-secondary" />
                </a>
              )}
              {exp.githubUrl && (
                <a href={exp.githubUrl} target="_blank">
                  <FiGithub className="hover:text-secondary" />
                </a>
              )}
            </div>
          </div>
          <img src={exp.img} alt="Project image" className="rounded-xl mb-4" />
          <p className="mb-3">{exp.description}</p>
          <ul className="flex flex-row flex-wrap items-start justify-start">
            {exp.tags.map((tag, index) => (
              <li
                key={index}
                className={`bg-secondary mt-2 rounded-xl text-zinc-800 text-sm px-[5px] py-[3px] font-semibold ${
                  index === exp.tags.length - 1 ? "mr-0" : "mr-2"
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
export default Experience;
