import { useEffect, useState } from "react";
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
        <p>{entry.title}</p>
      ) : (
        <p>
          <NotFound />
        </p>
      )}
    </>
  );
}

export default Entry;
