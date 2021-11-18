import * as React from 'react';
import axios from 'axios';
import { Box, Image,CircularProgress, Code, Link } from '@chakra-ui/react';
import { createApi } from "unsplash-js";

const URL: string = 'https://source.unsplash.com/random';

type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const api = createApi({
  accessKey: "ydQzHFVBUsrPJEG7fZohNC7_NIN2pwYS_ql6RnsRd7c"
});


const PhotoComp = (photo:Photo) => {
  const {urls,width,height,id,user} = photo;
  return (
    <Box>
      <Image src={urls.regular} alt={id.toString()} />
      <Code textAlign="center">
        Photograph by <Link href={`https://unsplash.com/@${user.username}`} isExternal>
        `${user.username}`
        </Link>
      </Code>
    </Box>
  );
}

