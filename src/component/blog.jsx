import React from "react";
import { BlogsData } from "./constant";

const Blog = () => {
  return (
    <section className=" bg-gray-50 ">
      <div className="container py-14">
        <h1 className="text-center text-4xl font-bold pb-8 ">Blog</h1>

        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BlogsData.map((items) => {
            return (
              <div
                key={items.id}
                className="flex flex-col items-center justify-center gap-6 p-2 md:p-5
               max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
              >
                <img src={items.img} alt="" className="img-shadow" />
                <div>
                  <h1 className="text-xl font-bold line-clamp-2">
                    {items.title}
                  </h1>
                  <p className="line-clamp-2">{items.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
