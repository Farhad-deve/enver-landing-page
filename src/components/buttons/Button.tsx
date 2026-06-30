import { type ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  type: "outline" | "solid";
  children: ReactNode;
}

const Button = ({ type = "solid", children }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={`${type === "solid" ? styles.btnSolid : styles.btnOutline}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
