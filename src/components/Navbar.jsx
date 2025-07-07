import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center font-semibold ">
      <div className="w-[80%] max-w-[1200px] flex justify-between items-center">
        <span className="text-2xl">Symbol</span>
        <ul>
          <li className="flex gap-3">
            <a
              href="#hero"
              className=" hover:text-blue-500 active:text-blue-800"
            >
              Hero
            </a>
            <a
              href="#footer"
              className=" hover:text-blue-500 active:text-blue-800"
            >
              Footer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
