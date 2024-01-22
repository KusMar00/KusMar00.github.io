import styles from "../styles";

const About = () => {
  return (
    <section id="about" className={`${styles.paddingY}`}>
      <h2 className="font-poppins text-white text-5xl font-semibold">
        About<span className="text-secondary">.</span>
      </h2>
      <p className="font-poppins text-white text-xl mt-10">
        I'm 23 years old living in Copenhagen. I recently graduated from the
        IT-Univeristy of Copenhagen with a BSc in Software Development, and am
        now looking for a workplace where i can apply my skills. I dream of
        working as a full-stack web developer but i also have a keen eye for
        UI/Frontend work. <br /> <br />
        In my free time i enjoy spending time working on small side projects,
        like this portfolio and other fun stuff. When i'm not writing code i
        like to go for a run, throw plastic discs at baskets (play disc golf) or
        make coffee in complicated ways (Espresso, V60). I am also a huge music
        nerd, and i try to listen as much as possible.
      </p>
    </section>
  );
};
export default About;
