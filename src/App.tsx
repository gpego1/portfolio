import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".section-heading, .about-card, .skill-group, .project-card, .experience-item, .contact-channel");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    targets.forEach((target) => { target.classList.add("reveal-on-scroll"); observer.observe(target); });
    return () => observer.disconnect();
  }, []);

  return <><Navbar/><main><Hero/><About/><Skills/><Projects/><Experience/><Contact/></main><Footer/></>;
}
export default App;
