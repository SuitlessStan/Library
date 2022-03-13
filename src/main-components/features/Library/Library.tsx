import * as React from 'react';
import BookSample from './BookTemplate/BookTemplate';
import {HStack} from '@chakra-ui/react';
import AddNewBook from './BookModal/add-new-book';



function Library() {

    return (
        <>
            <HStack spacing={20}>
                <BookSample/>
                <BookSample/>
                <BookSample/>
                <BookSample/>
            </HStack>
        </>
    );
}

export default Library;

