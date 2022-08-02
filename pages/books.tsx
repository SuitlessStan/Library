import Nav from "../components/books-nav";
import { Modal, ModalOverlay, ModalContent, ModalHeader, Badge, ModalCloseButton, ModalBody, VStack, FormControl, HStack, Input, FormHelperText, ModalFooter, ButtonGroup, Button, useDisclosure, useToast, Box } from "@chakra-ui/react";
import validator from "../utils/validator";
import { useFormik } from "formik";
import * as Yup from "yup";
import containsObject from "../utils/object-in-list";
import { useState } from "react";
import ModalInput from "../components/modal-input";
import { SimpleGrid } from '@chakra-ui/react'
import BookTemplate from "../components/book-template";
import FadeIn from "react-fade-in";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




const initialBookValues = {
  bookTitle: "",
  bookAuthor: "",
  currentPage: 1,
  bookPages: 100,
  bookReview: "",
  bookGenre: "",
};

export type Book = {
  bookTitle: string;
  bookAuthor: string;
  currentPage: number;
  bookPages: number;
  bookReview: string;
  bookGenre: string;
}

const defaultBooks: Book[] = [];

export default function BookLibrary() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [books, setBooks] = useState(defaultBooks);
  const [bookLength, setBookLength] = useState(0);

  const toast = useToast();

  const formik = useFormik({
    initialValues: initialBookValues,
    validationSchema: Yup.object().shape({
      bookTitle: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Book title cannot be empty"),
      bookAuthor: Yup.string()
        .max(50, "Must be 20 characters or less")
        .required(
          "Book author cannot be empty and must be longer than 15 characters"
        ),
      currentPage: Yup.number()
        .positive("this number must be more than 1")
        .integer("Must be more than 0")
        .moreThan(1),
      bookPages: Yup.number()
        .positive("this number must be more than 1200")
        .integer("Must be more than 0")
        .lessThan(1200),
      bookGenre: Yup.string().required("Required"),
      bookReview: Yup.string().required(
        "A book review is required on submission"
      ),
    }),
    onSubmit: (values) => {
      if (!containsObject(values, books)) {
        setBooks((prev: Book[]) => [...prev, values])
        onClose();
        toast({
          title: "Addition successful",
          description: "A new book was added!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      else {
        toast({
          title: "Book already exists",
          description: "This book already exists in the library",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }


    },
  });


  return (
    <>
      <Nav onOpen={onOpen} />
      <Modal
        onEsc={onClose}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
        blockScrollOnMount={true}
        motionPreset="slideInRight"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>
            <Badge>Add a book</Badge>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody sx={modalBodyStyles}>
            <form>
              <VStack spacing={5} paddingTop={3}>
                <ModalInput
                  formControlID="bookTitle"
                  Validator={validator(
                    formik.touched.bookTitle,
                    formik.errors.bookTitle
                  )}
                  inputID="bookTitle"
                  formLabel="Book Title"
                  formikSubjectValue={formik.values.bookTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  formHelperText="Book title cannot be empty and must be less than 50 characters"
                  formikSubjectError={formik.errors.bookTitle}
                  formikSubjectTouched={formik.touched.bookTitle}
                  inputType="input"
                  inputName="bookTitle"
                />
                <ModalInput
                  formControlID="bookAuthor"
                  Validator={validator(
                    formik.touched.bookAuthor,
                    formik.errors.bookAuthor
                  )}
                  inputID="bookAuthor"
                  formLabel="Book Author"
                  formikSubjectValue={formik.values.bookAuthor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  formHelperText="Name of the book author you're submitting this book for"
                  formikSubjectError={formik.errors.bookAuthor}
                  formikSubjectTouched={formik.touched.bookAuthor}
                />
                <ModalInput
                  formControlID="bookGenre"
                  Validator={validator(formik.touched.bookGenre, formik.errors.bookGenre)}
                  inputID="bookGenre"
                  inputName="bookGenre"
                  formLabel="Book Genre"
                  formikSubjectValue={formik.values.bookGenre}
                  formikSubjectError={formik.errors.bookGenre}
                  formikSubjectTouched={formik.touched.bookGenre}
                  inputType="select"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  formHelperText="What is the genre of the book you're reading"
                />
                <Box>
                  <FormControl>
                    <HStack spacing={3}>
                      <Input
                        type="number"
                        name="currentPage"
                        value={formik.values.currentPage}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <Input
                        type="number"
                        name="bookPages"
                        value={formik.values.bookPages}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </HStack>
                    <FormHelperText>{"Fill in information about the book you're reading"}</FormHelperText>
                  </FormControl>
                </Box>
                <ModalInput
                  formControlID="bookReview"
                  Validator={validator(formik.touched.bookReview, formik.errors.bookReview)}
                  inputID="bookReview"
                  inputName="bookReview"
                  formLabel="Book Review"
                  formikSubjectValue={formik.values.bookReview}
                  formikSubjectError={formik.errors.bookReview}
                  formikSubjectTouched={formik.touched.bookReview}
                  inputType="textarea"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  formHelperText="Write a description of the book you're reading" />
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
                variant="solid"
                type="submit"
                colorScheme='teal'
                // to fix later
                onClick={(e: any) => formik.handleSubmit(e)}
              >
                Add Book
              </Button>
              <Button
                variant="solid"
                colorScheme='facebook'
                onClick={(e: any) => {
                  onClose();
                  formik.handleReset(e);
                }}
                type="reset"
              >
                Cancel
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box p={5}>
        <SimpleGrid columns={{ sm: 2, md: 2, lg: 4 }}>
          {
            books.map((book: Book, index: number) => {
              const { currentPage, bookPages } = book
              return (
                <>
                  <FadeIn>
                    <BookTemplate key={index}
                      readingStatus={currentPage / bookPages * 100}
                      bookCover="https://www.goodillustration.com/blog/wp-content/uploads/2021/08/640-4.jpg"
                      bookTitle={book.bookTitle}
                      bookAuthor={book.bookAuthor}
                      bookGenre={book.bookGenre}
                      bookReview={book.bookReview} />
                  </FadeIn>
                </>
              )
            })
          }
        </SimpleGrid>
      </Box>
    </>
  );
}


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const modalBodyStyles = {
  "&::-webkit-scrollbar": {
    width: "16px",
    borderRadius: "8px",
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
};
