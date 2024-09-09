import About from "./components/about";
import Build from "./components/build";
import Footer from "./components/footer";
import Hire from "./components/hire";
import Navbar from "./components/navbar";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <div className="mt-[68px] px-[10rem] 2xl:px-[25rem] md:px-0 flex flex-col  ">
        <Navbar></Navbar>
        <Hire></Hire>
        <About></About>
        <Services></Services>
        <Build></Build>
      </div>
      <Footer></Footer>
    </div>
  );
}
