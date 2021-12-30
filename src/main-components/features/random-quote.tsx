import {Badge, Box, Button, Code,  Container,  Text} from '@chakra-ui/react';
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
    const [quote,setQuote] = React.useState(defaultRandomQuote);

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
        });
    };
    React.useEffect(update,[]);

    return (
    <Container centerContent>
        <Box padding="3" textAlign="center" w={"75vw"} height={185}>
            <Text fontSize="4xl" color="dark" fontStyle="italic">
                    {quote.content}
            </Text>
            <Badge>{" - " + quote.author}</Badge>
            <br/>
            <Button m={4} variant="ghost" onClick={update}>
                Next
            </Button>
        </Box>
    </Container>
    );
}




export default RandomQuotes;









