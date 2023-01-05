import { Flex, Spacer, Text, Badge, Tooltip } from "@chakra-ui/react"
import React from "react"

type genreProps = {
  fontSize: number[]
  bookGenre: string
}

export default function BookGenre({ fontSize, bookGenre }: genreProps) {
  return (
    <Flex width={"100%"}>
      <Text color={"gray.500"} fontSize={fontSize} fontWeight={"bold"}>
        Genre
      </Text>
      <Spacer />
      <Badge bg="orange.400">
        <Text textTransform={"uppercase"}>
          <Tooltip hasArrow label="Book Genre" bg="red.500" color="white" aria-label="A tooltip">
            {bookGenre}
          </Tooltip>
        </Text>
      </Badge>
    </Flex>
  )
}
