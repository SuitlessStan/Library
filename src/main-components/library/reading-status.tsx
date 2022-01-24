import { HStack, Text, Badge, CircularProgress } from "@chakra-ui/react";
import * as React from 'react';

const ReadingStatus = ({ readingStatus }: { readingStatus: number }) => {
  return (
    <>
      <HStack spacing={14}>
        <Text fontSize={["sm"]}>
          <Badge>Reading Status :</Badge>
        </Text>
        <CircularProgress value={readingStatus} size="30px" />
      </HStack>
    </>
  );
}

export default ReadingStatus;