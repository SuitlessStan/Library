import * as React from "react";
import {
  VStack,
  Text,
  IconButton,
  Center,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Badge,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import AddBookAuthor from "./adding-book-modal.tsx/book-author";
import AddBookGenre from "./adding-book-modal.tsx/book-genre";
import AddBookReview from "./adding-book-modal.tsx/book-review";
import AddBookTitle from "./adding-book-modal.tsx/book-title";

interface Book {
  title: string;
  author: string;
  pages_count: number | null;
  current_page: number | null;
  readingStatus?: (current: number, pagesCount: number) => number;
  genre: string;
  review: string;
}

let addedBook: Book[] = [];

export default function AddNewBook() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box p={30}>
        <Center>
          <VStack spacing="20px">
            <Text fontSize="3xl">Add a new book</Text>
            <IconButton
              size="3xl"
              aria-label="add a new book"
              icon={<AddIcon />}
              variant="ghost"
              onClick={onOpen}
            >
              Add
            </IconButton>
          </VStack>
          <AddNewBookModal isOpen={isOpen} onClose={onClose} />
        </Center>
      </Box>
    </>
  );
}

function AddNewBookModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [book, setBooks] = React.useState(Object);

  const updateChange = (e: any) => {
    const { value, name } = e.target;
    setBooks((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(book);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={["300", "500", "800"]}>
        <ModalHeader>
          <Badge>Add a book</Badge>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={5}>
            <AddBookTitle
              bookTitle={book.title}
              onChange={(e) => updateChange(e)}
            />
            <AddBookAuthor
              bookAuthor={book.author}
              onChange={(e) => updateChange(e)}
            />
            <FormControl id="pages_count">
              <FormLabel>Number of Pages</FormLabel>
              <NumberInput
                defaultValue={40}
                min={40}
                max={1200}
                value={book.current_page}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText>The number of pages in the book</FormHelperText>
            </FormControl>
            <ReadingStatus />
            <AddBookGenre
              bookGenre={book.Genre}
              onChange={(e) => updateChange(e)}
            />
            <AddBookReview
              bookReview={book.review}
              onChange={(e) => updateChange(e)}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}





function ReadingStatus() {
  const [value, setValue]: [string, (value: string) => void] =
    React.useState("read");
  return (
    <RadioGroup onChange={setValue} value={value} float={"left"}>
      <HStack>
        <Radio value="read">Read</Radio>
        <Radio value="not read">Not read</Radio>
      </HStack>
    </RadioGroup>
  );
}