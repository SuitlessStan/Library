import {
    Box,
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
    Select
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
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Switch from 'react-switch'

interface Book {
    title: string;
    author: string;
    pages_count?: number | null | 0;
    current_page?: number | null | 0;
    readStatus?: boolean;
    genre: string;
    review?: string;
}


export default function LibraryNav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();


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


    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Container>
                            <Text
                                fontWeight="bold"
                                fontSize="xl"
                                fontStyle="italic"
                                fontFamily="Roboto"
                            >
                                {greetingMesage(new Date())}
                            </Text>
                        </Container>
                    </Box>

                    <Flex alignItems={'center'} justifyContent={"center"}>
                        <Stack direction={'row'} spacing={7}>
                            <Button
                                variant={'solid'}
                                colorScheme={'teal'}
                                size={'md'}
                                onClick={onOpen}
                                mr={4}
                                leftIcon={<AddIcon />}>

                                Add a new book
                            </Button>

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>

                <AddNewBookModal isOpen={isOpen} onClose={onClose} />
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

    const formik = useFormik({
        initialValues: {
            bookTitle: "",
            bookAuthor: "",
            readStatus: false,
            currentPage: 40,
            bookPages: 400,
            bookGenre: "",
            bookReview: "",
        },
        validationSchema: Yup.object({
            bookTitle: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Book title cannot be empty'),
            bookAuthor: Yup.string()
                .max(50, 'Must be 20 characters or less')
                .required('Book author cannot be empty and must be longer than 15 characters'),
            readStatus: Yup.boolean(),
            currentPage: Yup.number().positive("this number must be more than 0").integer("Must be more than 0").moreThan(40).nullable(true),
            bookPages: Yup.number().positive("this number must be more than 0").integer("Must be more than 0").lessThan(1000).nullable(true),
            bookGenre: Yup.string().required('Required'),
            bookReview: Yup.string().required("A book review is required on submission"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        },
    });

    const validator = (first: boolean | undefined, second: string | undefined) => {
        if (first && second) {
            return true;
        }
        else {
            return false;
        }
    }


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Badge>Add a book</Badge>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={8}>
                                <Box width={"100%"}>
                                    <FormControl isInvalid={validator(formik.touched.bookTitle, formik.errors.bookTitle)}>
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
                                    <FormControl isInvalid={formik.touched.bookAuthor}>
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
                                    <FormControl isInvalid={formik.touched.readStatus}>
                                        <VStack>
                                            <FormLabel>Have you read this book ?</FormLabel>
                                            <Center>
                                                <HStack spacing={4}>
                                                    <label>No</label>
                                                    <Switch
                                                        id="readStatus"
                                                        name="readStatus"
                                                        checked={formik.values.readStatus}
                                                        onChange={() => formik.setFieldValue("readStatus", !formik.values.readStatus, true)}
                                                        uncheckedIcon={false}
                                                        checkedIcon={false}
                                                        height={20}
                                                        width={40}
                                                    />
                                                    <label>Yes</label>
                                                </HStack>
                                                {(!(formik.errors.readStatus) && formik.touched.readStatus) ? "" : <FormErrorMessage>{formik.errors.readStatus}</FormErrorMessage>}
                                            </Center>
                                            {!formik.values.readStatus ?
                                                <VStack>
                                                    <HStack>
                                                        <Input
                                                            id="currentPage"
                                                            name="currentPage"
                                                            type="number"
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.currentPage}
                                                            size={"sm"} />
                                                        <Input
                                                            id="bookPages"
                                                            name="bookPages"
                                                            type="number"
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.bookPages}
                                                            size={"sm"}
                                                        />
                                                    </HStack>
                                                    {!((formik.errors.currentPage || formik.errors.bookPages) && (formik.touched.currentPage || formik.touched.bookPages)) ? <FormErrorMessage>{formik.errors.currentPage}</FormErrorMessage> : <FormHelperText>Fill in pages information about your book</FormHelperText>}
                                                </VStack>
                                                : <Badge>Seems like a nice one {":)"}</Badge>
                                            }
                                        </VStack>
                                    </FormControl>
                                </Box>
                                <Box width={"100%"}>
                                    <FormControl isInvalid={formik.values.bookGenre === formik.errors.bookGenre}>
                                        <VStack spacing={5}>
                                            <FormLabel htmlFor="bookGenre">Book Genre</FormLabel>
                                            <FormHelperText>Select Book Genre </FormHelperText>
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
                                            {(formik.errors.bookGenre && formik.touched.bookGenre) && <FormErrorMessage>{formik.errors.bookGenre}</FormErrorMessage>}
                                        </VStack>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl>
                                        <VStack>
                                            <FormLabel>Book Review</FormLabel>
                                            <Textarea
                                                name="bookReview"
                                                id="bookReview"
                                                value={formik.values.bookReview}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                size="lg"
                                                resize={"none"}
                                            />
                                            {!formik.errors.bookReview ? <FormHelperText>Add a review to the book you're reading</FormHelperText> : <FormErrorMessage>{formik.errors.bookReview}</FormErrorMessage>}
                                        </VStack>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <HStack spacing={10}>
                                        <Button
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            type="reset"
                                            onClick={formik.handleReset}
                                        >
                                            Reset
                                        </Button>
                                    </HStack>
                                </Box>
                            </VStack>
                        </form>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

interface ReadingSwitchProps {
    name: string;
    id: string | undefined;

}
const ReadSwitch = ({ name, id }: ReadingSwitchProps) => {

    let [value, setValue] = useState(false);

    useEffect(() => {
        return () => {
            console.log(value);
        }
    }, [value]);
    return <>
        <Switch
            name={name}
            id={id}
            checked={value}
            onChange={(e: any) => {
                setValue(prevValue => !prevValue);
            }}

        />
    </>
}