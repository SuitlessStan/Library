import {
  Badge,
  Text,
  VStack,
  Container,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FadeIn from "react-fade-in";

const randomQuoteURL = "https://api.quotable.io/random";

type Quote = {
  id: string;
  content: string;
  author: string;
};

const RandomQuotes = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = () => {
      axios
        .get<Quote>(randomQuoteURL)
        .then((response) => {
          setQuote(response.data);
        })
        .catch((ex) => {
          setError(ex);
          console.log(error);
        });
    };
    const myInterval = setInterval(fetchQuote, 10000);
    return () => {
      clearInterval(myInterval);
    };
  }, [error]);

  return (
    <>
      {!quote && <CircularProgress isIndeterminate size={8} />}
      {quote && (
        <RandomQuote
          quoteID={quote.id}
          quoteContent={quote.content}
          quoteAuthor={quote.author}
        />
      )}
    </>
  );
};

interface RandomQuoteProps {
  quoteID: string;
  quoteContent: string;
  quoteAuthor: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const RandomQuote = ({
  quoteID,
  quoteContent,
  quoteAuthor,
}: RandomQuoteProps) => {
  return (
    <VStack mt={4}>
      <FadeIn>
        <Container key={quoteID} maxWidth={680} maxHeight={200}>
          <Text
            fontSize="lg"
            fontFamily={"Roboto"}
            color="dark"
            fontWeight="bold"
            fontStyle="italic"
            textAlign={"center"}
          >
            {quoteContent}
          </Text>
        </Container>
      </FadeIn>
      <FadeIn>
        <Badge>{" - " + quoteAuthor}</Badge>
      </FadeIn>
    </VStack>
  );
};

export default RandomQuotes;
