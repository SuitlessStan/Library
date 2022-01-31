import { Input, FormHelperText,Box } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";




export default function AddBookTitle({
  bookTitle,
  onChange,
  inputName
}: {
  bookTitle: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName:string;
}) {
  return (
    <Box w={"100%"}>
       <FormLabel>Book Title</FormLabel>
        <Input type="text" name={inputName} value={bookTitle} onChange={onChange} />
        <FormHelperText>The name of the book you are reading</FormHelperText>
    </Box>
  );
}
