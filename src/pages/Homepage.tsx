import { useState } from "react";
import BlogCard from "../components/BlogCard";

function Homepage() {
  const [contents, setContents] = useState<string[]>(["asds", "asd", "yaaa"]);
  return (
    <div className="p-12 flex flex-col items-center">
      {contents.map((content) => (
        <BlogCard content={content}></BlogCard>
      ))}
    </div>
  );
}

export default Homepage;
