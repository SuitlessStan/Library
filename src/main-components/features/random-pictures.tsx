import * as React from 'react';
import { Box, Image, CircularProgress, Code, Link, Center } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Card from 'react-bootstrap/Card';
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
      api.photos.getRandom({ count: 3, })
        .then(result => {
          setImage(
            // Array.isArray(result.response) ? result.response : [result.response]
            result.response
          );
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
        <Carousel variant="dark">
          {images.map((image:Photo) => {
            return (
              <Carousel.Item key={image.id}>
                <Card>
                  <Image src={image.urls.regular} alt={"Photograph by " + image.user.name} borderRadius="md"/>
                  <Carousel.Caption>
                    <Center>
                      <Code m="4">{image.user.username}</Code>
                    </Center>
                  </Carousel.Caption>
                </Card>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Center>
    </Box>
  );
}

export default Body;