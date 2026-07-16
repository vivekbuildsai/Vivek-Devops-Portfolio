import Background from "./components/ui/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function App() {
  return (
    <>
      <Background />

      <div className="relative min-h-screen text-white">
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </>
  );
}
