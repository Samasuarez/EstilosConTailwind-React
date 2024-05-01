import { React, UseContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import 'tailwindcss/tailwind.css'
const ItemProduct = ({ product }) => {
  const { id, image, title, price, category } = product;

  return (
    <div >
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hiden group transition  ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
            ></img>
          </div>
          <div className="absolute top-0 right-0  p-2 flex flex-col items-center justify-center gap-y-2 group-hover:opacity-100 transition-all">
            <button>
              <div className="flex justify-center items-center text-white w-8 h-6 bg-red-500">
                <BsPlus className="text-3x1" />
              </div>
            </button>
            <Link
              to={"/product/${id}"}
              className="w-8 h-6 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-decoration-line-none text-sm capitalize text-gray-500 mb-11">{category}</div>
        <Link to={"/product/${id}"}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default ItemProduct;
