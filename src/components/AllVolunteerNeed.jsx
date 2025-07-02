import React, { useEffect, useState } from "react";
import SingleVolunteerNeed from "./SingleVolunteerNeed";

import axios from "axios";

const AllVolunteerNeed = () => {
 
  // const allVolunteerNeedData = useLoaderData().data;
  const [allVolunteerNeedData, setAllVolunteerNeedData] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios(
      `${
        import.meta.env.VITE_API_URL
      }/all-volunteer-Need?searchParams=${search}`
    )
      .then((data) => setAllVolunteerNeedData(data.data))
      .catch((err) => console.log(err));
  }, [search]);
  console.log(search);
  return (
    <div>
      <div className="text-center mt-20 mb-10 ">
        <h2 className="text-4xl font-bold">
          "Building Stronger <span className="text-[#EB5971]">Communities</span>
          , One <br /> <span className="text-[#EB5971]">Volunteer</span> at a
          Time ."
        </h2>
        <p className="text-gray-400 mt-8 text-2xl font-thin">
          Authoritatively create covalent materials and innovative results.
          <br />
          Continually disseminate alternative ROI rather than.
        </p>
      </div>
      <div className="flex justify-center">
        <label className="input ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {allVolunteerNeedData?.map((post) => (
          <SingleVolunteerNeed post={post} key={post._id}></SingleVolunteerNeed>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeed;
