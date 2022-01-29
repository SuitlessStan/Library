import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  VStack,
} from "@chakra-ui/react";

import * as React from "react";
import BookCover from "./library/book-cover";
import BookGenre from "./library/book-genre";
import BookTitle from "./library/book-title";
import ReadingStatus from "./library/reading-status";
import BookReview from "./library/book-review";

const IMAGE =
  "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg";


export default function BookSample() {
  return (
    <Center py={["sm", "md", "lg"]}>
      <Box
        role={"group"}
        p={6}
        maxW={["sm", "md", "lg"]}
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
            <BookReview bookReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum?"} />
          </VStack>
        </Stack>
      </Box>
    </Center>
  );
}

