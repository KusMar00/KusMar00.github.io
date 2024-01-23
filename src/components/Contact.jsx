import styles from "../styles";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
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
      <div className="mt-10 flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-around items-center md:w-[49%] w-full text-white font-poppins text-xl bg-zinc-800 rounded-xl h-[320px] p-10 border-2 border-solid border-zinc-800 hover:border-secondary">
          <p>
            Are you interested in working together? Feel free to contact me
            using any of the following platforms:
          </p>
          <div className="text-white text-2xl flex items-center justify-around w-[200px] sm:mt-0">
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
          <p>Or use the contact form to send me a direct mail.</p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:mt-0 mt-6 text-black flex flex-col justify-around items-center md:w-[49%] w-full font-poppins text-xl bg-zinc-800 rounded-xl h-[320px] p-8 border-2 border-solid border-zinc-800 hover:border-secondary"
        >
          <div className="w-full flex justify-between items-center">
            <input
              className="mb-2 bg-zinc-300 rounded w-[49%] p-2"
              type="text"
              name="user_name"
              required
              placeholder="Name"
            />
            <input
              className="mb-2 bg-zinc-300 rounded w-[49%] p-2"
              type="email"
              name="user_email"
              required
              placeholder="Email"
            />
          </div>
          <textarea
            className="mb-3 bg-zinc-300 rounded w-full p-2 resize-none h-full"
            name="message"
            required
            placeholder="Message"
          />
          <input
            className=" w-full h-[80px] bg-zinc-700 rounded text-white border-2 border-solid border-zinc-700 hover:border-secondary"
            type="submit"
            value="Send Now"
          />
        </form>
      </div>
    </section>
  );
};
export default Contact;
