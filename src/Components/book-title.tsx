import { Text, Tooltip } from "@chakra-ui/react"
import React from "react"

type titleProps = {
  bookTitle: string
  fontSize: number[] | string[]
}

export default function BookTitle({ bookTitle, fontSize }: titleProps) {
  return (
    <Text fontSize={fontSize} fontFamily={"roboto"} fontWeight={550} fontStyle="italic" textAlign={"center"}>
      <Tooltip hasArrow label="Book Title" bg="red.500" color="white" aria-label="A tooltip">
        {bookTitle}
      </Tooltip>
    </Text>
  )
}
