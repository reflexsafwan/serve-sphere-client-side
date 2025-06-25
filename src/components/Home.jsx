import AllVolunteerNeed from "./AllVolunteerNeed";
import Hero from "./Hero";

import { useLoaderData } from "react-router";

const Home = () => {
  const volunteerPosts = useLoaderData();
  console.log(volunteerPosts);
  return (
    <div>
      <Hero></Hero>
      <AllVolunteerNeed volunteerPosts={volunteerPosts}></AllVolunteerNeed>
    </div>
  );
};

export default Home;
