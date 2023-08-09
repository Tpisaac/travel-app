import React from "react";

function Activities() {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px] ">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold ">
          Vacation
        </h3>

        <img
          src="https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNydWlzZSUyMHNoaXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="w-full h-full object-cover relative border-4 border-white shadow-lg bg-opacity-20"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold ">
          Resorts
        </h3>

        <img
          src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="w-full h-full object-cover relative border-4 border-white shadow-lg bg-opacity-20"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold ">
          Getaway
        </h3>

        <img
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="w-full h-full object-cover relative border-4 border-white shadow-lg bg-opacity-20"
        />
      </div>
    </div>
  );
}

export default Activities;
