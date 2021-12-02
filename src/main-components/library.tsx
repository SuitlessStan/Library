import * as React from 'react';
import ProductSimple from './test';
import {Grid} from '@chakra-ui/react';
import AddNewBook from './add-new-book';


type Book = {
    title: string,
    author: string,
    pages_count: number,
    book_cover: string,
    read: boolean
}

const defaultBooks: Book[] = [];


function Library() {
    // const [books, setBooks]: [Book[], (books: Book[]) => void] = React.useState(defaultBooks);

    return (
        <>
            <Grid templateColumns="repeat(3,1fr)" rowSpan="repeat(2,1fr)" borderRadius="md">
                <AddNewBook/>
                <ProductSimple/>
                <ProductSimple/>
                <ProductSimple/>
            </Grid>
        </>
    );
}

export default Library;

