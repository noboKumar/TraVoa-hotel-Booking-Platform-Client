import React from "react";
import Swal from "sweetalert2";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    icon: <FaInstagram className="w-7 h-7" />,
    url: "https://instagram.com/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="w-7 h-7" />,
    url: "https://facebook.com/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="w-7 h-7" />,
    url: "https://twitter.com/",
  },
];

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Thank you!", "Your message has been sent.", "success");
    e.target.reset();
  };

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-primary">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input input-bordered w-full"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="input input-bordered w-full"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="textarea textarea-bordered w-full"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-8 mt-8">
          {socials.map((icon) => (
            <a
              key={icon.name}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
