import { Input, FormHelperText } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "react-bootstrap";
import bookAuthor from "./book-author";

export default function AddNumberOfPages({
  bookPages,
  onChange,
}: {
  bookPages: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FormControl id="pages_count">
      <FormLabel>Number of Pages</FormLabel>
      <Input type="text" name="pages_count" value={bookPages} onChange={onChange} />
      <FormHelperText>The number of pages in the book</FormHelperText>
    </FormControl>
  );
}
