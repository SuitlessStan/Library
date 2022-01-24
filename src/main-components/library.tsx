import * as React from 'react';
import BookSample from './test';
import {Box, Grid,SimpleGrid} from '@chakra-ui/react';
import AddNewBook from './add-new-book';


type Book = {
    title: string,
    author: string,
    book_cover: string,
    read: boolean,
    review?:string,
}

const defaultBooks: Book[] = [];


function Library() {
    const [books, setBooks] = React.useState<Book[]>(defaultBooks);

    return (
        <>
            <Box p={15} mt={20} borderRadius="15">
                <SimpleGrid columns={{
                    sm:1,
                    md:2,
                    lg:3
                }} spacing={10}>
                    <AddNewBook/>
                    <BookSample/>
                    <BookSample/>
                    <BookSample/>
                </SimpleGrid>
            </Box>
        </>
    );
}

export default Library;

