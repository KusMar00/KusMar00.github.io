import styles from "../styles";
import { experience } from "../constants";

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
          {exp.title}
        </div>
      ))}
    </div>
  </section>
);
export default Experience;
