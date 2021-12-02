import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Progress
  } from '@chakra-ui/react';
  import * as React from 'react';
  
  const IMAGE =
    'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg';
  
  export default function ProductSimple() {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Genre
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              How to win friends and influence people
            </Heading>
            <Stack direction={'column'} align={'center'}>
              <Progress hasStripe value={80}/>

            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
  