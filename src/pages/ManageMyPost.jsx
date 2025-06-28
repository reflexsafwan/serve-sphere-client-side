import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import MyVolunteerNeedPosts from "./MyVolunteerNeedPosts";
import MyVolunteerRequest from "./MyVolunteerRequest";


const ManageMyPost = () => {
  return (
    // <div className="w-7xl mx-auto   mt-10 ">
    //   <Tabs>
    //     <TabList>
    //       <Tab>My volunteer need post</Tab>
    //       <Tab>My Volunteer Request Post</Tab>
    //     </TabList>

    //     <TabPanel>
    //      <MyVolunteerNeedPosts></MyVolunteerNeedPosts>
    //     </TabPanel>
    //     <TabPanel>
    //     <MyVolunteerRequest></MyVolunteerRequest>
    //     </TabPanel>
    //   </Tabs>
    // </div>
    <div>
      <MyVolunteerNeedPosts></MyVolunteerNeedPosts>

      <MyVolunteerRequest></MyVolunteerRequest>
    </div>
  );
};

export default ManageMyPost;
