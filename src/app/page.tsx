// import styles from "./page.module.scss";

// import Header from "@/components/Header/Header";
// import Intro from "@/components/Intro/Intro";
// import About from "@/components/About/About";
// import Projects from "@/components/Projects/Projects";
// import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#c2d8c4" }}>
      <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "4rem", fontWeight: "bold", textAlign: "center" }}>
        현재 작업 중 입니다 🥹 <br />곧 포트폴리오로 찾아뵙겠습니다!
      </p>
    </div>
    // <div className={styles.wrap}>
    //   <Header />
    //   <main className={styles.container}>
    //     <Intro />
    //     <About />
    //     <Projects />
    //     <Contact />

    //
    //   </main>
    // </div>
  );
}
