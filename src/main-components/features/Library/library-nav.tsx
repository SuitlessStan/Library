import { ReactNode } from 'react';
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
    Switch,
    Center
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
import { AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
            bookTitle: '',
            bookAuthor: '',
            readStatus: 0,
            currentPage: 0,
            bookPages: 400,
            bookGenre: "",
            bookReview: "",
        },
        validationSchema: Yup.object({
            bookTitle: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            bookAuthor: Yup.string()
                .max(20, 'Must be 10 characters or less')
                .required('Required'),
            readStatus: Yup.boolean().oneOf([true], 'This field must be checked!'),
            currentPage: Yup.number().nullable(false),
            bookPages: Yup.number().nullable(false),
            bookGenre: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Badge>Add a book</Badge>
                    </ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={formik.handleSubmit} >
                        <VStack>
                            <Box>
                                <FormControl isInvalid={formik.errors.bookTitle ? true : false}>
                                    <FormLabel htmlFor="bookTitle">Book Title</FormLabel>
                                    <Input
                                        id="bookTitle"
                                        type="text"
                                        value={formik.values.bookTitle}
                                        onChange={formik.handleChange} />
                                    {formik.errors.bookTitle ? <FormErrorMessage>Book title is required here!</FormErrorMessage> : <FormHelperText>What is the book Title of the book you're reading ?</FormHelperText>}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl isInvalid={formik.errors.bookAuthor ? true : false}>
                                    <FormLabel htmlFor="bookAuthor">Book Author</FormLabel>
                                    <Input
                                        id="bookAuthor"
                                        type="text"
                                        value={formik.values.bookAuthor}
                                        onChange={formik.handleChange} />
                                    {formik.errors.bookAuthor ? <FormErrorMessage>Book Author is required here</FormErrorMessage> : <FormHelperText>Who is the author of the book you're reading ?</FormHelperText>}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>Have you read this book ?</FormLabel>
                                    <Center>
                                        <Switch
                                            htmlFor="readStatus"
                                            id="readStatus"
                                            value={formik.values.readStatus}
                                            onChange={formik.handleChange}
                                            isChecked={formik.values.readStatus === 0 ? false : true}
                                        />
                                    </Center>
                                    {formik.values.readStatus === 0 ?
                                        <HStack>
                                            <Input
                                                id="currentPage"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.currentPage} />
                                            <Input
                                                id="bookPages"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.bookPages}
                                            />
                                        </HStack>
                                        : <Text>Seems like a nice book!</Text>
                                    }
                                </FormControl>
                            </Box>
                            <Box>
                                <Button
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </VStack>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}

