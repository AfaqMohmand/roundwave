import React from "react";
import NavBar from "../components/nav/nav";
import SectOne from "../components/sectionOne";
import SectionThree from "../components/sectionThree";
import SectionTwo from "../components/sectionTwo/SectionTwo";
import TraitStats from "../components/TraitStats/index";
import TheTeam from "../components/TheTeam";
import RoadMap from "../components/RoadMap/index";
import Utilities from "../components/utilities/Utilities";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer/Footer";
// import DummyWork from "../components/DummyWork/DummyWork";
function Home() {
  return (
    <div>
      <NavBar />
      <SectOne />
      <SectionTwo />
      <SectionThree />
      {/* <DummyWork /> */}
      <Utilities />
      <RoadMap />
      <TraitStats />
      <TheTeam />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
