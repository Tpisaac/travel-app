import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90vh] ">
      <img
        src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        className="w-full h-full object-cover bg-opacity-20"
      />
      <div className="max-w-[1140px] m-auto ">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-slate-700 p-4 ">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4 py-4 italic">With Haliday</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, at
            tempora! Iusto, aliquam sequi excepturi fugit expedita sit
            laboriosam et!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
