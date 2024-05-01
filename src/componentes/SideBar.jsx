import React, { useContext } from "react";
import 'tailwindcss/tailwind.css'
import { Link } from "react-router-dom";
import { BsFill0CircleFill } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SideBarContext } from "../context/SideBarContext";
const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      SideBar
    </div>
  );
};

export default SideBar;
