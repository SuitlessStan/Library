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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddBookGenre from "./adding-book-modal.tsx/book-genre";
import AddBookReview from "./adding-book-modal.tsx/book-review";
import Book from "./interfaces/book";
import BookModalInput from "./adding-book-modal.tsx/modal-input";

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

  let [readStatus,setReadStatus] = React.useState(book.readingStatus);


  const updateChange = (e: any) => {
    const { value, name } = e.target;
    setBooks((prevState: Book) => {
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
            <BookModalInput
            formLabel={"Book Title"}
            formHelperText={"The name of the book you are reading"}
            inputName={"title"}
            inputValue={book.title}
            inputValueUpdate={updateChange}
            />
            <BookModalInput
            formLabel={"Book Author"}
            formHelperText={"The author of the book you are reading"}
            inputName={"author"}
            inputValue={book.author}
            inputValueUpdate={updateChange}
            />
            <AddBookGenre
            bookGenre={book.genre}
            onChange={updateChange}
            />
            <RadioGroup name="readingStatus" value={readStatus} onChange={val => {setReadStatus(val);
            setBooks((prevState : Book) => {
              return {
                ...prevState,
                [name]:val,
              }
            }); 
            }}>
              <Stack direction="row">
                <Radio value="not read">not read</Radio>
                <Radio value="read">read</Radio>
              </Stack>
            </RadioGroup>
            
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

function ReadingStatus({readingStatus} : {readingStatus:string}) {
  const [switchValue,setSwitchValue] = React.useState<string>(readingStatus);
  return (
    <HStack>
      Labe
    </HStack>
  );
}
