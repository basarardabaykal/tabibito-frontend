import { Button, Input, Popup, TextArea } from "pixel-retroui";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import type { Entry } from "../models/Entry";
import { createEntry, readEntries } from "../services/entryService";

function Homepage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isCreateWindowOpen, setIsCreateWindowOpen] = useState<boolean>(false);
  const [newEntryTitle, setNewEntryTitle] = useState<string>("");
  const [newEntryContent, setNewEntryContent] = useState<string>("");

  const handleCreateWindowClick = () => {
    setIsCreateWindowOpen(!isCreateWindowOpen);
  };

  const handleCreateButtonClick = async () => {
    await createEntry({
      title: newEntryTitle,
      content: newEntryContent,
      created_by_id: "1",
    });
  };

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await readEntries();
      console.log(response);
      setEntries(response.data);
    };
    fetchEntries();
  }, []);

  return (
    <div className="p-12 flex flex-col items-center">
      <Button onClick={handleCreateWindowClick}>Create New Entry</Button>
      <Popup isOpen={isCreateWindowOpen} onClose={handleCreateWindowClick}>
        <div className="mb-4">
          <p>Title:</p>
          <Input
            value={newEntryTitle}
            onChange={(e) => setNewEntryTitle(e.target.value)}
          ></Input>
        </div>
        <div className="mb-4">
          <p className="mb-4">Content:</p>
          <TextArea
            value={newEntryContent}
            onChange={(e) => setNewEntryContent(e.target.value)}
          ></TextArea>
        </div>
        <Button onClick={handleCreateButtonClick}>Create</Button>
      </Popup>

      {entries.map((entry) => (
        <BlogCard
          id={entry.id}
          title={entry.title}
          content={entry.content}
        ></BlogCard>
      ))}
    </div>
  );
}

export default Homepage;
