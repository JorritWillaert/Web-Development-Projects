import React, { useState, useEffect } from "react";
import { randUserName } from "@ngneat/falso";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      username: randUserName(),
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
    </div>
  );
};

export default Suggestions;
