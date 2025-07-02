import React from "react";
import { FaUsers, FaLightbulb, FaPeopleCarry } from "react-icons/fa";

const ImpactSection = () => {
  return (
    <section className="px-6 py-16 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-snug">
            Reasons to trust <br />
            our <span className="text-error">commitment</span> and impact
          </h2>
          <p className="mt-4 text-base-content/70">
            Connect with us – your gateway to engaging with our mission and
            contributing to positive change.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Info List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-error text-white rounded-full p-3 text-xl">
                <FaPeopleCarry />
              </div>
              <div>
                <h4 className="font-bold text-lg">Community engagement</h4>
                <p className="text-base-content/70">
                  Involving local communities to drive grassroots initiatives
                  and foster inclusive development.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-error text-white rounded-full p-3 text-xl">
                <FaLightbulb />
              </div>
              <div>
                <h4 className="font-bold text-lg">Innovative solutions</h4>
                <p className="text-base-content/70">
                  Using technology and best practices to address complex
                  challenges effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-error text-white rounded-full p-3 text-xl">
                <FaUsers />
              </div>
              <div>
                <h4 className="font-bold text-lg">Dedicated team</h4>
                <p className="text-base-content/70">
                  Passionate professionals committed to making a real
                  difference.
                </p>
              </div>
            </div>
          </div>

          {/* Middle & Right Images */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow h-80">
              <img
                src="https://i.ibb.co/TxGr3yTp/pic1.jpg"
                alt="Volunteering"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow h-80">
              <img
                src="https://i.ibb.co/N6z7p64H/pic2.jpg"
                alt="Volunteer Badge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
