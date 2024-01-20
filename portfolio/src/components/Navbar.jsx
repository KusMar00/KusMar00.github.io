import { HiCode, HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center w-full font-poppins py-6">
      <a
        href="#home"
        className="flex-1 flex w-[250px] xl:text-3xl text-xl text-white items-center"
      >
        <HiCode className="mr-3 xl:text-5xl text-3xl text-secondary" />
        <span>KusMar00.</span>
      </a>

      <ul className="list-none sm:flex hidden flex-1 justify-end items-center">
        {navLinks.map((link, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a key={link.id} href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="text-white text-2xl"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <HiX /> : <HiMenu />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-white text-l ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
