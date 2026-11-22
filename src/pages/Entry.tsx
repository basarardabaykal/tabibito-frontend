import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import type { Entry as EntryModel } from "../models/Entry"; // named with alias to avoid collusion
import { readEntry } from "../services/entryService";
import NotFound from "./NotFound";

function Entry() {
  const params = useParams();
  const [entry, setEntry] = useState<EntryModel>();

  useEffect(() => {
    const fetchEntry = async () => {
      if (params.id) {
        const response = await readEntry(params.id);
        setEntry(response);
      }
    };
    fetchEntry();
  }, [params]);

  return (
    <>
      {entry ? (
        <div className="prose mx-auto pt-20">
          <Markdown>{entry.content}</Markdown>
        </div>
      ) : (
        <p>
          <NotFound />x
        </p>
      )}
    </>
  );
}

export default Entry;
