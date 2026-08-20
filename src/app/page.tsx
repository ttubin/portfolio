import styles from "./page.module.scss";

import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Others from "@/components/Others/Others";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <main className={styles.container}>
        <Intro />
        <About />
        <Projects />
        <Others
          project={{
            num: 0,
            title: "",
            summary: "",
            link: "",
            period: "",
            company: "",
            stack: [],
            tasks: [],
            image: "",
            modal: "",
          }}
        />
        <Contact />
      </main>
    </div>
  );
}
