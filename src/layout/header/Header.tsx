import { useState } from "react";
import styles from "./header.module.css";
import Button from "../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-section py-header w-full transition-a-03s-linear">
        <a href="">
          <img src="/public/assets/logos/enver-logo.png" alt="Enver" />
        </a>

        <button
          onClick={() => setOpen(true)}
          type="button"
          className="border-none bg-transparent flex items-center justify-center md-hidden"
        >
          <img src="/public/assets/icons/hamburger.png" alt="Menu" />
        </button>

        <nav
          className={`font-f-n-s fixed transition-a-03s-linear ${styles.menu}
          ${
            open
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-100 md-opacity-100 md-pointer-events-auto md-translate-x-0 md-flex md-items-center"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            type="button"
            className={
              `border-none bg-transparent text-white p-0-5r text-1-2r absolute ${styles.closeBtn}`
            }
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <ul className={"flex flex-col gap-2r p-1-5r md-flex-row md-items-center"}>
            <a href="#home">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">Home</li>
            </a>

            <a href="#services">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">Services</li>
            </a>

            <a href="#our-project">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">Our Project</li>
            </a>

            <a href="#about-us">
              <li className="text-white-70 transition-a-03s-ease hover-text-white">About us</li>
            </a>
            <Button type="outline" showDesktop={false}>Contact Us</Button>
          </ul>
        </nav>

        <Button type="outline" showDesktop={true}>Contact Us</Button>
      </header>
    </>
  );
};

export default Header;
