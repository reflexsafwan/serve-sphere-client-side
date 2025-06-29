import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import MyVolunteerNeedPosts from "./MyVolunteerNeedPosts";
import MyVolunteerRequest from "./MyVolunteerRequest";


const ManageMyPost = () => {
  return (
  
    <div>
      <MyVolunteerNeedPosts></MyVolunteerNeedPosts>

      <MyVolunteerRequest></MyVolunteerRequest>
    </div>
  );
};

export default ManageMyPost;
