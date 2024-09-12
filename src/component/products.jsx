import React from "react";
import { fadeUp, ProductsData } from "./constant";
import { motion } from "framer-motion";
const Products = () => {
  return (
    <div className=" bg-gray-100 py-8 z-0 ">
      <div className=" container py-14 ">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-bold text-3xl text-center pb-10 "
        >
          Our products
        </motion.h1>
        {/* card section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ProductsData.map((items) => {
            return (
              <motion.div
                variants={fadeUp(0.3)}
                initial="hidden"
                whileInView="show"
                key={items.id}
                className="flex flex-col items-center justify-center bg-white p-5 max-w-[300px] mx-auto shadow-lg rounded-xl"
              >
                <img
                  src={items.image}
                  alt="img"
                  className=" w-[100px] mb-4 hover:rotate-12 duration-300 hover:scale-110 "
                />
                <div className="text-center space-y-2 ">
                  <h1 className="text-2xl text-center font-bold font-handwriting">
                    {items.title}
                  </h1>
                  <p className="text-center text-sm text-gray-600 ">
                    {items.desc}
                  </p>
                  <button className="uppercase !mt-5 text-[#f97316] border-[#f97316]  duration-300 hover:text-white px-6 py-2 rounded-md hover:bg-[#f97316]">
                    buy now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
