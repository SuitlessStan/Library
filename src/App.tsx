import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react"
import TopBar from './main-components/top-bar';
import RandomQuotes from "./main-components/features/random-quote";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="#FDFDFD" p="5" borderRadius="10" height="80vh" border="1px solid">
      <TopBar />
      <Box m="3">
            <Grid h="300px" templateRows="repeat(3,1fr)" templateColumns="repeat(4,1fr)" borderRadius="md">
                <GridItem rowSpan={3} colSpan={2} bg="orange.400">
                    <Box p="3">
                        <Text fontSize="3xl" color={"white"} fontFamily="Roboto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo sapiente blanditiis placeat error animi consequatur eligendi eaque voluptatum soluta libero possimus cum labore, ut, adipisci voluptatem voluptas minima culpa.
                        </Text>
                    </Box>
                </GridItem>
                <GridItem rowSpan={3} colSpan={2}>
                    <Box p="3" borderRadius="md" bg="blue.400">
                        <RandomQuotes/>
                    </Box>
                </GridItem>
            </Grid>
       </Box>
    </Box>
  </ChakraProvider>
)


