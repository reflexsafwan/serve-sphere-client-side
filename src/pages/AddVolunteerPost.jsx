import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddVolunteerPost = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleAddVolunteer = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newVolunteerPost = Object.fromEntries(formData.entries());
    newVolunteerPost.organizerEmail = user?.email;
    newVolunteerPost.organizerName = user?.displayName;

    console.log(newVolunteerPost);
    console.log(newVolunteerPost.volunteersNeeded);

    axios
      .post(`${import.meta.env.VITE_API_URL}/add-volunteer-need-post`, {
        ...newVolunteerPost,
        volunteersNeeded: parseInt(newVolunteerPost.volunteersNeeded),
      })
      .then((data) => {
        console.log(data.data);
        Swal.fire({
          title: "Good job!",
          text: "Post Added succesfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <section className="p-6 light:bg-gray-100 dark:text-gray-900">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div
              className="space-y-2 col-span-full lg:col-span-1"
              bis_skin_checked="1"
            >
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
              bis_skin_checked="1"
            >
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 light:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-500 px-4"
                />
              </div>
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full" bis_skin_checked="1">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                <label htmlFor="state" className="text-sm">
                  State / Province
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                <label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div
              className="space-y-2 col-span-full lg:col-span-1"
              bis_skin_checked="1"
            >
              <p className="font-medium">Profile</p>
              <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
              bis_skin_checked="1"
            >
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="website" className="text-sm">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full" bis_skin_checked="1">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full" bis_skin_checked="1">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div
                  className="flex items-center space-x-2"
                  bis_skin_checked="1"
                >
                  <img
                    src="https://source.unsplash.com/30x30/?random"
                    alt=""
                    className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md dark:border-gray-800"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section> */}

      {/* for dark */}
      <section className="p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <form
          onSubmit={handleAddVolunteer}
          className="container flex flex-col mx-auto space-y-12"
        >
          {/* Personal Information Section */}
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className=" text-xl font-medium">
                Volunteer Today. Impact Forever.
              </p>
              <p className="text-sm font-thin ">
                Join our mission to uplift lives. Your time, skills, and heart
                can create lasting change. Volunteer today and inspire hope.
              </p>
            </div>

            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Your Volunteer Category
                </label>
                <select
                  name="category"
                  required
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    Add Volunteer Need
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default AddVolunteerPost;
