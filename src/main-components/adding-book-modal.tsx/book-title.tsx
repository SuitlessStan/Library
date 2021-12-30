import { Input, FormHelperText } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";




export default function AddBookTitle({
  bookTitle,
  onChange,
}: {
  bookTitle: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FormControl id="book-title">
      <FormLabel>Book Title</FormLabel>
      <Input type="text" name="title" value={bookTitle} onChange={onChange} />
      <FormHelperText>The name of the book you are reading</FormHelperText>
    </FormControl>
  );
}
