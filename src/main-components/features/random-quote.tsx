import {Box, Button, Center, Code, Text} from '@chakra-ui/react';
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
      <Box mt={5}>
          <Center>
            <Text fontSize="3xl" color="white">
            {quote.content}
            </Text>
          </Center>
          <Center>
            <Code mt={4}>{quote.author}</Code>
          </Center>
      </Box>
    );
}




export default RandomQuotes;









