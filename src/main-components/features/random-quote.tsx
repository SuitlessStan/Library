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
    const [loading,setLoading] : [boolean, (loading:boolean) => void] = React.useState<boolean>(true);
    const [error,setError] : [string, (error:string) => void] = React.useState("");

   
    
    const update = () => {
        axios.get<Quote>(URL)
        .then(response => {
           setQuote(response.data);
           setLoading(false);
        })
        .catch(ex => {
            if (ex.response.status === 404){
                const errorMessage = 'Something has gone wrong!';
                setError(errorMessage);
                setLoading(false);
                console.log(error);
            }
        })
    };
    React.useEffect(update,[]);

    return (
      <Box>
          <Center>
            <Text fontSize="2xl" color="whiteAlpha">
            {quote.content}
            <Code>{quote.author}</Code>
            </Text>
            <Button variant="solid" onClick={update}>
                Generate
            </Button>
          </Center>
      </Box>
    );
}




export default RandomQuotes;









