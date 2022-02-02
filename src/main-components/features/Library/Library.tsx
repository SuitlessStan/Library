import * as React from 'react';
import BookSample from './BookTemplate/BookTemplate';
import {Box,SimpleGrid} from '@chakra-ui/react';
import AddNewBook from './BookModal/add-new-book';



function Library() {

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

