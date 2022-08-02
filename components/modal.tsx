import { Modal, ModalOverlay, ModalContent, ModalHeader, Badge, ModalCloseButton, ModalBody, VStack, FormControl, HStack, Input, FormHelperText, ModalFooter, ButtonGroup, Button, useDisclosure, useToast, Box } from "@chakra-ui/react";
import validator from "../utils/validator";
import ModalInput from "./modal-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import containsObject from "../utils/object-in-list";
import { FormEvent, useState } from "react";


const defaultBooks: Book[] = [];




export type Book = {
    bookTitle: string;
    bookAuthor: string;
    currentPage: number;
    bookPages: number;
    readingStatus?: (param1: number, param2: number) => boolean,
    bookReview: string;
    bookGenre: string;
}

type BookModal = {
    onClose: () => void;
    isOpen: boolean;
}




export default function BookModal({ onClose, isOpen }: BookModal) {


    const [books, setBooks] = useState(defaultBooks);
    const toast = useToast();




    const initialBookValues = {
        bookTitle: "",
        bookAuthor: "",
        currentPage: 1,
        bookPages: 100,
        readingStatus: (param1: number, param2: number) =>
            param1 < param2 ? false : true,
        bookReview: "",
        bookGenre: "",
    };

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
            bookReview: Yup.string().required(
                "A book review is required on submission"
            ),
        }),
        onSubmit: (values) => {

            if (!containsObject(values, books)) {
                setBooks((prev: any) => [...prev, values])
                onClose;
                toast({
                    title: "Addition successful",
                    description: "A new book was added to your list!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            }



        },
    });

    return (
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
            <form>
                <ModalContent>
                    <ModalHeader>
                        <Badge>Add a book</Badge>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody sx={modalBodyStyles}>
                        <VStack
                            spacing={5}
                            paddingTop={3}>
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
                                placeholder="Write down your book's title"
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
                                placeholder="Write down the name of the book's author"
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
                                formHelperText="Write a review of the book you're reading"
                                placeholder="Write down a review of the book you're currently reading" />

                        </VStack>
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
            </form>
        </Modal >
    )
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
