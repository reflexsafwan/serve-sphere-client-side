import AllVolunteerNeed from "./AllVolunteerNeed";
import Hero from "./Hero";

import { useLoaderData } from "react-router";

const Home = () => {
  const volunteerPromise = useLoaderData();
  const volunteerPosts = volunteerPromise.data;
  console.log(volunteerPosts);
  return (
    <div>
      <Hero></Hero>
      <AllVolunteerNeed></AllVolunteerNeed>
    </div>
  );
};

export default Home;
