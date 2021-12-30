import { Textarea, FormHelperText } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export default function AddBookReview({
    bookReview,
    onChange,
  }: {
    bookReview: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
  }) {
    return (
      <FormControl id="book-review">
        <FormLabel>Your review</FormLabel>
        <Textarea
          placeholder="Write down your review"
          name="review"
          value={bookReview}
          onChange={onChange}
        />
        <FormHelperText>Write down your review</FormHelperText>
      </FormControl>
    );
  }