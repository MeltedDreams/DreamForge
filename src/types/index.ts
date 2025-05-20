export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  fileUrl: string; 
  fileSize: string;
  category: string;
  model?: string;
  version?: string;
  date: string;
}