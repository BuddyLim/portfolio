import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "./components/ui/timeline/timeline";
import "./App.css";

import linkedinLogo from "/icons/linkedin.svg";
import githubLogo from "/icons/github.svg";
import resumeLogo from "/icons/resume.svg";
import emailLogo from "/icons/email.svg";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const Header = () => {
  return (
    <header className="fixed top-0 py-3 px-0.5 bg-[#242222] z-10">
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
          I build holistic end to end digital solutions
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

const ExperienceTimeline = () => {
  const timelineArr = [
    {
      time: "2022 - Present",
      title: "Digital Solutions Engineer - Airbus",
      content:
        "I work to develop and provide inputs on innovative solutions in the aerospace industry using both current and new emerging technologies",
      badges: [
        "Typescript",
        "Python",
        "React",
        "Flask",
        "Docker",
        "Framer Motion",
        "Rust & Tauri",
        "Lambdas (AWS)",
        "API Gateway (AWS)",
        "DynamoDB (AWS)",
        "S3 (AWS)",
        "Textract (AWS)",
        "Langchain",
        "LlamaCPP",
        "GenAI",
      ],
    },
    {
      time: "2021 - 2022",
      title: "Software Associate - Redsquare Software",
      content:
        "My primary responsibility is to develop Front-End using React & Back-End using Django. I work with teams of 6 to develop and deliver solutions that are 20 screens and above per projects as per required by clients.",
      badges: [
        "TS/JS",
        "Python",
        "NextJS",
        "Ant Design",
        "Django",
        "Docker",
        "GraphQL",
        "Wagtail CMS",
        "S3 (AWS)",
        "Cloudfront (AWS)",
        "EC2 (AWS)",
      ],
    },
    {
      time: "2020 - 2021",
      title: "Web/UX Developer - SEAM LLC",
      content:
        "My primary responsibility is to develop Front-End using React & Back-End using Django. I work with teams of 6 to develop and deliver solutions that are 20 screens and above per projects as per required by clients.",
      badges: [
        "Javascript",
        "NodeJS",
        "React",
        "Material UI",
        "Express",
        "Websockets",
        "GraphQL",
        "MongoDB",
      ],
    },
  ];

  return timelineArr.map((timelineObj, index) => {
    const { time, title, content, badges } = timelineObj;
    return (
      <TimelineItem>
        <TimelineHeading side="left" className="w-full text-sm">
          {time}
        </TimelineHeading>
        <TimelineHeading
          side="right"
          className="line-clamp-none whitespace-pre-line"
        >
          {title}
        </TimelineHeading>
        <TimelineDot status="current" />
        {index === timelineArr.length - 1 ? null : <TimelineLine done />}
        <TimelineContent side="right">
          <p className="mt-5">{content}</p>
          <div className="flex flex-wrap gap-1.5 mt-5">
            {badges.map((badge) => (
              <Badge variant={"outline"}>{badge}</Badge>
            ))}
          </div>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const Experience = () => {
  return (
    <div className="mt-32 w-full">
      <Timeline
        positions="left"
        className="[&>li]:grid-cols-[1.2fr_min-content_3fr] [&>li]:gap-x-5"
      >
        <ExperienceTimeline />
      </Timeline>
    </div>
  );
};

const Projects = () => {
  const projectsArr = [
    {
      title: "Mywheels",
      imgSrc: "/icons/mywheels.svg",
      description:
        "SEO friendly automotive news web-platform for Chinapress. Made for web and mobile with NextJS, Ant Desgin, Django, GraphQL, WagtailCMS and PostgreSQL",
    },
    {
      title: "Jamit!",
      imgSrc: "/icons/jamit.svg",
      description:
        "Storytelling web platform with a gamification twist. Made for web with React, Material UI, Express, GraphQL, Websockets and MongoDB",
    },
    {
      title: "buddylim.github.io/portfolio (v1)",
      imgSrc: "/icons/portfolio-v1.svg",
      description:
        "Personal portfolio designed on Figma, built with React and Framer Motion",
    },
  ];

  return (
    <div className="flex flex-col mt-32 gap-20">
      {projectsArr.map((project) => {
        const { title, imgSrc, description } = project;
        return (
          <div className="flex flex-row">
            <div className="w-[40%]">
              <AspectRatio ratio={16 / 9}>
                <img src={imgSrc} className="object-cover mt-[5px]" />
              </AspectRatio>
            </div>
            <div className="flex flex-col justify-start items-start w-[60%]">
              <span>{title}</span>
              <p className="text-start text-sm text-[#D0C7C7] mt-4">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-40 text-[#D0C7C7] text-sm mb-8">
      <p>
        Portfolio designed on Figma. Built using React, Vite, Tailwind, Framer
        Motion and ShadCN
      </p>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-[443px]">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
