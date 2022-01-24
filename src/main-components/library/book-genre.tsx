import * as React from "react";
import { HStack, Text, Badge } from "@chakra-ui/react";

const BookGenre = ({ bookGenre }: { bookGenre: string }) => {
  return (
    <>
      <HStack spacing={"20"}>
        <Text
          color={"gray.500"}
          fontSize={["sm", "md", "lg"]}
          textTransform={"uppercase"}
          fontWeight={"bold"}
        >
          Genre
        </Text>
        <Badge>
          <Text textTransform={"uppercase"}>{bookGenre}</Text>
        </Badge>
      </HStack>
    </>
  );
};

export default BookGenre;
