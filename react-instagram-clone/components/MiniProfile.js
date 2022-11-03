import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <div>
        <img
          src="https://links.papareact.com/3ke"
          alt="user"
          className="rounded-full border p-[2px] w-16 h-16"
        />
      </div>

      <div className="flex-1 mx-4">
        <h2 className="font-bold">Testname</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
