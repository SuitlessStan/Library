import * as React from 'react';
import BookSample from './test';
import {Box, Grid} from '@chakra-ui/react';
import AddNewBook from './add-new-book';


type Book = {
    title: string,
    author: string,
    pages_count: number,
    book_cover: string,
    read: boolean,
    review?:string,
    isRead():boolean,
    updateReview():void,
}

const defaultBooks: Book[] = [];


function Library() {
    const [books, setBooks] = React.useState<Book[]>(defaultBooks);

    return (
        <>
            <Box p={10} m={5} borderRadius="15">
                <Grid templateColumns="repeat(4,1fr)" rowSpan="repeat(2,1fr)" borderRadius="md">
                    <AddNewBook/>
                    <BookSample/>
                    <BookSample/>
                    <BookSample/>
                    <BookSample/>
                    <BookSample/>
                    <BookSample/>   
                </Grid>
            </Box>
        </>
    );
}

export default Library;

