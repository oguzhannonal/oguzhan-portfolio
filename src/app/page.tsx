import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Hero from "./pages/hero";
import Navbar from "./pages/navbar";
import Services from "./pages/services";
import Skills from "./pages/skills";

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
