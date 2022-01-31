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
import AddBookAuthor from "./adding-book-modal.tsx/book-author";
import AddBookGenre from "./adding-book-modal.tsx/book-genre";
import AddBookReview from "./adding-book-modal.tsx/book-review";
import AddBookTitle from "./adding-book-modal.tsx/book-title";
import Book from "./interfaces/book";

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
  const [book, setBooks] = React.useState<Book>({
    title: "",
    author: "",
    genre: "",
    review: "",
    readingStatus:"not read",
  });


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
            <ReadingStatus
            
            />
            <AddBookGenre
              bookGenre={book.genre}
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
  const [switchValue,setSwitchValue] = React.useState<string>("not read");

  return (
    <RadioGroup onChange={setSwitchValue} name="readingStatus" value={switchValue} float={"left"}>
      <HStack>
        <Radio value="read">Read</Radio>
        <Radio value="not read">Not read</Radio>
      </HStack>
    </RadioGroup>
  );
}
