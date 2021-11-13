import {Box,Container,Text,Button,Grid,GridItem} from '@chakra-ui/react';
import React from 'react';


function RandomQuotes(){
    return (
       <Grid h="300px" templateRow="repeat(3,1fr)" templateColumns="repeat(5,1fr)">
           <GridItem rowSpan={3} columnSpan={5}>
               <Container>
                   
               </Container>
           </GridItem>
       </Grid>
    );
}




export default RandomQuotes;