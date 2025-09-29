import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Tree Plantation Drive",
      date: "Oct 15, 2025",
      location: "Dhaka",
      description: "Join us in planting 500+ trees to support the environment.",
    },
    {
      title: "Blood Donation Camp",
      date: "Nov 02, 2025",
      location: "Chittagong",
      description:
        "Help save lives by participating in our blood donation campaign.",
    },
    {
      title: "Education for All",
      date: "Nov 20, 2025",
      location: "Sylhet",
      description:
        "Volunteer to teach underprivileged children in rural communities.",
    },
    {
      title: "Clean Water Mission",
      date: "Dec 05, 2025",
      location: "Khulna",
      description:
        "Support communities by setting up clean water facilities and awareness programs.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Upcoming Events
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Stay updated with our latest volunteering opportunities and community
          events.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                  {event.title}
                </h3>
                <p className="text-sm mt-1">
                  📍 {event.location} • 📅 {event.date}
                </p>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn bg-[#EB5971] rounded-xl w-full">Join Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
