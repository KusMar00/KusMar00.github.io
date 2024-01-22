import styles from "../styles";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tnh2zvw",
        "template_g2qmhh4",
        form.current,
        "8Lc7hpFypHqPzTg2x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className={`${styles.paddingY}`}>
      <h2 className="font-poppins text-white text-5xl font-semibold">
        Contact<span className="text-secondary">.</span>
      </h2>
      <div className="mt-4 flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-around items-center md:w-[45%] w-full text-white font-poppins text-xl bg-zinc-800 rounded-xl min-h-[320px] p-10 border-2 border-solid border-zinc-800 hover:border-secondary">
          <p>
            Are you interested in working together? Feel free to contact me
            using any of the following platforms:
          </p>
          <div className="text-white text-2xl flex items-center justify-around w-[200px] mt-4 sm:mt-0">
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
              href="mailto: markusraunjohansen@gmail.com"
              className="hover:text-secondary"
            >
              <FiMail />
            </a>
          </div>
          <p>Or use the contact form to send a direct mail.</p>
        </div>
        <div className="flex flex-col justify-around items-center md:w-[45%] w-full text-white font-poppins text-xl mt-4 bg-zinc-800 rounded-xl min-h-[320px] p-10 border-2 border-solid border-zinc-800 hover:border-secondary">
          <form ref={form} onSubmit={sendEmail} className="text-black">
            <input type="text" name="user_name" required placeholder="Name" />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email"
            />
            <textarea name="message" required placeholder="Message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
