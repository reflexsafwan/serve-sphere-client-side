import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateVolunteerNeedPost = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    category,
    thumbnail,
    postTitle,
    location,
    deadline,
    volunteersNeeded,
    description,
    _id,
  } = data.data || {};

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdateVolunteerData = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/update-volunteer-need-post/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateVolunteerData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Good job!",
          text: "Post Updated succesfully",
          icon: "success",
        });
        navigate("/my-volunteer-need-post");
      });
  };

  return (
    <section className="p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <form
        onSubmit={handleUpdate}
        className="container flex flex-col mx-auto space-y-12"
      >
        {/* volunteer posts Information Section */}
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className=" text-xl font-medium">
              Volunteer Today. Impact Forever.
            </p>
            <p className="text-sm font-thin ">
              Join our mission to uplift lives. Your time, skills, and heart can
              create lasting change. Volunteer today and inspire hope.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Your Volunteer Category
              </label>
              <select
                defaultValue={category}
                name="category"
                required
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>animal welfare</option>
                <option>healthcare</option>
                <option>education</option>
                <option>social service</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Post Title
              </label>
              <input
                required
                defaultValue={postTitle}
                name="postTitle"
                id="firstname"
                type="text"
                placeholder="Type your volunteer title"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Description
              </label>
              <textarea
                defaultValue={description}
                name="description"
                required
                id="lastname"
                type="text"
                placeholder="Description"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Volunteers Members Needed
              </label>
              <input
                required
                defaultValue={volunteersNeeded}
                name="volunteersNeeded"
                id="email"
                type="number"
                placeholder="Vounteer Numbers"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="address" className="text-sm">
                Location
              </label>
              <input
                required
                defaultValue={location}
                name="location"
                id="address"
                type="text"
                placeholder="Address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="address" className="text-sm">
                Deadline
              </label>
              <input
                required
                defaultValue={deadline}
                name="deadline"
                id="address"
                type="date"
                placeholder="Address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="address" className="text-sm">
                Photo Url
              </label>
              <input
                defaultValue={thumbnail}
                required
                name="thumbnail"
                id="address"
                type="url"
                placeholder="Enter Your Photo url"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>
          </div>
        </fieldset>

        {/* Profile Section */}
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Organizer Information</p>
            <p className="text-xs">"Be a Hero Without a Cape.</p>
          </div>

          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Organizer Name
              </label>
              <input
                defaultValue={user?.displayName}
                readOnly
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Organizer Email
              </label>
              <input
                defaultValue={user?.email}
                readOnly
                id="website"
                type="email"
                placeholder="User Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
              />
            </div>

            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-600"
                />
                <button
                  type="submit"
                  className=" w-full px-4 py-2 border rounded-md border-blue-600 dark:border-gray-600 text-sm bg-blue-600 hover:bg-blue-500  hover:border-blue-500"
                >
                  Update Post
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdateVolunteerNeedPost;
