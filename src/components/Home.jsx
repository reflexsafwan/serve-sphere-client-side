import Footer from "../sharedPages/Footer";
import AllVolunteerNeed from "./AllVolunteerNeed";
import ContactSection from "./ContactSection";
import Hero from "./Hero";
import ImpactSection from "./ImpactSection";

import VolunteerPostsForHome from "./VolunteerPostsForHome";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      {/* <AllVolunteerNeed></AllVolunteerNeed> */}
      <VolunteerPostsForHome></VolunteerPostsForHome>
      <ContactSection></ContactSection>
      <ImpactSection></ImpactSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
