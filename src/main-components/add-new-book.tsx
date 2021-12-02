import * as React from 'react';
import {VStack,Text,IconButton, Center} from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';


export default function AddNewBook() {
    return (
        <Center>
            <VStack spacing="20px">
                <Text
                fontSize="3xl"
                >{"Add a new book"}</Text>
                <IconButton
                size="3xl"
                aria-label="add a new book"
                icon={<AddIcon/>}
                variant="ghost"
                >
                    Add
                </IconButton>
            </VStack>
        </Center>
    )
}