import { NewTabLink } from "@/components/ui/common";
import { openNewTabRedirect } from "@/lib/utils";
import { useIntersectionStore } from "@/store/intersection";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
      imgSrc: "/icons/mywheels.svg",
      description:
        "SEO friendly automotive news web-platform for Chinapress. Made for web and mobile with NextJS, Ant Design, Django, GraphQL, WagtailCMS and PostgreSQL",
      imgAltDesc: "Image of Mywheels website",
      url: "https://mywheels.my",
    },
    {
      title: "Jamit!",
      imgSrc: "/icons/jamit.svg",
      description:
        "Storytelling web platform with a gamification twist. Made for web with React, Material UI, Express, GraphQL, Websockets and MongoDB",
      imgAltDesc: "Image of Jamit! website",
      url: "https://client.jamit.io",
    },
    {
      title: "buddylim.github.io/portfolio (v1)",
      imgSrc: "/icons/portfolio-v1.svg",
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
          className="flex flex-col hover:bg-[#02C9D7]/[.045] transition-all duration-300 rounded-md cursor-pointer group px-12 md:px-8 py-14"
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
                loading="lazy"
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
            <p className="text-start text-sm md:text-md text-[#D0C7C7] mt-2 font-thin">
              {description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
