import React from "react";
import Logo from "./Logo";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Successfully Subscribed",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <footer className="bg-base-200 mt-10">
      <div className="footer lg:footer-horizontal text-base-content p-10 w-11/12 mx-auto">
        <aside>
          <div>
            <Logo></Logo>
            <p className="text-[20px]">"Feel at Home, Anywhere."</p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Info</h6>

          {/* Address */}
          <a
            href="https://www.google.com/maps?q=Plot+11,+Road+130,+Gulshan-1,+Dhaka+1212,+Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <FaMapMarkerAlt /> Plot 11, Road 130, Gulshan-1, Dhaka 1212
          </a>

          {/* Phone */}
          <a
            href="tel:+8801911222333"
            className="link link-hover flex items-center gap-2"
          >
            <FaPhone /> +880-1911-222333
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801911222333"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex items-center gap-2"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:contract@travoa.com"
            className="link link-hover flex items-center gap-2"
          >
            <FaEnvelope /> contract@travoa.com
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Browse</h6>
          <Link to={"/rooms"} className="link link-hover">
            Rooms
          </Link>
          <Link to={"/contact-us"} className="link link-hover">
            Contact us
          </Link>
          <Link to={"/about-us"} className="link link-hover">
            About us
          </Link>
        </nav>
        <form onSubmit={handleSubscribe}>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Get Special Offers And News</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
                required
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
