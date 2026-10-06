import React from "react";
import Header from "../components/Header";
import WhoAmI from "../sections/WhoAmI";
import ExperienceEstudies from "../sections/ExperienceStudies";
import CTFPreview from "../components/CTFPreview";
import Projects from "../sections/Projects";
import Pwn from "../sections/Pwn";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <WhoAmI />
        <ExperienceEstudies />
        <Pwn />
        <Projects />
        <CTFPreview />
      </main>
    </div>
  );
}

