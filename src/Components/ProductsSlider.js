import React from "react";

const ProductsSlider = () => {
  return (
    <div className=" flex   w-full  mt-52 mb-16 ">
     
      <div className="flex w-[85%] m-auto justify-around  items-center">
      <button className="rounded-full   text-center   ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 m-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="flex w-[80%] m-auto justify-around items-center">
      <div className="  text-center text-sm w-[18%] p-2">
          <div>
            <div className="h-[100px] m-auto w-[100px] shadow-2xl rounded-full ">
              <img
                src="https://media.istockphoto.com/id/1144864689/photo/peanut-butter-sandwiches.jpg?s=612x612&w=0&k=20&c=7vslUwsArH7FBVTb3lti8pZIEZtSIL9roz9lxjCK0LQ="
                className="h-[100px] m-auto   rounded-full "
              />
            </div>
            <h1 className="py-3 font-semibold">Peanut Butter</h1>
            <p className=" line-through ">$6 per kg</p>
            <p className=" text-orange-600 ">$4 per kg</p>
            <div className="flex justify-between my-2">
              <button className="rounded-full w-[25%] p-2   bg-gray-300">
                -
              </button>
              <p className="rounded-3xl border w-[40%] flex items-center justify-center ">
                1
              </p>
              <button className="rounded-full   w-[25%] p-2   bg-gray-300">
                +
              </button>
            </div>
            <div className="flex w-full justify-around">
              <h1>$1.00</h1>

              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <h1 className="rotate-90  text-gray-500 h-[4%]">SPECIAL OFFER</h1>

        <div className=" flex text-center text-sm w-[16%] p-2">
          <div>
            <div className="h-[100px] m-auto w-[100px] shadow-2xl rounded-full ">
              <img
                src="https://media.istockphoto.com/id/1045792246/photo/white-wine-grapes-in-the-danube-valley-lower-austria.jpg?s=612x612&w=0&k=20&c=Mm4u2Nl_CJgbYRRwAxw6pAp5-757V3sl20ZO3sWHNuA="
                className="h-[100px] m-auto   rounded-full "
              />
            </div>
            <h1 className="py-3 font-semibold">Grapes</h1>
            <p className=" line-through ">$6 per kg</p>
            <p className=" text-orange-600 ">$4 per kg</p>
            <div className="flex justify-between my-2">
              <button className="rounded-full w-[25%] p-2   bg-gray-300">
                -
              </button>
              <p className="rounded-3xl border w-[40%] flex items-center justify-center ">
                1
              </p>
              <button className="rounded-full   w-[25%] p-2   bg-gray-300">
                +
              </button>
            </div>
            <div className="flex w-full justify-around">
              <h1>$1.00</h1>

              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <h1 className="rotate-90   text-gray-500  h-[4%]">SPECIAL OFFER</h1>

        <div className="text-center text-sm w-[16%] p-2">
          <div>
            <div className="h-[100px] m-auto w-[100px] shadow-2xl rounded-full ">
              <img
                src="https://media.istockphoto.com/id/1399381626/photo/isolated-portion-of-baked-chicken-wings.jpg?s=612x612&w=0&k=20&c=PmmVEbAXiADgB_vEpyXvAYV69CAKnZc6FdIEtDkfWxM="
                className="h-[100px] m-auto   rounded-full "
              />
            </div>
            <h1 className="py-3 font-semibold">Wings</h1>
            <p className=" line-through ">$6 per kg</p>
            <p className=" text-orange-600 ">$4 per kg</p>
            <div className="flex justify-between my-2">
              <button className="rounded-full w-[25%] p-2   bg-gray-300">
                -
              </button>
              <p className="rounded-3xl border w-[40%] flex items-center justify-center ">
                1
              </p>
              <button className="rounded-full   w-[25%] p-2   bg-gray-300">
                +
              </button>
            </div>
            <div className="flex w-full justify-around">
              <h1>$1.00</h1>

              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <h1 className="rotate-90   text-gray-500  h-[4%]">SPECIAL OFFER</h1>
        <div className="text-center text-sm w-[16%] p-2">
          <div>
            <div className="h-[100px] m-auto w-[100px] shadow-2xl rounded-full ">
              <img
                src="https://media.istockphoto.com/id/155421320/photo/mixed-nuts.jpg?s=612x612&w=0&k=20&c=jOmJivEY-CEjEL3YDHmQX2pMHEZTHBRY8aHNeodl9xs="
                className="h-[100px] m-auto   rounded-full "
              />
            </div>
            <h1 className="py-3 font-semibold">Walnuts</h1>
            <p className=" line-through ">$6 per kg</p>
            <p className=" text-orange-600 ">$4 per kg</p>
            <div className="flex justify-between my-2">
              <button className="rounded-full w-[25%] p-2   bg-gray-300">
                -
              </button>
              <p className="rounded-3xl border w-[40%] flex items-center justify-center ">
                1
              </p>
              <button className="rounded-full   w-[25%] p-2   bg-gray-300">
                +
              </button>
            </div>
            <div className="flex w-full justify-around">
              <h1>$1.00</h1>

              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      </div>
      
    </div>
  );
};

export default ProductsSlider;
