import React from "react";
import SingleVolunteerNeed from "./SingleVolunteerNeed";

const AllVolunteerNeed = ({ volunteerPosts }) => {
  console.log(volunteerPosts);
  return (
    <div>
      <div className="text-center mt-20 mb-10 ">
        <h2 className="text-4xl font-bold">
          "Building Stronger <span className="text-[#2B7FFF]">Communities</span>
          , One <br /> <span className="text-[#2B7FFF]">Volunteer</span> at a
          Time ."
        </h2>
        <p className="text-gray-400 mt-8 text-2xl font-thin">
          Authoritatively create covalent materials and innovative results.{" "}
          <br />
          Continually disseminate alternative ROI rather than.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {volunteerPosts?.map((post) => (
          <SingleVolunteerNeed post={post} key={post._id}></SingleVolunteerNeed>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeed;
