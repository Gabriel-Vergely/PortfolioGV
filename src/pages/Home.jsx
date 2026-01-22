import React from "react";
import Header from "../components/Header";
import WhoAmI from "../sections/WhoAmI";
import ExperienceEstudies from "../sections/ExperienceStudies";
import CTFPreview from "../components/CTFPreview";
import Projects from "../sections/Projects";
import Pwn from "../sections/Pwn";

export default function Home({ isDark }) {
  return (
    <div>
      <Header isDark={isDark} />
      <main>
        <WhoAmI isDark={isDark} />
        <ExperienceEstudies isDark={isDark} />
        <Pwn isDark={isDark} />
        <Projects isDark={isDark} />
        <CTFPreview isDark={isDark} />
      </main>
    </div>
  );
}

