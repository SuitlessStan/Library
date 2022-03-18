import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  VStack,
} from "@chakra-ui/react";

import * as React from "react";
import BookCover from "./book-cover";
import BookGenre from "./book-genre";
import BookTitle from "./book-title";
import ReadingStatus from "./reading-status";
import BookReview from "./book-review";

const IMAGE =
  "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg";


interface BookSample {
  bookCover: string;
  bookGenre:string;
  bookTitle:string;
  readingStatus:number;

}
export default function BookSample() {
  return (
    <Box
      role={"group"}
      p={6}
      w={[250, 250, 250]}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={["md", "lg", "2xl"]}
      rounded={["sm", "md", "lg"]}
      pos={"relative"}
      zIndex={0}
    >
      <BookCover bookCoverURL={IMAGE} />
      <Stack pt={10} spacing={[5, 13, 15]} align={"center"}>
        <BookGenre bookGenre="HORROR" />
        <BookTitle bookTitle="How to do things 101" />
        <VStack align="center">
          <ReadingStatus readingStatus={15} />
        </VStack>
      </Stack>
    </Box>
  );
}

