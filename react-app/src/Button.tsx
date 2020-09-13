import React, { FC } from "react";
import "twin.macro";

const Button: FC<{}> = ({ children }) => (
  <button tw="bg-primary hover:bg-primary-dark md:bg-secondary md:hover:bg-secondary-dark text-white border-0 rounded px-3 py-2 cursor-pointer transition-colors duration-300">
    {children}
  </button>
);

export default Button;
