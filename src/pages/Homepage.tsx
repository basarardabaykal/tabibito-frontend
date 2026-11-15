import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import type { Entry } from "../models/Entry";
import entryService from "../services/entryService";

function Homepage() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await entryService.readEntries();
      console.log(response);
      setEntries(response.data);
    };
    fetchEntries();
  }, []);

  return (
    <div className="p-12 flex flex-col items-center">
      {entries.map((entry) => (
        <BlogCard content={entry.content}></BlogCard>
      ))}
    </div>
  );
}

export default Homepage;
