import { useIntersectionStore } from "@/store/intersection";
import { useInView } from "framer-motion";
import { forwardRef, useEffect, useRef } from "react";
import { NewTabLink, MaskedIcon } from "@/components/ui/common";

export const About = forwardRef(
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
        iconURL: "/icons/linkedin.svg",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/lim-kt/",
      },
      {
        iconURL: "/icons/github.svg",
        text: "Github",
        url: "https://github.com/BuddyLim",
      },
      {
        iconURL: "/icons/resume.svg",
        text: "Resume",
        url: "/resume.pdf",
      },
      {
        iconURL: "/icons/email.svg",
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
          <span className="text-1xl md:text-2xl lg:text-3xl font-light">
            Hello! I'm —
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            Lim Kuang Tar
          </span>
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold mt-8">
            Fullstack Developer
          </span>
          <span className="text-sm md:text-lg lg:text-xl w-80 text-start mt-2 font-light">
            Ready to deliver your next big ideas to life
          </span>
        </div>
        <ul
          className="flex flex-col gap-y-9 items-center"
          // style={{ opacity: scrollYProgressLinks }}
        >
          {additionalLinks.map(({ iconURL, text, url }) => (
            <li className="h-12" key={url}>
              <NewTabLink
                url={url}
                className="flex flex-row gap-2 font-light items-center"
              >
                <>
                  <MaskedIcon iconURL={iconURL} />
                  <span className="text-sm md:text-md lg:text-base ">
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
