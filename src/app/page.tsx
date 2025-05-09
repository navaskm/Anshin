import Header from "../../Component/Header/Header";
import HomeDetails from "../../Component/Home/Home";
import AboutMe from "../../Component/AboutMe/AboutMe";
import Resume from "../../Component/Resume/Resume";
import Services from "../../Component/Services/Services";
import Skills from "../../Component/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeDetails/>
      <AboutMe/>
      <Resume/>
      <Services/>
      <Skills/>
    </>
  );
}