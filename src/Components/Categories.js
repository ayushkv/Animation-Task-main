import React from "react";

const Categories = () => {
  return (
    <div className=" absolute w-full  bottom-9"  >
      <div className="ml-[10%] flex justify-between w-[73%] ">
        <div className=" w-[23%] rounded-[32%] shadow-2xl   " >
          <figure class="relative  transition-all duration-300 cursor-pointer filter   hover:grayscale-0 ">
            <a href="#">
              <img
                class="rounded-[32%]  h-[190px] w-full   "
                src="https://media.istockphoto.com/id/467639228/photo/homemade-lemon-and-herb-whole-chicken.jpg?s=612x612&w=0&k=20&c=ihEcuGbACcsbA8y3OrTNkMIt7aYyXbr-jeDViWD5Z_w="
                alt="image description"
              />
             <span class="absolute rounded-[32%]  h-[190px] w-full  inset-0 bg-black opacity-50"></span>

            </a>
            <figcaption class="absolute top-[45%] left-[38%] text-lg text-white bottom-6">
              <p>
                Ckicken
              </p>
            </figcaption>
          </figure>
        </div>
        <div className=" w-[23%] rounded-[32%] shadow-2xl   " >
          <figure class="relative  transition-all duration-300 cursor-pointer filter   hover:grayscale-0 ">
            <a href="#">
              <img
                class="rounded-[32%]  h-[190px] w-full "
                src="https://media.istockphoto.com/id/1273378551/photo/set-of-summer-fruits-and-berries-in-wooden-serving.jpg?s=612x612&w=0&k=20&c=XtJFQDgpV_AsG3aFzo3FVN2pmbey7h0jWHMzlHWJ5Kk="
                alt="image description"
              />
             <span class="absolute rounded-[32%]  h-[190px] w-full  inset-0 bg-black opacity-50"></span>

            </a>
            <figcaption class="absolute top-[45%] left-[40%] text-lg text-white bottom-6">
              <p>
                Fruits
              </p>
            </figcaption>
          </figure>
        </div>
        <div className=" w-[23%] rounded-[32%] shadow-2xl   " >
          <figure class="relative  transition-all duration-300 cursor-pointer filter   hover:grayscale-0 ">
            <a href="#">
              <img
                class="rounded-[32%]  h-[190px] w-full "
                src="https://media.istockphoto.com/id/1408338331/photo/crispy-fried-chicken-in-the-basket.jpg?s=612x612&w=0&k=20&c=2GBMXq083f9_uNnx9Do6DKjmMgEip6bNEoBpxTVkNF8="
                alt="image description"
              />
             <span class="absolute rounded-[32%]  h-[190px] w-full  inset-0 bg-black opacity-50"></span>

            </a>
            <figcaption class="absolute top-[50%] left-[40%] text-lg text-white bottom-6">
              <p>
                Wings
              </p>
            </figcaption>
          </figure>
        </div>
        <div className=" w-[23%] rounded-[32%] shadow-2xl  " >
          <figure class="relative  transition-all duration-300 cursor-pointer filter   hover:grayscale-0 ">
            <a href="#">
              <img
            //    style={{opacity:'0.35'}}
                class="rounded-[32%]  h-[190px] w-full   "
                src="https://media.istockphoto.com/id/530508382/photo/dried-apricots-dates-raisins-and-various-nuts.jpg?s=612x612&w=0&k=20&c=xNJB3HvbyID0IyEiTxY9HTfCQLbwcoQti4-I0fts-8w="
                alt="image description"
              />
             <span class="absolute rounded-[32%]  h-[190px] w-full  inset-0 bg-black opacity-50"></span>
            </a>
            <figcaption class="absolute top-[45%] left-[43%] text-lg text-white bottom-6">
              <p className=" font-semibold">
                Nuts
              </p>
            </figcaption>
          </figure>
        </div>
        
      </div>
    </div>
  );
};

export default Categories;
