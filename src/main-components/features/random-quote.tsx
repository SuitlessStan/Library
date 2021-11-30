import {Box, Button, Center, Code, Container, Flex, Spacer, Text} from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';




interface Quote {
    id:number,
    author:string,
    content:string,
}

const defaultRandomQuote : any = [];

const URL : string = 'https://api.quotable.io/random';


function RandomQuotes(){
    const [quote,setQuote] : [Quote, (quote:Quote) => void] = React.useState(defaultRandomQuote);

    const update = () => {
        axios.get<Quote>(URL)
        .then(response => {
           setQuote(response.data);
        })
        .catch(ex => {
            if (ex.response.status === 404){
                const errorMessage = 'Something has gone wrong!';
                console.log(errorMessage);
            }
        })
    };
    React.useEffect(update,[]);

    return (
        <Box padding="2" textAlign="center" borderRadius="md">
                <Text fontSize="3xl" color="dark" fontStyle="italic">
                    {quote.content}
                    <Code m={2} colorScheme="dark">{" - " + quote.author}</Code>
                </Text>
                
                <Button m={1} variant="solid" colorScheme="facebook" onClick={update}>
                    I'm feeling lucky!
                </Button>
        </Box>
    );
}




export default RandomQuotes;









