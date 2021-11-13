import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import {SearchIcon} from '@chakra-ui/icons';
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import TopBar from './main-components/top-bar';
import RandomQuotes from "./main-components/random-quote";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="#FDFDFD" p="5" borderRadius="10" height="80vh" m="2" border="1px solid">
      <TopBar />
      <RandomQuotes />
    </Box>
  </ChakraProvider>
)



function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
          Open
      </Button>
      <Box p="5" borderRadius="10">
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
      </Box>
    </>
  )
}
