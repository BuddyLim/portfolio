import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";

import linkedinLogo from "/linkedin.svg";
import githubLogo from "/github.svg";
import resumeLogo from "/resume.svg";
import emailLogo from "/email.svg";

const Header = () => {
  return (
    <header className="fixed top-0 py-3 px-0.5 bg-[#242222]">
      <div className="flex gap-24 border-b-[#D0C7C7] border-b-[0.2px] py-3">
        <span className="text-xl">About</span>
        <span className="text-xl">Experience</span>
        <span className="text-xl">Projects</span>
      </div>
    </header>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress: scrollYProgressIntro } = useScroll({
    target: ref,
    offset: ["end 0.5", "start .5"],
  });

  const { scrollYProgress: scrollYProgressLinks } = useScroll({
    target: ref,
    offset: ["end 0.1", "start 0.25"],
  });

  return (
    <div ref={ref} className="flex flex-col gap-24 mt-40">
      <motion.div
        className="flex flex-col flex-initial items-start"
        // style={{ opacity: scrollYProgressIntro }}
      >
        <span className="text-3xl">Hello! I'm -</span>
        <span className="text-6xl font-bold mt-2">Lim Kuang Tar</span>
        <span className="text-3xl font-semibold mt-8">Fullstack Developer</span>
        <span className="text-xl w-80 text-start mt-2">
          I build holistic end to end solutions
        </span>
      </motion.div>
      <div
        className="flex flex-col gap-y-9 items-center"
        // style={{ opacity: scrollYProgressLinks }}
      >
        <Button variant="ghost" className="flex justify-center gap-2">
          <img src={linkedinLogo} />
          <span>LinkedIn</span>
        </Button>
        <Button variant="ghost" className="flex justify-center gap-2">
          <img src={githubLogo} />
          <span>Github</span>
        </Button>
        <Button variant="ghost" className="flex justify-center gap-2">
          <img src={resumeLogo} />
          <span>Resume</span>
        </Button>
        <Button variant="ghost" className="flex justify-center gap-2">
          <img src={emailLogo} />
          <span>Email</span>
        </Button>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <About />
    </ThemeProvider>
  );
}

export default App;
