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
  Radio,
  RadioGroup,
  Stack,
  FormControl,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddBookGenre from "./book-genre";
import AddBookReview from "./book-review";
import Book from "./interfaces/book";
import BookModalInput from "./modal-input";
import ReadingStatus from "./book-reading-status";

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
    readingStatus: null,
    current_page:null,
    pages_count:null,
  });


  // const updateChange = (e: any) => {

  //   const { value, name } = e.target;
  //   let check = value;
  //   if (check === 'true') {
  //     check = false;
  //     console.log("********", check)

  //   } else {
  //     check = true
  //     console.log("***************************", check)

  //   }
  //   if (name === "readingStatus") {
  //     console.log("***************************", check)
  //     setBooks((prevState: Book) => {
  //       return {
  //         ...prevState,
  //         [name]: check,
  //       };
  //     });
  //   } else {
  //     setBooks((prevState: Book) => {
  //       return {
  //         ...prevState,
  //         [name]: value,
  //       };
  //     });
  //   }

  //   console.log(book);
  // };

  const updateChange = (e:any) => {
    const {name,value} = e.target;
    setBooks((initialInput:Book) => {
      return {
        ...initialInput,
        [name] : value,
      }
    });
    console.log(book);
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={["300", "500", "800"]}>
        <ModalHeader>
          <Badge>Add a book</Badge>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="book-modal">
            <VStack spacing={5}>
              <BookModalInput
                formLabel={"Book Title"}
                formHelperText={"The name of the book you are reading"}
                formErrorMessage={"Book name is invalid"}
                inputName={"title"}
                inputValue={book.title}
                inputValueUpdate={updateChange}
              />
              <BookModalInput
                formLabel={"Book Author"}
                formHelperText={"The author of the book you are reading"}
                formErrorMessage={"Author name is invalid"}
                inputName={"author"}
                inputValue={book.author}
                inputValueUpdate={updateChange}
              />
              <AddBookGenre
                bookGenre={book.genre}
                onChange={updateChange}
              />
              <ReadingStatus 
                readingStatusInputName="readingStatus"
                currentPageInputName="current-page"
                bookPagesInputName="pages-count"
                current_page={book.current_page}
                pages_count={book.pages_count}
                onChange={updateChange} />

            </VStack>
          </FormControl>
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
