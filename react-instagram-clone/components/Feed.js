import React from "react";
import Stories from "./Stories.js";
import Posts from "./Posts.js";
import MiniProfile from "./MiniProfile.js";
import Suggestions from "./Suggestions.js";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section>
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  );
};

export default Feed;
