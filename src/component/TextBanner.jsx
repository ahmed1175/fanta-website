import React from "react";

const TextBanner = () => {
  return (
    <section className="py-12 text-center">
      <div className="container">
        <div className=" bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-lg ">
          <p className="font-bold text-3xl max-w-[800px] mx-auto leading-normal">
            Every sip of Fanta turns up the fun—refresh your day with bold
            flavors and bubbly excitement!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
