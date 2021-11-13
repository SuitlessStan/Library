import {Flex,Text,Spacer,InputGroup,Input,Stack,InputLeftElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';


function TopBar() {
    return (
        <Flex>
        <Text
            fontSize="3xl"
            color="dark"
            fontWeight="bold"
        >   Hello, Issam</Text>
        <Spacer />
        <Stack>
            <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />} />
            <Input type="text" placeholder="Search for a book..." width="100%" />
            </InputGroup>
        </Stack>
        </Flex>
    );
}

export default TopBar;
