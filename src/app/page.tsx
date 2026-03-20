import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <main className="container">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
