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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="#4a5bf0" p="5" height="80vh">
      <TopBar />
      <Box marginTop="5">
            <Grid templateRows="repeat(3,1fr)" templateColumns="repeat(4,1fr)" borderRadius="md">
                <GridItem rowSpan={3} colSpan={4}>
                  <RandomPicture/>
                  <RandomQuotes/>
                </GridItem>
            </Grid>
       </Box>
    </Box>
  </ChakraProvider>
)


