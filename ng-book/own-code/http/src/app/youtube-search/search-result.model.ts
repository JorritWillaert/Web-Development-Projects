/**
 * SearchResult is a data-structure that holds an individual
 * record from a YouTube video search
 */
export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  
  constructor(obj?: any) {
    this.id;
    this.title;
    this.description;
    this.thumbnailUrl;
    this.videoUrl;

    (obj && obj.id) || null;
    (obj && obj.title) || null;
    (obj && obj.description) || null;
    (obj && obj.thumbnailUrl) || null;
    (obj && obj.videoUrl) || `https://www.youtube.com/watch?v=${this.id}`;
  }
}
