import styles from "../styles";
import { avatar } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} mt-11`}
  >
    <div
      className={`${styles.flexStart} text-white font-poppins text-2xl flex-col xl:px-0 sm:px-16 px-6 flex-1`}
    >
      <p className="mb-3">Hey, I'm Markus 👋</p>
      <h1 className="font-bold text-7xl">
        <span className="text-secondary">Software</span> <br />
        Developer
      </h1>
      <p className="mt-7">
        I'm a developer based in Copenhagen, Denmark. I build user friendly web
        solutions using modern technologies.
      </p>
      <Button link="#contact" text="Get in Touch" styles="mt-7" />
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={avatar}
        alt="avatar"
        className="rounded-full w-[350px] p-[50px] border-2 border-dashed border-secondary"
      />
    </div>
  </section>
);

export default Hero;
