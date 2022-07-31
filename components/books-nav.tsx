import { Box, ButtonGroup } from "@chakra-ui/react";
import {
  Flex,
  Button,
  useColorModeValue,
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
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
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
          <ButtonGroup
            size="sm"
            isAttached
            variant="solid"
            colorScheme='teal'
          >
            <Button onClick={props.onOpen}>
              Add a new book
            </Button>
            <IconButton
              onClick={props.onOpen}
              aria-label="Add a new book"
              icon={<AddIcon />}
            />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button colorScheme='facebook' size={'sm'}>
              <Link href="../">
                <ArrowBackIcon />
              </Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
