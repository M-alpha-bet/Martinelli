import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillStack from "./components/SkillStack";

export default function App() {
  return (
    <div className="bg-silver-shine">
      <Header />
      <Hero />
      <SkillStack />
      <Projects />
      <Experience />
      <AboutMe />
      <Footer />
    </div>
  );
}
