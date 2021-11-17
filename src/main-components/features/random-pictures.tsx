import * as React from 'react';
import axios from 'axios';
import {Box,Image} from '@chakra-ui/react';

const URL:string = 'https://source.unsplash.com/random';


interface RandomPictures {
    src:string,
}

const randomPictures = (props:RandomPictures) => {
    return (
        <Box boxSize="md">
            <Image src={props.src} alt="random picture" width={"100%"}/>
        </Box>
    );
}

function RandomPicture() {
    return (
        randomPictures({src:URL})
    );
}

export default RandomPicture;