import React from "react";
import logo from "../Images/healthysLogo.png";

const Navbar = () => {
  return (
    <div className="  absolute w-full  px-6 py-2 flex justify-between items-center">
      <div>
        <img src={logo} className="h-28 " />
      </div>
      <div className="flex justify-around items-center w-[35%]">
        <h1 className=" font-semibold">PRODUCTS</h1>
        <button className='px-10 py-1 text-white  bg-orange-500 rounded-2xl hover:bg-orange-600'>Login</button>
        <button className='px-10 py-1 text-white  bg-orange-500 rounded-2xl hover:bg-orange-600'>Register</button>
        <div className="relative">
        <div
    class="absolute bottom-auto left-auto right-1 top-1  z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-[5.4px] text-xs">
        
    </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        </div>
        <span className=" font-semibold">$0,00</span>
      </div>
    </div>
  );
};

export default Navbar;
