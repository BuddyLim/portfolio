import { motion, MotionValue } from "framer-motion";
import { HTMLProps } from "react";
import CircleGreen from "/icons/f-g.svg";
import HalfYellow from "/icons/hf-y.svg";
import RectangleRed from "/icons/r.svg";
import Triangle from "/icons/t.svg";

export const Footer = () => {
  return (
    <footer className="mt-44 text-[#D0C7C7] text-xs mb-8 px-8 md:px-0 font-thin">
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

export const Background = ({ opacity }: { opacity: MotionValue<number> }) => {
  //Parallax scroll fade out opacity!!
  return (
    <motion.div
      className="w-[100%] h-screen fixed -z-1"
      style={{ opacity: opacity }}
    >
      <BackgroundImage
        url={RectangleRed}
        className="absolute bottom-16 min-[549px]:bottom-16 lg:bottom-44 -right-28 min-[549px]:-right-24 h-36 lg:h-48"
      />
      <BackgroundImage
        url={HalfYellow}
        className="absolute -bottom-10 min-[549px]:-bottom-18 -right-4 min-[549px]:-right-0 lg:right-0 h-40 min-[549px]:h-48 lg:h-72"
      />
      <BackgroundImage
        url={Triangle}
        className="absolute top-8 min-[549px]:top-16 lg:top-24 -left-[6.5rem] min-[549px]:-left-28 h-40 min-[549px]:h-48 lg:h-64"
      />
      <BackgroundImage
        url={CircleGreen}
        className="absolute -top-10 min-[549px]:-top-8 -left-20 min-[549px]:-left-14 h-40 min-[549px]:h-44 lg:h-60"
      />
    </motion.div>
  );
};
