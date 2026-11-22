export interface Entry {
  created_by_id: string;
  created_at: string;
  title: string;
  id: string;
  content: string;
  updated_at: string;
}

export interface NewEntry {
  title: string;
  content: string;
  created_by_id: string;
}
