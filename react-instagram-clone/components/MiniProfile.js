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

      <div>
        <h2>Testname</h2>
        <h3>Welcome to Instagram</h3>
      </div>

      <button>Sign Out</button>
    </div>
  );
};

export default MiniProfile;
