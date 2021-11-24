import {Flex,Text,Spacer,InputGroup,Input,Stack,InputLeftElement,Box} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function TopBar() {
    return (
        <Flex>
        <Box p="2" bg="#1A1A23" borderRadius="md">
            <Text
                fontSize="3xl"
                color="white"
                fontWeight="bold"
                textAlign="center"
            >   Hello, Issam</Text>
        </Box>
        <Spacer />
        <Stack>
            <Box p="3" bg="#1A1A23" borderRadius="md">
                <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />} />
                <Input type="text" placeholder="Search for a book..." width="100%" color="white" />
                </InputGroup>
            </Box>
        </Stack>
        </Flex>
    );
}



export default TopBar;
