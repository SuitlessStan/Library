import { Box, Image } from "@chakra-ui/react"
import React from "react"

type coverProps = {
  bookCover?: string
  coverHeight: number[]
}
export default function BookCover({ bookCover, coverHeight }: coverProps) {
  return (
    <>
      <Box
        rounded={"lg"}
        mt={0}
        pos={"relative"}
        // height={[240, 240, 240]}
        height={coverHeight}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${bookCover})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(30px)",
          },
        }}
      >
        <Image rounded={"md"} height="full" width="full" src={`${bookCover}`} justifyContent="center" />
      </Box>
    </>
  )
}
