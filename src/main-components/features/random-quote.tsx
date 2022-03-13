import { Badge, Box, Text, VStack, Container ,CircularProgress } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FadeIn from 'react-fade-in';




const randomQuoteURL = 'https://api.quotable.io/random';




type Quote = {
    id: string,
    content: string,
    author: string
}

// placeholder object to hold initial quote state 
const quoteObject: Quote = {
    id: "",
    content: "",
    author: ""
}

const RandomQuotes = () => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState("");

    const fetchQuote = () => {
        axios.get<Quote>(randomQuoteURL)
            .then(response => {
                setQuote(response.data);
            })
            .catch(ex => {
                setError(ex);
                console.log(error)
            });
    }

    useEffect(() => {
        const myInterval = setInterval(fetchQuote, 10000);
        return () => {
            clearInterval(myInterval);
        }
    }, [error]);


    if (quote){
        const { id, content, author } = quote;
    }

    return (
        <>
        {!quote && <CircularProgress isIndeterminate size={8}/>}
        {quote && <RandomQuote quoteID={quote.id} quoteContent={quote.content} quoteAuthor={quote.author}/>}
        </>
        
    )
}


interface RandomQuoteProps {
    quoteID: string,
    quoteContent: string,
    quoteAuthor: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

const RandomQuote = ({ quoteID, quoteContent, quoteAuthor }: RandomQuoteProps) => {
    return (
        <VStack>
            <FadeIn>
                <Container key={quoteID} maxWidth={650}>
                    <Text fontSize="md" color="dark" fontStyle="italic" textAlign={"center"}>
                        {quoteContent}
                    </Text>
                </Container>
            </FadeIn>
            <FadeIn>
                <Badge>{" - " + quoteAuthor}</Badge>
            </FadeIn>
        </VStack>
    );
}

export default RandomQuotes;









