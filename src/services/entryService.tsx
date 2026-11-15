import axios from "axios";

const entryService = {
  async readEntries() {
    const response = await axios.get("http://localhost:8000/entries");
    return response.data;
  },
};

export default entryService;
