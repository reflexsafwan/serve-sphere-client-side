import React from "react";
import { Link } from "react-router";

const NoDataFound = () => {
  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-00 light:bg-gray-50 dark:text-gray-600">
      <div
        className="container flex flex-col items-center justify-center px-5 mx-auto  space-y-8 text-center sm:max-w-md"
        bis_skin_checked="1"
      >
        <p className="text-3xl mt-[-20px]">
          Looks like you have no Requests or Posts
        </p>
        <Link
          to={"/"}
          rel="noopener noreferrer"
          className="px-8 py-3 font-semibold rounded dark:bg-[#ED4C67] dark:text-gray-50"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default NoDataFound;
