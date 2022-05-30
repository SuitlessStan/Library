import { ChakraProvider, Box, extendTheme, ButtonGroup } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useState } from 'react';
import {
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Container,
    Text,
    Badge,
    useDisclosure,
    HStack,
    VStack,
    Input,
    Center,
    Textarea,
    Select,
    IconButton
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Switch from 'react-switch'
import BookDisplay from '../../../Components/BookDisplay';




const activeLabelStyles = {
    transform: 'scale(0.80) translateY(-30px)',
}

export const theme = extendTheme({
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles,
                            },
                        },
                        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                        {
                            ...activeLabelStyles,
                        },
                        label: {
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: 'absolute',
                            // backgroundColor: 'white',
                            pointerEvents: 'none',
                            mx: 3,
                            px: 1,
                            my: 2,
                            transformOrigin: 'left top'
                        },
                    },
                },
            },
        },
    },
});

function Library() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Box>
                    <BookLibrary />
                </Box>
            </ChakraProvider>
        </>
    );
}

export default Library;





function BookLibrary() {

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [books, setBooks] = useState<any>([]);



    const greetingMesage = (date: Date) => {
        let currentHour: number = date.getHours();
        if (currentHour < 12 && currentHour > 0) {
            return "Good Morning";
        }
        else if (currentHour < 16 && currentHour > 12) {
            return "Good Afternoon";
        }
        else {
            return "Good Evening";
        }
    }

    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            bookTitle: "",
            bookAuthor: "",
            readStatus: false,
            currentPage: 0,
            bookPages: 0,
            bookGenre: "",
            bookReview: "",
        },
        validationSchema: Yup.object().shape({
            bookTitle: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Book title cannot be empty'),
            bookAuthor: Yup.string()
                .max(50, 'Must be 20 characters or less')
                .required('Book author cannot be empty and must be longer than 15 characters'),
            readStatus: Yup.boolean(),
            currentPage: Yup.number().positive("this number must be more than 25").integer("Must be more than 0").moreThan(25),
            bookPages: Yup.number().positive("this number must be more than 1200").integer("Must be more than 0").lessThan(1200),
            bookGenre: Yup.string().required('Required'),
            bookReview: Yup.string().required("A book review is required on submission"),
        }),
        onSubmit: values => {

            onClose();

            setBooks((prev: any) => [...prev, values]);
            toast({
                title: 'Addition successful',
                description: "A new book was added!",
                status: 'success',
                duration: 4500,
                isClosable: true,
            });




        },
    });


    const validator = (first: boolean | undefined, second: string | undefined | number) => {
        if (first && second) {
            return true;
        }
        else {
            return false;
        }
    }


    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                {/* Navbar */}
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    {/* Left Nav */}
                    <Box>
                        <Container>
                            <HStack>
                                <Text
                                    fontWeight="bold"
                                    fontSize="xl"
                                    fontStyle="italic"
                                    fontFamily="Roboto"
                                >
                                    {greetingMesage(new Date())}
                                </Text>
                                {greetingMesage(new Date()) === "Good Morning" ? <SunIcon /> : <MoonIcon />}
                            </HStack>
                        </Container>
                    </Box>
                    {/* Right Nav */}
                    <Flex alignItems={'center'} justifyContent={"center"}>
                        <Stack direction={'row'} spacing={7}>
                            <ButtonGroup size='sm' isAttached variant='solid' colorScheme={'teal'}>
                                <Button onClick={onOpen} mr='-px'>Add a new book</Button>
                                <IconButton onClick={onOpen} aria-label='Add a new book' icon={<AddIcon />} />
                            </ButtonGroup>

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
            {/* Form Modal */}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior={"inside"}
                blockScrollOnMount={true}
                motionPreset="slideInRight"
            >
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent>
                    <ModalHeader>
                        <Badge>Add a book</Badge>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '16px',
                                borderRadius: '8px',
                                backgroundColor: `rgba(0, 0, 0, 0.05)`,
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: `rgba(0, 0, 0, 0.05)`,
                            },
                        }}>
                        <form>
                            <VStack
                                spacing={10}
                                paddingTop={3}
                            >
                                <Box width={"100%"}>
                                    <FormControl variant="floating" id="book-title" isInvalid={validator(formik.touched.bookTitle, formik.errors.bookTitle)}>
                                        <FormLabel htmlFor="bookTitle">Book Title</FormLabel>
                                        <Input
                                            id="bookTitle"
                                            type="text"
                                            value={formik.values.bookTitle}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} />
                                        <FormHelperText>Write down the title of the book you're reading</FormHelperText>
                                        {(formik.errors.bookTitle && formik.touched.bookTitle) && <FormErrorMessage>{formik.errors.bookTitle}</FormErrorMessage>}
                                    </FormControl>
                                </Box>
                                <Box width={"100%"}>
                                    <FormControl variant="floating" id="book-author" isInvalid={validator(formik.touched.bookAuthor, formik.errors.bookAuthor)}>
                                        <FormLabel htmlFor="bookAuthor">Book Author</FormLabel>
                                        <Input
                                            id="bookAuthor"
                                            name="bookAuthor"
                                            type="text"
                                            value={formik.values.bookAuthor}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} />
                                        <FormHelperText>Write down the name of the author who wrote this book</FormHelperText>
                                        {(formik.errors.bookAuthor && formik.touched.bookAuthor) && <FormErrorMessage>{formik.errors.bookAuthor}</FormErrorMessage>}
                                    </FormControl>
                                </Box>
                                <Box width={"100%"}>
                                    <FormControl isInvalid={validator(formik.touched.readStatus, formik.errors.readStatus)}>
                                        <VStack spacing={8}>
                                            <FormLabel>Have you read this book ?</FormLabel>
                                            <Center>
                                                <HStack spacing={4}>
                                                    <label>Currently reading</label>
                                                    <Switch
                                                        id="readStatus"
                                                        name="readStatus"
                                                        checked={formik.values.readStatus}
                                                        onChange={() => {
                                                            formik.setFieldValue("readStatus", !formik.values.readStatus);
                                                            if (!formik.values.readStatus) {
                                                                formik.setFieldValue("currentPage", 100);
                                                                formik.setFieldValue("bookPages", 100);
                                                            }
                                                            else {
                                                                formik.setFieldValue("currentPage", "");
                                                                formik.setFieldValue("bookPages", "");
                                                            }

                                                        }}
                                                        uncheckedIcon={false}
                                                        checkedIcon={false}
                                                        height={20}
                                                        width={40}
                                                    />
                                                    <label>Yes</label>
                                                </HStack>
                                                {(!(formik.errors.currentPage) && formik.touched.currentPage) ? "test" : <FormErrorMessage>{formik.errors.currentPage}</FormErrorMessage>}
                                                {(!(formik.errors.bookPages) && formik.touched.bookPages) ? "test" : <FormErrorMessage>{formik.errors.bookPages}</FormErrorMessage>}
                                                {(!(formik.errors.readStatus) && formik.touched.readStatus) ? "" : <FormErrorMessage>{formik.errors.readStatus}</FormErrorMessage>}
                                            </Center>
                                            {!formik.values.readStatus ?
                                                <VStack>
                                                    <HStack>
                                                        <FormControl variant="floating" id="current-page" isInvalid={validator(formik.touched.currentPage, formik.errors.currentPage)}>
                                                            <FormLabel fontSize="sm">Current Page</FormLabel>
                                                            <Input
                                                                id="currentPage"
                                                                name="currentPage"
                                                                type="number"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.currentPage || ""}
                                                                size={"sm"} />
                                                        </FormControl>
                                                        <FormControl variant="floating" id="book-pages" isInvalid={validator(formik.touched.bookPages, formik.errors.bookPages)}>
                                                            <FormLabel fontSize="sm">Book Pages</FormLabel>
                                                            <Input
                                                                id="bookPages"
                                                                name="bookPages"
                                                                type="number"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.bookPages || ""}
                                                                size={"sm"}
                                                            />
                                                        </FormControl>
                                                    </HStack>
                                                    {!(formik.errors.currentPage || formik.errors.bookPages) ? <FormHelperText>Fill in information about the book you're reading</FormHelperText> : <VStack><FormErrorMessage>{formik.errors.currentPage}</FormErrorMessage><FormErrorMessage>{formik.errors.bookPages}</FormErrorMessage></VStack>}
                                                </VStack>
                                                : <Badge>Seems like a nice one 👍 </Badge>
                                            }
                                        </VStack>
                                    </FormControl>
                                </Box>
                                <Box w="100%">
                                    <FormControl id="book-genre" isInvalid={validator(formik.touched.bookGenre, formik.errors.bookGenre)}>
                                        <FormLabel htmlFor="bookGenre">Book Genre</FormLabel>
                                        <Select
                                            placeholder="Select book genre"
                                            name="bookGenre"
                                            id="bookGenre"
                                            value={formik.values.bookGenre}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            size="md"
                                        >
                                            <option value='Action and Adventure'>Action and Adventure</option>
                                            <option value='Classics'>Classics</option>
                                            <option value='Comic Book or Graphic Novel'>Comic Book or Graphic Novel</option>
                                            <option value="Detective and Mystery">Detective and Mystery</option>
                                            <option value="Fantasy">Fantasy</option>
                                            <option value="Historical Fiction">Historical Fiction</option>
                                            <option value="Horror">Horror</option>
                                            <option value="Romance">Romance</option>
                                            <option value="Science Fiction (Sci-Fi)">Science Fiction (Sci-Fi)</option>
                                            <option value="Short Stories">Short Stories</option>
                                            <option value="Suspense and Thrillers">Suspense and Thrillers</option>
                                            <option value="Women's Fiction">Women's Fiction</option>
                                            <option value="Biographies and Autobiographies">Biographies and Autobiographies</option>
                                            <option value="Cookbooks">Cookbooks</option>
                                            <option value="Essays">Essays</option>
                                            <option value="History">History</option>
                                            <option value="Memoir">Memoir</option>
                                            <option value="Poetry">Poetry</option>
                                            <option value="Self-Help">Self-Help</option>
                                            <option value="True Crime">True Crime</option>
                                        </Select>
                                        <FormHelperText>Select the book's genre</FormHelperText>
                                        {(formik.errors.bookGenre && formik.touched.bookGenre) && <FormErrorMessage>{formik.errors.bookGenre}</FormErrorMessage>}
                                    </FormControl>
                                </Box>
                                <Box width={"100%"}>
                                    <FormControl variant="floating" id="book-review" isInvalid={validator(formik.touched.bookReview, formik.errors.bookReview)}>
                                        <FormLabel>Book Review</FormLabel>
                                        <Textarea
                                            name="bookReview"
                                            id="bookReview"
                                            value={formik.values.bookReview}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            size="md"
                                            resize={"none"}
                                        />
                                        {!formik.errors.bookReview ? <FormHelperText>Add a review to the book you're reading</FormHelperText> : <FormErrorMessage>{formik.errors.bookReview}</FormErrorMessage>}
                                    </FormControl>
                                </Box>
                            </VStack>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup>
                            <Button
                                variant="solid"
                                type="submit"
                                // to fix later
                                onClick={(e: any) => formik.handleSubmit(e)}
                            >
                                Add Book
                            </Button>
                            <Button
                                variant="solid"
                                onClick={(e) => {
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

            <BookDisplay books={books} />


        </>
    );
}




