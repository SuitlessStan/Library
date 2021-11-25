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
import RandomPicture from "./main-components/features/random-pictures";
import Body from "./main-components/features/random-pictures";
import Nav from './main-components/top-bar';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="#4a5bf0" p="5">
      <Nav />
      <Box marginTop="5">
            <Grid templateRows="repeat(3,1fr)" templateColumns="repeat(4,1fr)" borderRadius="md">
                <GridItem rowSpan={3} colSpan={4}>
                  <Body/>
                </GridItem>
                <GridItem rowSpan={3} colSpan={4}>
                  <RandomQuotes/>
                </GridItem>
            </Grid>
       </Box>
    </Box>
  </ChakraProvider>
)


