export default interface Book {
  title: string;
  author: string;
  pages_count?: number | null;
  current_page?: number | null;
  readingStatus?: (current: number, pagesCount: number) => boolean | number;
  genre: string;
  review: string;
}
