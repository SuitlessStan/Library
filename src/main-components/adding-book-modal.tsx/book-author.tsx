import { Input, FormHelperText } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";




export default function AddBookAuthor({
  bookAuthor,
  onChange,
}: {
  bookAuthor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FormControl id="book-author">
      <FormLabel>Book Author</FormLabel>
      <Input type="text" name="author" value={bookAuthor} onChange={onChange} />
      <FormHelperText>The author of the book</FormHelperText>
    </FormControl>
  );
}
