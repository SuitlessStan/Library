import { HStack, Text, Badge, CircularProgress } from "@chakra-ui/react";
import * as React from 'react';

const ReadingStatus = ({ readingStatus }: { readingStatus: number }) => {
  return (
    <>
      <HStack spacing={14}>
        <Text fontSize={[12,13,14]}>
          <Badge fontSize={[12]}>Reading Status :</Badge>
        </Text>
        <CircularProgress value={readingStatus} size={"20px"} />
      </HStack>
    </>
  );
}

export default ReadingStatus;