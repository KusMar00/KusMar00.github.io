import styles from "../styles";

const About = () => (
  <section id="about" className={`${styles.paddingY}`}>
    <h2 className="font-poppins text-white text-5xl font-semibold">
      About<span className="text-secondary">.</span>
    </h2>
    <p className="font-poppins text-white text-l mt-10">
      In my free time i enjoy spending time working on small side projects, like
      this portfolio and other fun stuff. When i'm not writing code i like to go
      for a run, throw plastic discs at baskets (play disc golf) or make coffee
      in complicated ways. <br /> <br />I am also a huge music nerd, and i try
      to listen as much as possible. I'm currently listening to...
    </p>
  </section>
);
export default About;
