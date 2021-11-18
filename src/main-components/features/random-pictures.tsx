import * as React from 'react';
import { Box, Image, CircularProgress, Code, Link, Center } from '@chakra-ui/react';
import { createApi } from "unsplash-js";
import { Random } from 'unsplash-js/dist/methods/photos/types';

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

type RandomResponse = {
  id: string | number,
  width: number,
  height: number,
  color: string | null,
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  },
  links: {
    self: string,
    html: string,
    download: string,
    download_location: string
  },
  user: {
    id: string,
    username: string,
    name: string,
  },
  location: {
    title:string,
  }
}

const api = createApi({
  accessKey: "ydQzHFVBUsrPJEG7fZohNC7_NIN2pwYS_ql6RnsRd7c"
});


const PhotoComp = (photo: Photo) => {
  const { urls, width, height, id, user } = photo;
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


let randomPictures: any = [];

const Body = () => {
  const [images, setImage]  = React.useState(randomPictures);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(
    () => {
      api.photos.getRandom({ count: 10 })
        .then(result => {
          setImage(
            // Array.isArray(result.response) ? result.response : [result.response]
            result.response
          );
          console.log(images);
        })
        .catch(() => {
          const errorMessage = 'Something has gone wrong';
          setError(errorMessage);
          console.log(error);
        })
    }, []
  )

  return (
    <Box>
      <Center>
        {images.map((photo: Random) => {
          return (
            <Image borderRadius="md" src={photo.urls.regular} />
          );
        })}
      </Center>
    </Box>
  );
}

export default Body;