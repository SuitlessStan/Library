import { Box, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import {
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  Text,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { AddIcon, MoonIcon, SunIcon, ArrowBackIcon } from "@chakra-ui/icons";
import greetingMesage from "../utils/greeting-message";

type NavProps = {
  onOpen: () => void;
};

const Nav = (props: NavProps) => {
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
                {greetingMesage(new Date()) === "Good Morning" ? (
                  <SunIcon />
                ) : (
                  <MoonIcon />
                )}
              </HStack>
            </Container>
          </Box>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ButtonGroup
                size="sm"
                isAttached
                variant="solid"
                colorScheme={"teal"}
              >
                <Button onClick={props.onOpen} mr="-px">
                  Add a new book
                </Button>
                <IconButton
                  onClick={props.onOpen}
                  aria-label="Add a new book"
                  icon={<AddIcon />}
                />
              </ButtonGroup>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Link href="../">
                <Button>
                  <ArrowBackIcon />
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
