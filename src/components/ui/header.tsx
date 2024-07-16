import { useIntersectionStore } from "@/store/intersection";
import { motion } from "framer-motion";

export const Header = () => {
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
              opacity: view === id ? 1 : 0.66,
              fontWeight: view === id ? 400 : 300,
            }}
          >
            {text}
          </motion.button>
        ))}
      </div>
    </header>
  );
};

export default Header;
