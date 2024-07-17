import { useScroll, useTransform } from "framer-motion";
import { lazy, Suspense, useRef } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { About } from "@/components/ui/about";
import { Background, Footer } from "@/components/ui/layout";
import useWindowSize from "@/hooks/useWindowSize";

const Projects = lazy(() => import("@/components/ui/projects"));
const Experience = lazy(() => import("@/components/ui/experience"));
const Header = lazy(() => import("@/components/ui/header"));

import "./App.css";

function App() {
  const { width = 0, height = 0 } = useWindowSize();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 0.1", "start 0.5"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [width > 549 ? 1 : 0.2, 1]
  );

  const showTitle = width > 549 ? false : true;

  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
