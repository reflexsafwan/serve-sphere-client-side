import Footer from "../sharedPages/Footer";
import AllVolunteerNeed from "./AllVolunteerNeed";
import ContactSection from "./ContactSection";
import Hero from "./Hero";
import ImpactSection from "./ImpactSection";
import UpcomingEvents from "./UpcomingEvents";

import VolunteerPostsForHome from "./VolunteerPostsForHome";
import VolunteerStories from "./VolunteerStories";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      {/* <AllVolunteerNeed></AllVolunteerNeed> */}
      <VolunteerPostsForHome></VolunteerPostsForHome>
      <UpcomingEvents></UpcomingEvents>
      <ContactSection></ContactSection>
      <ImpactSection></ImpactSection>
      <VolunteerStories></VolunteerStories>
      <Footer></Footer>
    </div>
  );
};

export default Home;
