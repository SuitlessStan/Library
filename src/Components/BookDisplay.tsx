import { Box, Grid, GridItem } from '@chakra-ui/react';
import * as React from 'react';
import BookSample from "../main-components/features/Library/BookTemplate/BookTemplate";



const BookDisplay = (props: any) => {
    return <>
        <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {props.books.map((book: any) => {
                    return <BookSample
                        bookTitle={book.bookTitle}
                        bookAuthor={book.bookAuthor}
                        bookGenre={book.bookGenre}
                        readingStatus={book.readingStatus}
                        bookReview={book.bookReview} />
                })}
            </Grid>
        </Box>
    </>
}


export default BookDisplay;