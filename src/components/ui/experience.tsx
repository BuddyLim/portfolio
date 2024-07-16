import { useIntersectionStore } from "@/store/intersection";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import { MaskedIcon, NewTabLink } from "./common";
import { Badge } from "./badge";
import { openNewTabRedirect } from "@/lib/utils";

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
        className="cursor-pointer group hover:bg-[#02C9D7]/[.045] transition-all duration-300 rounded-md px-8 md:px-2 pt-4 pb-2"
        onClick={() => {
          openNewTabRedirect(url);
        }}
        key={title}
      >
        <TimelineHeading
          side="left"
          className="w-full text-xs md:text-sm text-[#D0C7C7] line-clamp-none whitespace-pre-line text-right flex flex-col font-thin"
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
          <p className="mt-6 text-[#D0C7C7] text-sm md:text-md line-clamp-none whitespace-pre-line font-thin">
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

export const Experience = ({
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
        className="[&>li]:grid-cols-[0.63fr_min-content_3fr] min-[419px]:[&>li]:grid-cols-[0.485fr_min-content_3fr] [&>li]:gap-x-2 sm:[&>li]:gap-x-3"
      >
        <ExperienceTimeline />
      </Timeline>
      <div className="h-12 mt-5 pl-28">
        <NewTabLink
          url="/resume.pdf"
          className="flex flex-row gap-2 text-sm md:text-base w-fit font-thin"
        >
          <>
            <span>View Full Resume</span>
            <MaskedIcon iconURL="/icons/forward.svg" />
          </>
        </NewTabLink>
      </div>
    </section>
  );
};

export default Experience;
