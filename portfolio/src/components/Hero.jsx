import styles from "../styles";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`${styles.flexStart} text-white font-poppins text-2xl flex-col xl:px-0 sm:px-16 px-6 flex-1`}
    >
      <p className="mb-3">Hey, I'm Markus 👋</p>
      <h1 className="font-bold text-7xl">
        <span className="text-secondary">Software</span> <br />
        Developer
      </h1>
      <p className="mt-7">
        I build user friendly web solutions <br />
        using modern technologies
      </p>
    </div>
    <div></div>
  </section>
);

export default Hero;
