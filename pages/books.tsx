import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import {
  Button,
  Badge,
  ButtonGroup,
  useDisclosure,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Switch from "react-switch";
import validator from "../utils/validator";
import Nav from "../components/books-nav";
import ModalInput from "../components/modal-input";

const initialBookValues = {
  bookTitle: "Some Book Title",
  bookAuthor: "Some book Author",
  currentPage: 1,
  bookPages: 100,
  readingStatus: (param1: number, param2: number) =>
    param1 < param2 ? false : true,
  bookDescription: "Some book description",
  bookGenre: "Some book genre",
};

export default function BookLibrary() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      readStatus: Yup.boolean(),
      currentPage: Yup.number()
        .positive("this number must be more than 1")
        .integer("Must be more than 0")
        .moreThan(1),
      bookPages: Yup.number()
        .positive("this number must be more than 1200")
        .integer("Must be more than 0")
        .lessThan(1200),
      bookGenre: Yup.string().required("Required"),
      bookDescription: Yup.string().required(
        "A book review is required on submission"
      ),
    }),
    onSubmit: (values) => {
      onClose();
      toast({
        title: "Addition successful",
        description: "A new book was added!",
        status: "success",
        duration: 4500,
        isClosable: true,
      });
    },
  });

  return (
    <>
      <Nav onOpen={onOpen} />
      <Modal
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
              <VStack spacing={10} paddingTop={3}>
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
                <ModalInput
                  formControlID="bookDescription"
                  Validator={validator(formik.touched.bookDescription, formik.errors.bookDescription)}
                  inputID="bookDescription"
                  inputName="bookDescription"
                  formLabel="Book Description"
                  formikSubjectValue={formik.values.bookDescription}
                  formikSubjectError={formik.errors.bookDescription}
                  formikSubjectTouched={formik.touched.bookDescription}
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
    </>
  );
}

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
