import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  VStack
} from "@chakra-ui/react";
import RandomQuotes from "./main-components/features/random-quote";
import Nav from "./main-components/top-bar";
import CaptionCarousel from "./main-components/features/Carousel";


export const App = () => (
  <ChakraProvider theme={theme} cssVarsRoot={undefined}>
    <Box>
      <Nav />
      <LandingPage />
    </Box>
  </ChakraProvider>
);

const LandingPage = () => {
  return (
  <>
    <VStack>
      <CaptionCarousel />
      <RandomQuotes />
    </VStack>
  </>
  );
}




