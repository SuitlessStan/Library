import { Box, useColorModeValue, Stack, VStack } from "@chakra-ui/react"
import { Text, Badge, CircularProgress, Tooltip } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import React from "react"
import BookCover from "../../../../Components/book-cover"
import BookGenre from "../../../../Components/book-genre"
import BookTitle from "../../../../Components/book-title"
import BookAuthor from "../../../../Components/book-author"
import BookReview from "../../../../Components/book-review"

interface BookTemplate {
  bookTitle: string
  bookCover?: string
  bookAuthor: string
  bookGenre: string
  bookReview: string
  readingStatus: number
}

export default function BookSample(props: BookTemplate) {
  return (
    <>
      <Box
        role={"group"}
        p={6}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={["md", "lg", "2xl"]}
        rounded={["sm", "md", "lg"]}
        pos={"relative"}
        zIndex={0}
      >
        <BookCover coverHeight={[240, 240, 240]} bookCover={props.bookCover} />
        <Stack pt={10} spacing={[5, 13, 15]} align={"center"}>
          <BookGenre bookGenre={props.bookGenre} fontSize={[12, 13, 14]} />
          <BookTitle bookTitle={props.bookTitle} fontSize={["sm", "md", "lg"]} />
          <BookAuthor bookAuthor={props.bookAuthor} fontSize={"sm"} />
          <VStack>
            <Flex width={"100%"}>
              <Text fontSize={[12, 13, 14]}>
                <Tooltip hasArrow label="Reading progress" aria-label="a tooltip" bg="red.500" color="white">
                  <Badge colorScheme={"purple"}>Reading Progress</Badge>
                </Tooltip>
              </Text>
              <Spacer />
              <CircularProgress value={Math.ceil(props.readingStatus)} size={"20px"} />
            </Flex>
            <BookReview bookReview={props.bookReview} />
          </VStack>
        </Stack>
      </Box>
    </>
  )
}
