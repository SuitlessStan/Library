import * as React from 'react';
import BookSample from './BookTemplate/BookTemplate';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import LibraryNav from './library-nav';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';




const settings = {
    lazyload: true,
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 3,
    gutter: 5

};

const clickEvent = (slide: any, info: any) => {
    console.log(slide, info);
};


function Library() {

    return (
        <>
            <ChakraProvider theme={theme}>
                <Box>
                    <LibraryNav />
                    <Box>
                        <TinySlider settings={settings} onClick={clickEvent}>
                            <h1>Hello World</h1>
                            <h2>Hello World</h2>
                        </TinySlider>
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}

export default Library;

