import { Navbar } from "~/components/navbar";
import { Welcome } from "~/components/welcome";
import { Projects } from "~/components/projects";
import { Contact } from "~/components/contact";
import { AboutMe } from "~/components/aboutMe";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="page">
        <section id="home" className="section">
          <Welcome />
          <figure className="figure">
            <DotLottieReact src={`${import.meta.env.BASE_URL}lottie/animation1.lottie`} loop autoplay />
          </figure>
        </section>

        {/* <section className="section">
          <figure className="figure">
            <DotLottieReact src="/lottie/animation1.lottie" loop autoplay />
          </figure>
        </section> */}

        <section id="aboutme" className="section">
          <AboutMe />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Stefan</span>
        </footer>
      </main>
    </>
  );
}

