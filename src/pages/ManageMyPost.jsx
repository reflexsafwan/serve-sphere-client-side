import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import MyVolunteerNeedPosts from "./MyVolunteerNeedPosts";
import MyVolunteerRequest from "./MyVolunteerRequest";

const ManageMyPost = () => {
  return (
    <div>
      <div>
        <div className="text-center mb-10 ">
          <h2 className="text-2xl font-bold">
            MY 
            <span className="text-[#EB5971]"> volunteer Needs </span> Posts
          
          </h2>
          <p className="text-gray-400 mt-2 text-xl font-thin">
            Join our mission to uplift lives. Your time, skills, and heart
            <br /> can create lasting change. Volunteer today and inspire hope
          </p>
        </div>
        <MyVolunteerNeedPosts></MyVolunteerNeedPosts>
      </div>

      <div>
        <div className="text-center mt-4 mb-10 ">
          <h2 className="text-2xl font-bold">
            MY
            <span className="text-[#EB5971]"> volunteer </span>
            <span className="text-[#EB5971]">requests</span>
          </h2>
          <p className="text-gray-400 mt-2 text-xl font-thin">
            Join our mission to uplift lives. Your time, skills, and heart
            <br /> can create lasting change. Volunteer today and inspire hope
          </p>
        </div>
        <MyVolunteerRequest></MyVolunteerRequest>
      </div>
    </div>
  );
};

export default ManageMyPost;
