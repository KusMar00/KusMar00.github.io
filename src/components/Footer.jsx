import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => (
  <section className="sm:py-12 py-6 w-full flex justify-between sm:flex-row flex-col items-center border-t-[2px] border-zinc-800">
    <p className="text-white font-poppins text-sm">
      Made with 💜 by Markus Johansen.
    </p>
    <div className="text-white text-2xl flex items-center justify-around w-[150px] mt-4 sm:mt-0">
      <a
        target="_blank"
        href="https://github.com/KusMar00"
        className="hover:text-secondary"
      >
        <FiGithub />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/markus-kildeb%C3%A6k-raun-johansen-7215561b4/"
        className="hover:text-secondary"
      >
        <FiLinkedin />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/markus.raun/"
        className="hover:text-secondary"
      >
        <FiInstagram />
      </a>
    </div>
  </section>
);
export default Footer;
