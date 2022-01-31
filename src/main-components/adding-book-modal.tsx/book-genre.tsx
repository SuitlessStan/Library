import { Select, FormHelperText } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";



export default function AddBookGenre({
  bookGenre,
  onChange,
}: {
  bookGenre: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <FormControl id="book-genre">
      <FormLabel>Book Genre</FormLabel>
      <Select value={bookGenre} onChange={onChange} name="genre" placeholder="Select the book's genre">
        <option value="Action and Adventure">Action and Adventure</option>
        <option value="Classics">Classics</option>
        <option value="Comic Book or Graphic Novel">
          Comic Book or Graphic Novel
        </option>
        <option value="Detective and Mystery">Detective and Mystery</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Historical Fiction">Historical Fiction</option>
        <option value="Literary Fiction">Literary Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Short Stories">Short Stories</option>
        <option value="Suspense and Thrillers">Suspense and Thrillers</option>
      </Select>
      <FormHelperText>Select book genre</FormHelperText>
    </FormControl>
  );
}
