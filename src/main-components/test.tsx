import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Badge,
    HStack,
    CircularProgress,
  } from '@chakra-ui/react';
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import * as React from 'react';
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button
  } from '@chakra-ui/react'
  
  const IMAGE =
    'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg';
  
  export default function BookSample() {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'400px'}
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
            <HStack spacing={"15"}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} fontWeight={"bold"}>
              Genre
            </Text>
            <Badge>
              <Text textTransform={"uppercase"}>
                HORROR
              </Text>
            </Badge>
            </HStack>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500} textAlign={"center"}>
                How to win friends and influence people
            </Heading>
            <Stack direction={'column'} align={'center'}>
              <HStack spacing={14}>
                <Text>Reading Status :</Text>
                <CircularProgress value={80} />
              </HStack>
              {/* <Text noOfLines={[2,3,4]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat ad quidem qui exercitationem tempore blanditiis similique animi. Perspiciatis doloribus ipsum officia tempora id cumque eos modi ut cum saepe.</Text> */}
              <Accordion allowToggle width={"100%"}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Review
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    <Popover>
                      <PopoverTrigger>
                        <Button>Trigger</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
  