import {
    Box,
    useColorModeValue,
    Stack,
    VStack,
    HStack,
} from '@chakra-ui/react';
import {
    Text,
    Badge,
    Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import BookReview from './BookTemplate/review';
import ReadingStatus from './BookTemplate/reading-status';
import BookGenre from './BookTemplate/genre';
import BookTitle from './BookTemplate/title';
import BookAuthor from './BookTemplate/author';
import BookCover from './BookTemplate/cover';



interface BookTemplate {
    bookTitle: string;
    bookCover?: string;
    bookAuthor: string;
    bookGenre: string;
    bookReview: string;
    readingStatus: number;
}

export default function BookTemplate(props: BookTemplate) {

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
            <BookCover
                bookTitle={props.bookTitle}
                bookCover={props.bookCover} />
            <Stack pt={10} spacing={[5, 13, 15]} align={'center'}>
                {/* Book Genre */}
                <BookGenre bookGenre={props.bookGenre} />
                {/* Book Title */}
                <BookTitle bookTitle={props.bookTitle} />
                <BookAuthor bookAuthor={props.bookAuthor} />
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
                    <BookReview bookReview={props.bookReview} />
                </VStack>
            </Stack>
        </Box>
    );
}


