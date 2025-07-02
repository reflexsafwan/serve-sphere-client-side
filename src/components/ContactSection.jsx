import React from "react";

const ContactSection = () => {
  return (
    <section className="px-6 py-12 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Connect with us, drive change{" "}
            <span className="text-error">together</span>
          </h2>
          <p className="mb-8 text-base-content/70">
            Reach out to learn more about our programs, or to share your ideas
            and support for our mission.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold">Main phone number</h4>
              <p className="text-base-content/70">
                1-800-CHARITY (1-800-242-7489)
              </p>
            </div>
            <div>
              <h4 className="font-bold">Training & certification</h4>
              <p className="text-base-content/70">
                Please visit the{" "}
                <a className="underline" href="#">
                  training section
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold">For donation related</h4>
              <p className="text-base-content/70">
                Please visit the{" "}
                <a className="underline" href="#">
                  donation section
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold">Mailing Address</h4>
              <p className="text-base-content/70">
                PO Box 37839 | Boone, IA 50037
              </p>
            </div>
            <div>
              <h4 className="font-bold">Email address</h4>
              <p className="text-base-content/70">support@amitycharity.org</p>
            </div>
            <div>
              <h4 className="font-bold">Find our locations</h4>
              <p className="text-base-content/70">
                <a className="underline" href="#">
                  Search on the map
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-base-200 shadow-lg rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Let’s keep in touch</h3>
          <p className="mb-6 text-base-content/70">
            Let us know who you are and what you're looking for below, and we’ll
            get back to you within 24 hours.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered h-32 w-full"
            ></textarea>
            <button type="submit" className="btn btn-error text-white mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
