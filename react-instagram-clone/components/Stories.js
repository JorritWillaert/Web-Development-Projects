import React, { useState, useEffect } from "react";
import { randUserName } from "@ngneat/falso";
import Story from "./Story.js";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: randUserName(),
      avatar: "https://i.pravatar.cc/100/" + i,
      id: i,
    }));

    console.log(suggestions);
    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
