import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium", // Default size
  shape = "rounded-md", // Default shape
  onClick,
  className = "", // Default empty string
  type = "button", // Default type
  disabled = false,
}) => {
  // Define base styles
  const baseStyles =
    "px-4 py-2 font-semibold transition-colors duration-200 ease-in-out";
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:bg-blue-600 active:bg-blue-700";

  // Size styles
  const sizeStyles = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  // Shape styles
  const shapeStyles = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  // Combine styles
  const combinedStyles = [
    baseStyles,
    sizeStyles[size],
    shapeStyles[shape],
    disabledStyles,
    "bg-blue-500 text-white", // Consistent button color
    className, // Allow custom classes to be passed
  ]
    .filter(Boolean)
    .join(" "); // Filter out any empty strings and join

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;