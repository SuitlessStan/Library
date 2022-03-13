import React from "react";
import {Image,Box} from '@chakra-ui/react';


const BookCover = ({ bookCoverURL }: { bookCoverURL: string }) => {
    return (
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={[200, 200, 200]}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${bookCoverURL})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(30px)",
          },
        }}
      >
        <Image
          rounded={"md"}
          height="full"
          width="full"
          // objectFit={"cover"}
          src={bookCoverURL}
          justifyContent="center"
        />
      </Box>
    );
  }


export default BookCover;