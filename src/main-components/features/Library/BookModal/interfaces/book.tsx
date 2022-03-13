export default interface Book {
  title: string;
  author: string;
  pages_count?: number | null | 0;
  current_page?: number | null | 0;
  readingStatus?:string;
  genre: string;
  review: string;
}
