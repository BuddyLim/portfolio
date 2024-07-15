import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { forwardRef, HTMLProps, useEffect, useRef } from "react";

import { useIntersectionStore } from "@/store/intersection";

import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import useWindowSize from "@/hooks/useWindowSize";

import RectangleRed from "/icons/r.svg";
import HalfYellow from "/icons/hf-y.svg";
import CircleGreen from "/icons/f-g.svg";
import Triangle from "/icons/t.svg";

import "./App.css";

interface NewTabLinkProps extends React.PropsWithChildren {
  url: string;
  children: string | React.ReactElement;
  className?: HTMLProps<HTMLElement>["className"];
}

const openNewTabRedirect = (url: string) => {
  window.open(url, "_blank");
};

const NewTabLink = ({ url, className = "", children }: NewTabLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`hover:text-[#02C9D7] group-hover:text-[#02C9D7] group-hover:text-[1.02rem] md:group-hover:text-[1.16rem] duration-300 transition-all group md:hover:text-[1.16rem] hover:text-[1.02rem]
    focus:outline-none focus-visible:text-[#02C9D7] focus:ring-2 ring-inset focus:border-[#02C9D7]/30 focus-visible:ring-[#02C9D7]/30 cursor-pointer ${className}`}
    onClick={(event) => event.currentTarget.blur()}
  >
    {children}
  </a>
);

const Header = () => {
  const { view } = useIntersectionStore();
  const scrollToView = (id: string) => {
    if (document.getElementById(id) == null) return;

    window.scrollTo({
      behavior: "smooth",
      top:
        document.getElementById(id)!.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        60,
    });
  };

  const headerList = [
    {
      id: "about",
      text: "About",
    },
    {
      id: "experience",
      text: "Experience",
    },
    {
      id: "projects",
      text: "Projects",
    },
  ];

  return (
    <header className="fixed bg-[#242222] z-10 w-full max-w-[443px]">
      <div className="grid grid-flow-col border-b-[#D0C7C7] border-b-[0.2px] py-3 px-2 justify-between">
        {headerList.map(({ id, text }) => (
          <motion.button
            key={id}
            className="text-sm md:text-lg lg:text-xl focus:outline-none focus:ring focus:ring-[#02C9D7]/30"
            onClick={(e) => {
              e.currentTarget.blur();
              scrollToView(id);
            }}
            animate={{
              opacity: view === id ? 1 : 0.2,
            }}
          >
            {text}
          </motion.button>
        ))}
      </div>
    </header>
  );
};

const About = forwardRef(
  (
    { windowHeight }: { windowHeight: number },
    fadeOutRef: React.ForwardedRef<HTMLElement>
  ) => {
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef, {
      // margin: "-100px 0px 0px 0px",
      amount: windowHeight > 420 ? 0.6 : 0.2,
    });
    const { view, setCurrentView } = useIntersectionStore();

    useEffect(() => {
      if (view !== "about") {
        setCurrentView("about");
      }
    }, [isInView]);

    const additionalLinks = [
      {
        iconURL: "./icons/linkedin.svg",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/lim-kt/",
      },
      {
        iconURL: "./icons/github.svg",
        text: "Github",
        url: "https://github.com/BuddyLim",
      },
      {
        iconURL: "./icons/resume.svg",
        text: "Resume",
        url: "./resume.pdf",
      },
      {
        iconURL: "./icons/email.svg",
        text: "Email",
        url: "mailto:buddy.tlimk@gmail.com",
      },
    ];

    return (
      <section
        ref={fadeOutRef}
        className="flex flex-col gap-24 items-center relative min-h-lvh justify-center"
        id="about"
      >
        <div
          ref={inViewRef}
          className="flex flex-col flex-initial items-start pl-10 min-[374px]:pl-0 text-[#F2F2F2] pt-20"
        >
          <span className="text-1xl md:text-2xl lg:text-3xl">Hello! I'm —</span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            Lim Kuang Tar
          </span>
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold mt-8">
            Fullstack Developer
          </span>
          <span className="text-sm md:text-lg lg:text-xl w-80 text-start mt-2">
            Ready to deliver your big ideas to life
          </span>
        </div>
        <ul
          className="flex flex-col gap-y-9 items-center"
          // style={{ opacity: scrollYProgressLinks }}
        >
          {additionalLinks.map(({ iconURL, text, url }) => (
            <li className="h-12" key={url}>
              <NewTabLink url={url} className="flex flex-row gap-2">
                <>
                  <MaskedIcon iconURL={iconURL} />
                  <span className="text-sm md:text-md lg:text-base">
                    {text}
                  </span>
                </>
              </NewTabLink>
            </li>
          ))}
        </ul>
      </section>
    );
  }
);

const ExperienceTimeline = () => {
  const timelineArr = [
    {
      start: "2022",
      end: "Present",
      title: "Digital Solutions Engineer - Airbus",
      content:
        "Develop end to end digital solutions based on new and emerging technologies. Working closely with innovation team to help bring forth and validate ideas",
      badges: [
        "Typescript",
        "Python",
        "React",
        "Flask",
        "Docker",
        "Framer Motion",
        "Rust & Tauri",
        "AWS",
        "GenAI",
      ],
      url: "https://www.airbus.com/en",
    },
    {
      start: "2021",
      end: "2022",
      title: "Software Associate - Redsquare",
      content:
        "Developed, shipped and maintained high quality websites for multiple clients with other engineers while mentoring junior engineers",
      badges: [
        "TS/JS",
        "Python",
        "NextJS",
        "Ant Design",
        "Django",
        "Docker",
        "GraphQL",
        "Wagtail CMS",
        "AWS",
      ],
      url: "https://www.redsquare.software/",
    },
    {
      start: "2020",
      end: "2021",
      title: "Web/UX Developer - SEAM LLC",
      content:
        "Developed storytelling platform both in the front end and back end while working closely with other engineers and designers",
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
      url: "https://www.seam.tv/",
    },
  ];

  return timelineArr.map((timelineObj, index) => {
    const { start, end, title, content, badges, url } = timelineObj;
    return (
      // <a href={url} target="_blank" tabIndex={-1}>
      <TimelineItem
        className="cursor-pointer group hover:bg-[#02C9D7]/[.03] transition-all duration-300 rounded-md px-8 md:px-2 py-4"
        onClick={() => {
          openNewTabRedirect(url);
        }}
        key={title}
      >
        <TimelineHeading
          side="left"
          className="w-full text-xs md:text-sm text-[#D0C7C7] line-clamp-none whitespace-pre-line text-right flex flex-col"
        >
          <time>{end}</time>
          <time>{start}</time>
        </TimelineHeading>
        <TimelineHeading
          side="right"
          className="line-clamp-none whitespace-pre-line font-normal text-[#F2F2F2] text-base md:text-lg"
        >
          <NewTabLink url={url}>{title}</NewTabLink>
        </TimelineHeading>
        <TimelineDot status="current" />
        {index === timelineArr.length - 1 ? null : <TimelineLine done />}
        <TimelineContent side="right">
          <p className="mt-6 text-[#D0C7C7] text-sm md:text-md line-clamp-none whitespace-pre-line">
            {content}
          </p>
          <ul className="flex flex-wrap gap-1.5 mt-8">
            {badges.map((badge) => (
              <Badge
                className="text-xs lg:text-sm font-thin"
                variant={"outline"}
                key={badge}
              >
                {badge}
              </Badge>
            ))}
          </ul>
        </TimelineContent>
      </TimelineItem>
      // </a>
    );
  });
};

const MaskedIcon = ({ iconURL }: { iconURL: string }) => {
  return (
    <span
      className="icon bg-[#F2F2F2] group-hover:bg-[#02C9D7] duration-300 mb-[2px] w-5 h-5 flex group-focus-within:bg-[#02C9D7] active:bg-[#F2F2F2]"
      style={{
        maskImage: `url(${iconURL})`,
        WebkitMaskImage: `url(${iconURL})`,
      }}
    />
  );
};

const Experience = ({
  showTitle,
  windowHeight,
}: {
  showTitle: boolean;
  windowHeight: number;
}) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, {
    // margin: "100% 0px 0px 0px",
    amount: windowHeight > 420 ? 0.5 : 0.2,
  });
  const { view, setCurrentView } = useIntersectionStore();

  useEffect(() => {
    if (view !== "experience") {
      setCurrentView("experience");
    }
  }, [isInView]);

  return (
    <section ref={inViewRef} className="mt-32 w-full sm:px-0" id="experience">
      {showTitle ? (
        <p className="my-8 text-lg text-[#02C9D7]/[.8]">Experience</p>
      ) : null}
      <Timeline
        positions="left"
        className="[&>li]:grid-cols-[0.63fr_min-content_3fr] min-[419px]:[&>li]:grid-cols-[0.485fr_min-content_3fr] [&>li]:gap-x-1 sm:[&>li]:gap-x-3"
      >
        <ExperienceTimeline />
      </Timeline>
      <div className="h-12 mt-5 pl-28">
        <NewTabLink
          url="./resume.pdf"
          className="flex flex-row gap-2 text-sm md:text-base w-fit"
        >
          <>
            <span>View Full Resume</span>
            <MaskedIcon iconURL="./icons/forward.svg" />
          </>
        </NewTabLink>
      </div>
    </section>
  );
};

const Projects = ({
  showTitle,
  windowHeight,
}: {
  showTitle: boolean;
  windowHeight: number;
}) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, {
    // margin: "100px 0px 0px 0px",
    amount: windowHeight > 420 ? 0.4 : 0.2,
  });
  const { view, setCurrentView } = useIntersectionStore();

  useEffect(() => {
    if (view !== "projects") {
      setCurrentView("projects");
    }
  }, [isInView]);

  const projectsArr = [
    {
      title: "Mywheels",
      imgSrc: "./icons/mywheels.svg",
      description:
        "SEO friendly automotive news web-platform for Chinapress. Made for web and mobile with NextJS, Ant Design, Django, GraphQL, WagtailCMS and PostgreSQL",
      imgAltDesc: "Image of Mywheels website",
      url: "https://mywheels.my",
    },
    {
      title: "Jamit!",
      imgSrc: "./icons/jamit.svg",
      description:
        "Storytelling web platform with a gamification twist. Made for web with React, Material UI, Express, GraphQL, Websockets and MongoDB",
      imgAltDesc: "Image of Jamit! website",
      url: "https://client.jamit.io",
    },
    {
      title: "buddylim.github.io/portfolio (v1)",
      imgSrc: "./icons/portfolio-v1.svg",
      description:
        "Personal portfolio designed on Figma, built with React and Framer Motion",
      imgAltDesc: "Image of my v1 portfolio website",

      url: "https://buddylim.github.io/portfolio-v1",
    },
  ];

  return (
    <section ref={inViewRef} className="flex flex-col mt-32" id="projects">
      {showTitle ? (
        <p className="my-8 text-lg text-[#02C9D7]/[.8]">Projects</p>
      ) : null}
      {projectsArr.map(({ title, imgSrc, description, url, imgAltDesc }) => (
        <div
          className="flex flex-col hover:bg-[#02C9D7]/[.05] transition-all duration-300 rounded-md cursor-pointer group px-12 md:px-8 py-14"
          onClick={() => {
            openNewTabRedirect(url);
          }}
          key={title}
        >
          <div>
            <AspectRatio ratio={16 / 9}>
              <img
                width="640"
                height="360"
                src={imgSrc}
                className="object-cover mt-1 w-[100%]"
                alt={imgAltDesc}
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col items-start mt-2 ">
            <NewTabLink
              url={url}
              className="inline-block align-baseline leading-10  text-base md:text-lg"
            >
              {title}
            </NewTabLink>
            <p className="text-start text-sm md:text-md text-[#D0C7C7] mt-2">
              {description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="mt-44 text-[#D0C7C7] text-xs mb-8 px-8 md:px-0">
      <p>
        Portfolio designed on Figma. Built using React, Vite, Tailwind, Framer
        Motion and shadcn
      </p>
    </footer>
  );
};

const BackgroundImage = ({
  url,
  className,
  mousePosition,
}: {
  url: string;
  className?: HTMLProps<HTMLElement>["className"];
  mousePosition?: { x: number; y: number };
}) => {
  return (
    <motion.img
      animate={mousePosition}
      className={`${className}`}
      src={url}
      transition={{ type: "tween" }}
      alt={`background-image-${url}`}
    />
  );
};

const Background = ({ opacity }: { opacity: MotionValue<number> }) => {
  //Parallax scroll fade out opacity!!
  return (
    <motion.div
      className="w-[100%] h-screen fixed -z-1"
      style={{ opacity: opacity }}
    >
      <BackgroundImage
        url={RectangleRed}
        className="absolute bottom-10 min-[549px]:bottom-16 lg:bottom-44 -right-28 min-[549px]:-right-24 h-36 lg:h-48"
      />
      <BackgroundImage
        url={HalfYellow}
        className="absolute -bottom-16 min-[549px]:-bottom-18 -right-6 min-[549px]:-right-0 lg:right-0 h-40 min-[549px]:h-48 lg:h-72"
      />
      <BackgroundImage
        url={Triangle}
        className="absolute top-8 min-[549px]:top-16 lg:top-24 -left-[7.5rem] min-[549px]:-left-28 h-40 min-[549px]:h-48 lg:h-64"
      />
      <BackgroundImage
        url={CircleGreen}
        className="absolute -top-10 min-[549px]:-top-8 -left-20 min-[549px]:-left-14 h-40 min-[549px]:h-44 lg:h-60"
      />
    </motion.div>
  );
};

function App() {
  const { width = 0, height = 0 } = useWindowSize();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 0.4", "start .5"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [width > 549 ? 1 : 0.2, 1]
  );

  const showTitle = width > 549 ? false : true;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Background opacity={opacity} />
      {showTitle ? null : <Header />}
      <div className="min-[500px]:w-[443px] relative z-1 overflow-x-none">
        <main className="relative" style={{ position: "relative" }}>
          <About ref={ref} windowHeight={height} />
          <Experience showTitle={showTitle} windowHeight={height} />
          <Projects showTitle={showTitle} windowHeight={height} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
