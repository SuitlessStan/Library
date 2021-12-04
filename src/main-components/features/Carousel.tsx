import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { createApi } from 'unsplash-js';

// const URL: string = 'https://source.unsplash.com/random';

const api = createApi({
  accessKey: "ydQzHFVBUsrPJEG7fZohNC7_NIN2pwYS_ql6RnsRd7c"
});

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
  location: {
    title:string,
    name:string,
    city:string,
    country:string,
  }
};



let randomPictures: any = [];


export default function CaptionCarousel() {

  const [images, setImage]  = React.useState(randomPictures);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(
    () => {
      api.photos.getRandom({ count: 10 })
        .then(result => {
          setImage(result.response);
        })
        .catch(() => {
          const errorMessage = 'Something has gone wrong';
          setError(errorMessage);
          console.log(error);
        })
    }, []
  );


  const [slider, setSlider] = React.useState<Slider | null>(null);


  // Settings for the slider
  const settings = {
    dots: true,   
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box
    borderRadius="md"
      position={'relative'}
      height={'650px'}
      width={'75vw'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {images.map((card:Photo, index: React.Key | null | undefined) => (
          <Box
            key={card.id}
            height={'2xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.urls.regular})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="30%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                  {card.location.title}
                </Heading>
                <Text fontSize={{ base: 'lg', lg: 'lg' }}>
                {card.location.country && card.location.city ? card.location.country + ' , ' + card.location.city : ' '}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
