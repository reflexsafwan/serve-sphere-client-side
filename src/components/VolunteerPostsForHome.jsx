import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleVolunteerNeed from "./SingleVolunteerNeed";
import { motion } from "motion/react";

const VolunteerPostsForHome = () => {
  const [VolunteerNeedsData, setVolunteerNeedsData] = useState();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/all-volunteer-Need-home`)
      .then((data) => {
        setVolunteerNeedsData(data.data);
        if (showAll) {
          setVolunteerNeedsData(data.data);
        } else {
          setVolunteerNeedsData(VolunteerNeedsData.slice(0, 6));
        }
      })
      .catch((err) => console.log(err));
  }, [showAll]);

  //   useEffect(() => {
  //     if (showAll) {
  //       return;
  //     } else {
  //       setVolunteerNeedsData(VolunteerNeedsData.slice(0, 6));
  //     }
  //   }, [VolunteerNeedsData, showAll]);

  return (
    <div>
      <div>
        <div className="text-center mt-20 mb-10 ">
          <h2 className="text-4xl font-bold">
            "Building Stronger{" "}
            <span className="text-[#EB5971]">Communities</span>
            , One <br /> <span className="text-[#EB5971]">Volunteer</span> at a
            Time ."
          </h2>
          <p className="text-gray-400 mt-8 text-2xl font-thin">
            Authoritatively create covalent materials and innovative results.{" "}
            <br />
            Continually disseminate alternative ROI rather than.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {VolunteerNeedsData?.map((post) => (
            <SingleVolunteerNeed
              post={post}
              key={post._id}
            ></SingleVolunteerNeed>
          ))}
        </div>
        <motion.div className="flex justify-center ">
          <button
            className="btn mb-4 bg-[#EB5971] hover:bg-[#EB5971] w-xl font-bold text-xl"
            onClick={() => setShowAll((prv) => !prv)}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerPostsForHome;
