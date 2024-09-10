import { Metadata } from "next";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Hero from "./pages/hero";
import Navbar from "./pages/navbar";
import Services from "./pages/services";
import Skills from "./pages/skills";

export const metadata: Metadata = {
  title: "Oguzhan Onal Portfolio",
  description: "Full Stack Developer Oguzhan Onal Personal Site",
  creator: "Oguzhan ONAL",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TailwindCSS",
    "Oguzhan ONAL",
    "Oguzhan",
    "ONAL",
  ],
};
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
