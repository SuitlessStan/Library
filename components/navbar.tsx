import * as React from "react";
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
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import greetingMesage from "../utils/greeting-message";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
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
                {greetingMesage(new Date()) === "Good Morning" ||
                "Good Afternoon" ? (
                  <SunIcon />
                ) : (
                  <MoonIcon />
                )}
              </HStack>
            </Container>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src={
                      "https://partycity.scene7.com/is/image/PartyCity/_sq_?$_500x500_$&$product=PartyCity/278696_full"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://partycity.scene7.com/is/image/PartyCity/_sq_?$_500x500_$&$product=PartyCity/278696_full"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <Text fontSize={"lg"}>Issam</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link href="/books">
                      <a>My Books</a>
                    </Link>
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
