export default interface Book {
  title: string;
  author: string;
  pages_count?: number | null;
  current_page?: number | null;
  readingStatus?: string;
  genre: string;
  review: string;
}
