import React from "react";
import {
  FaHotel,
  FaRegSmile,
  FaRegCreditCard,
  FaListAlt,
  FaLock,
  FaRegStar,
  FaHeadset,
} from "react-icons/fa";
import logo from "../../src/assets/travoa logo.png";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <main className="min-h-screen text-base-content py-10 px-4 md:px-10 bg-base-200">
      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-10">
          <img src={logo} alt="TraVoa Logo" className="w-24 h-24" />
          <h1 className="text-4xl font-bold text-primary mb-2 text-center tracking-tight">
            About TraVoa
          </h1>
          <p className="max-w-2xl text-center text-lg text-base-content/80">
            Experience effortless hotel booking with{" "}
            <span className="font-semibold text-primary">TraVoa</span>. Whether
            you’re planning a family vacation, romantic escape, or business
            trip, we connect you to the world’s best stays quickly, securely,
            and with total confidence.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Our Mission
          </h2>
          <p className="text-base md:text-lg">
            We’re dedicated to making travel planning stress-free and enjoyable.
            Our mission is to empower travelers with choice, convenience, and
            unbeatable value, transforming the way you discover and book hotels.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Why Book With TraVoa?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <FaHotel className="text-primary text-2xl mt-1" />
              <div>
                <span className="font-medium text-primary">
                  Vast Selection:
                </span>{" "}
                <br />
                Find everything from luxury resorts to affordable city stays,
                all in one place.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaRegCreditCard className="text-primary text-2xl mt-1" />
              <div>
                <span className="font-medium text-primary">
                  Best Price Guarantee:
                </span>{" "}
                <br />
                Enjoy competitive rates and exclusive deals for every budget.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaListAlt className="text-primary text-2xl mt-1" />
              <div>
                <span className="font-medium text-primary">
                  Easy Booking Process:
                </span>{" "}
                <br />
                Our user-friendly platform lets you search, compare, and reserve
                rooms in just a few clicks.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaLock className="text-primary text-2xl mt-1" />
              <div>
                <span className="font-medium text-primary">
                  Secure Payments:
                </span>{" "}
                <br />
                Book with peace of mind thanks to our robust and secure payment
                system.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaRegStar className="text-primary text-2xl mt-1" />
              <div>
                <span className="font-medium text-primary">Real Reviews:</span>{" "}
                <br />
                Get honest insights from verified guests to help you make
                informed decisions.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaHeadset className="text-primary text-2xl mt-1" />
              <div>
                <span className="font-medium text-primary">24/7 Support:</span>{" "}
                <br />
                Our dedicated team is always here to help with your travel
                needs, any time of day.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Our Promise to You
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transparency and honesty in every booking.</li>
            <li>Unmatched customer service and support.</li>
            <li>Continuous improvement through innovation and feedback.</li>
            <li>Respect for your privacy and security at every step.</li>
          </ul>
        </section>

        <section className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Ready for Your Next Adventure?
          </h3>
          <p className="mb-4 text-base md:text-lg">
            Discover your ideal hotel with TraVoa and make every journey
            memorable. Start exploring now and see why thousands of travelers
            trust us for their stays around the globe!
          </p>
          <Link
            to={"/rooms"}
            className="inline-block px-6 py-2 rounded bg-primary text-white font-medium hover:bg-primary-focus transition"
          >
            Book Now
          </Link>
        </section>
      </section>
    </main>
  );
};

export default AboutUs;
