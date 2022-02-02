import React from "react";
import { Heading } from "@chakra-ui/react";

const BookTitle = ({ bookTitle }: { bookTitle: string }) => {
  return (
    <>
      <Heading
        fontSize={["sm", "md", "xl"]}
        fontFamily={"roboto"}
        fontWeight={800}
        textAlign={"center"}
      >
        {/* TODO : Capitalize first letter of each word */}
        {bookTitle}
      </Heading>
    </>
  );
};

export default BookTitle;
