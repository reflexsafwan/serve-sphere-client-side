import React from "react";

const VolunteerStories = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "This platform helped me connect with amazing volunteers for my community project!",
      name: "Ayesha Rahman",
      role: "Organizer",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      quote:
        "I joined a healthcare campaign and it was a life-changing experience. Highly recommended!",
      name: "Rakib Hasan",
      role: "Volunteer",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      quote:
        "Managing my posts and finding volunteers has never been this simple. Great work!",
      name: "Mehedi Islam",
      role: "Organizer",
      img: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: 4,
      quote:
        "Being a volunteer gave me the opportunity to give back to society while learning new skills.",
      name: "Nusrat Jahan",
      role: "Volunteer",
      img: "https://i.pravatar.cc/100?img=4",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Volunteer <span className="text-[#ED4C67]"> Stories</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center  mt-2 mb-12">
          Hear from organizers and volunteers who are making a difference every
          day.
        </p>

        {/* Responsive Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="card bg-base-100 shadow-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <p className="italic text-gray-600 mb-6">“{t.quote}”</p>
              <div className="flex items-center mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-primary mr-4"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerStories;
