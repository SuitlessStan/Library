import * as React from 'react';
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Container,
  HStack
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const greetingMesage = (date: Date) => {
    date = new Date();
    let currentHour: number = date.getHours();
    if (currentHour < 12 && currentHour > 0) {
      return "Good Morning";
    }
    else if (currentHour < 16 && currentHour > 12) {
      return "Good Afternoon";
    }
    else {
      return "Good Evening";
    }
  }

  return (

    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Container>
              <HStack>
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  fontStyle="italic"
                  fontFamily="Roboto"
                >
                  {greetingMesage(new Date())}
                </Text>
                {greetingMesage(new Date) === "Good Morning" ? <SunIcon /> : <MoonIcon />}
              </HStack>
            </Container>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'md'}
                    src={'https://partycity.scene7.com/is/image/PartyCity/_sq_?$_500x500_$&$product=PartyCity/278696_full'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://partycity.scene7.com/is/image/PartyCity/_sq_?$_500x500_$&$product=PartyCity/278696_full'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Text fontSize={"lg"}>Issam</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link to="/books">My Books</Link>
                  </MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}



