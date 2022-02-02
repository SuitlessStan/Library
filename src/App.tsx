import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import RandomQuotes from "./main-components/features/random-quote";
import Nav from "./main-components/top-bar";
import CaptionCarousel from "./main-components/features/Carousel";
import Library from "./main-components/features/Library/Library";


export const App = () => (
  <ChakraProvider theme={theme} cssVarsRoot={undefined}>
    <Box>
      <Nav />
      <LandingPage />
      <Library />
    </Box>
  </ChakraProvider>
);


const LandingPage = () => {
  return (
  <>
    <Grid
    templateRows="repeat(3,1fr)"
    templateColumns="repeat(4,1fr)"
    borderRadius="md"
    >
      <GridItem rowSpan={3} colSpan={4}>
        <Center>
          <CaptionCarousel />
        </Center>
      </GridItem>
      <GridItem rowSpan={3} colSpan={4}>
        <RandomQuotes />
      </GridItem>
    </Grid>
  </>
  );
}