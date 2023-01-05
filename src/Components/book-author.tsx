import { Code, Text, Tooltip } from "@chakra-ui/react"
import React from "react"

type authorProps = {
  bookAuthor: string
  fontSize: number[] | string[] | string | number
}

export default function BookAuthor({ bookAuthor, fontSize }: authorProps) {
  return (
    <Code>
      <Text fontSize={fontSize}>
        <Tooltip label="Book Author" bg="red.500" color="white" aria-label="A tooltip">
          {bookAuthor}
        </Tooltip>
      </Text>
    </Code>
  )
}
