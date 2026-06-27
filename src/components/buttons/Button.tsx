import { type ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  type?: "outline" | "solid";
  children: ReactNode;
  showDesktop?: boolean;
}

const Button = ({ type = "solid", children, showDesktop }: ButtonProps) => {
  return (
    <>
      <button type="button" className={`${type === "solid" ? styles.btnSolid : styles.btnOutline} ${showDesktop ? "md-block hidden" : "md-hidden"}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
