import React from "react";
import Logo from "./Logo";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <div>
          <Logo></Logo>
          <p className="text-[20px]">"Feel at Home, Anywhere."</p>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <BsTwitterX />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaInstagram />
          </a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Guest Info</h6>
        <a className="link link-hover">Check-in & Check-out Time</a>
        <a className="link link-hover">House Rules</a>
        <a className="link link-hover">Parking Info</a>
        <a className="link link-hover">Airport Shuttle Details</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cancellation Policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label>Get Special Offers And News</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
