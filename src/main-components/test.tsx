import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
  HStack,
  CircularProgress,
  VStack,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

const IMAGE =
  "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg";

const responsiveFontStyles = ["sm", "md", "xl"];

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
        zIndex={1}
      >
        <BookCover bookCoverURL={IMAGE} />
        <Stack pt={10} spacing={[5, 13, 15]} align={"center"}>
          <BookGenre bookGenre="HORROR" />
          
          <BookTitle bookTitle="How to do things 101" />
          <VStack align="center">
            <ReadingStatus readingStatus={15} />

            <BookReview bookReview={"lorem20"} />
          </VStack>
        </Stack>
      </Box>
    </Center>
  );
}

function BookCover({ bookCoverURL }: { bookCoverURL: string }) {
  return (
    <Box
      rounded={"lg"}
      mt={-12}
      pos={"relative"}
      height={["150", "400", "500"]}
      _after={{
        transition: "all .3s ease",
        content: '""',
        w: "full",
        h: "full",
        pos: "absolute",
        top: 5,
        left: 0,
        backgroundImage: `url(${IMAGE})`,
        filter: "blur(15px)",
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: "blur(20px)",
        },
      }}
    >
      <Image
        rounded={"lg"}
        height={["180", "400", "500"]}
        width={["sm", "400", "500"]}
        objectFit={"cover"}
        src={bookCoverURL}
      />
    </Box>
  );
}

function BookGenre({ bookGenre }: { bookGenre: string }) {
  return (
    <>
      <HStack spacing={"20"}>
        <Text
          color={"gray.500"}
          fontSize={["sm", "md", "lg"]}
          textTransform={"uppercase"}
          fontWeight={"bold"}
        >
          Genre
        </Text>
        <Badge>
          <Text textTransform={"uppercase"}>{bookGenre}</Text>
        </Badge>
      </HStack>
    </>
  );
}

function BookTitle({ bookTitle }: { bookTitle: string }) {
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
}

function ReadingStatus({ readingStatus }: { readingStatus: number }) {
  return (
    <>
      <HStack spacing={14}>
        <Text fontSize={["sm"]}>
          <Badge>Reading Status :</Badge>
        </Text>
        <CircularProgress value={readingStatus} size="30px" />
      </HStack>
    </>
  );
}

function BookReview({ bookReview }: { bookReview: string }) {
  return (
    <>
      <Accordion allowToggle w={"100%"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Review
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {bookReview}
            <Popover>
              <PopoverTrigger>
                <Button float={"right"} size="sm">
                  Edit
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Edit review</PopoverHeader>
                <PopoverBody>{bookReview}</PopoverBody>
              </PopoverContent>
            </Popover>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
