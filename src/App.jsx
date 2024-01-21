import React from "react";
import { Navbar, Hero, Experience, Skills, About } from "./components";
import styles from "./styles";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} h-[52.18vh]`}
      >
        <div className={styles.boxWidth}>
          <Experience /> <Skills /> <About />
        </div>
      </div>
    </div>
  );
}

export default App;
