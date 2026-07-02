import { useState, useEffect } from "react";
import styles from "./header.module.css";
import Button from "../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex fixed top-0 left-0 z-10 justify-between items-center px-section py-header w-full transition-a-03s-linear ${isScrolled ? "backdrop-blur-10 bg-white-15" : ""}`}
      >
        {/* Logo */}
        <a href="">
          <img src="/public/assets/logos/enver-logo.png" alt="Enver" />
        </a>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="border-none bg-transparent flex items-center justify-center md-hidden"
        >
          <img src="/public/assets/icons/hamburger.png" alt="Menu" />
        </button>

        {/* Navigation Menu */}
        <nav className={`font-f-n-s fixed transition-a-03s-linear z-15 hidden md-flex ${styles.menu}
          ${
            open
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-100 md-opacity-100 md-pointer-events-auto md-translate-x-0 md-flex md-items-center"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            type="button"
            className={`border-none bg-transparent text-white p-0-5r text-1-2r absolute ${styles.closeBtn}`}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul
            className={
              "flex flex-col gap-2r p-1-5r md-flex-row md-items-center"
            }
          >
            <a href="#home">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">
                Home
              </li>
            </a>

            <a href="#services">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">
                Services
              </li>
            </a>

            <a href="#our-project">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">
                Our Project
              </li>
            </a>

            <a href="#about-us">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">
                About us
              </li>
            </a>

            <div className="md-hidden">
              <Button type="outline">Contact Us</Button>
            </div>
          </ul>
        </nav>

        <div className="hidden md-block">
          <Button type="outline">Contact Us</Button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className={`font-f-n-s fixed transition-a-03s-linear z-15 md-hidden ${styles.menu}
          ${
            open
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-100 md-opacity-100 md-pointer-events-auto md-translate-x-0 md-flex md-items-center"
          }`}
      >
        <button
          onClick={() => setOpen(false)}
          type="button"
          className={`border-none bg-transparent text-white p-0-5r text-1-2r absolute ${styles.closeBtn}`}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <ul
          className={"flex flex-col gap-2r p-1-5r md-flex-row md-items-center"}
        >
          <a href="#home">
            <li className="text-white-70 transition-a-03s-ease hover-text-white">
              Home
            </li>
          </a>

          <a href="#services">
            <li className="text-white-70 transition-a-03s-ease hover-text-white">
              Services
            </li>
          </a>

          <a href="#our-project">
            <li className="text-white-70 transition-a-03s-ease hover-text-white">
              Our Project
            </li>
          </a>

          <a href="#about-us">
            <li className="text-white-70 transition-a-03s-ease hover-text-white">
              About us
            </li>
          </a>

          <div className="md-hidden">
            <Button type="outline">Contact Us</Button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
