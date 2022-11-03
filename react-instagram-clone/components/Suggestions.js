import React, { useState, useEffect } from "react";
import { randUserName, randBrand } from "@ngneat/falso";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      username: randUserName(),
      company: randBrand(),
      avatar: "https://i.pravatar.cc/100/" + i,
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions?.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            alt="user"
            className="rounded-full w-10 h-10 border p-[2px]"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>

          <button className="text-blue-400 text-xs font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
