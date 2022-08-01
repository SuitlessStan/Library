import {
    Box,
    useColorModeValue,
    Stack,
    VStack,
    HStack,
    ButtonGroup,
    Flex,
    Input,
    useEditableControls,
    Textarea,
} from '@chakra-ui/react';
import {
    Image,
    Text,
    Badge,
    Code,
    CircularProgress,
    Tooltip,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import BookReview from './BookTemplate/book-review';
import ReadingStatus from './BookTemplate/reading-status';



interface BookTemplate {
    bookTitle: string;
    bookCover?: string;
    bookAuthor: string;
    bookGenre: string;
    bookDescription: string;
    readingStatus: number;
}

export default function BookSample(props: BookTemplate) {

    return (
        <Box
            role={'group'}
            p={3}
            w={['xs', 'xs', 'xs', 'xs']}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={['md', 'lg', '2xl']}
            rounded={['sm', 'md', 'lg']}
            pos={'relative'}
            zIndex={0}
        >
            {/* Book Cover */}
            <Box
                rounded={'lg'}
                mt={0}
                pos={'relative'}
                height={['50vh', '50vh', '50vh']}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${props.bookCover})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(30px)',
                    },
                }}
            >
                <Image
                    alt={props.bookTitle}
                    rounded={'md'}
                    height="full"
                    width="full"
                    src={`${props.bookCover}`}
                    justifyContent="center"
                />
            </Box>
            <Stack pt={10} spacing={[5, 13, 15]} align={'center'}>
                {/* Book Genre */}
                <HStack spacing={'20'}>
                    <Text color={'gray.500'} fontSize={[12, 13, 14]} fontWeight={'bold'}>
                        Genre
                    </Text>
                    <Badge bg="orange.400">
                        <Text textTransform={'uppercase'}>
                            <Tooltip
                                hasArrow
                                label="Book Genre"
                                bg="red.500"
                                color="white"
                                aria-label="A tooltip"
                            >
                                {props.bookGenre}
                            </Tooltip>
                        </Text>
                    </Badge>
                </HStack>
                {/* Book Title */}
                <Text
                    fontSize={['sm', 'md', 'lg']}
                    fontFamily={'roboto'}
                    fontWeight={550}
                    fontStyle="italic"
                    textAlign={'center'}
                >
                    <Tooltip
                        hasArrow
                        label="Book Title"
                        bg="red.500"
                        color="white"
                        aria-label="A tooltip"
                    >
                        {props.bookTitle}
                    </Tooltip>
                </Text>
                <Code>
                    <Text fontSize={'sm'}>
                        <Tooltip
                            label="Book Author"
                            bg="red.500"
                            color="white"
                            aria-label="A tooltip"
                        >
                            {props.bookAuthor}
                        </Tooltip>
                    </Text>
                </Code>
                <VStack align="center">
                    <HStack spacing={5}>
                        <Text fontSize={[12, 13, 14]}>
                            <Tooltip
                                hasArrow
                                label="Reading progress"
                                aria-label="a tooltip"
                                bg="red.500"
                                color="white"
                            >
                                <Badge colorScheme={'purple'}>Reading Progress</Badge>
                            </Tooltip>
                        </Text>
                        <ReadingStatus readingStatus={props.readingStatus} />
                    </HStack>
                    <BookReview bookReview={props.bookDescription} />
                </VStack>
            </Stack>
        </Box>
    );
}


