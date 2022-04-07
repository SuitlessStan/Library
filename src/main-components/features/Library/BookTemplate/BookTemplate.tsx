import {
  Box,
  useColorModeValue,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import {
  Image,
  Text,
  Badge,
  Code,
  CircularProgress,
  Tooltip,
} from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Textarea,
  Input
} from '@chakra-ui/react';
import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import FocusLock from 'react-focus-lock';

const IMAGE =
  'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg';



export default function BookSample() {
  return (
    <>
      <Box
        role={'group'}
        p={6}
        w={[250, 250, 250]}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={['md', 'lg', '2xl']}
        rounded={['sm', 'md', 'lg']}
        pos={'relative'}
        zIndex={0}
      >
        {/* Book Cover */}
        <>
          <Box
            rounded={'lg'}
            mt={0}
            pos={'relative'}
            height={[240, 240, 240]}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${bookCoverURL})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(30px)',
              },
            }}
          >
            <Image
              rounded={'md'}
              height="full"
              width="full"
              src={`${bookCoverURL}`}
              justifyContent="center"
            />
          </Box>
        </>
        <Stack pt={10} spacing={[5, 13, 15]} align={'center'}>
          {/* Book Genre */}
          <>
            <HStack spacing={'20'}>
              <Text color={'gray.500'} fontSize={[12, 13, 14]} fontWeight={'bold'}>
                Genre
              </Text>
              <Badge bg="orange.400">
                <Text textTransform={'uppercase'}>
                  <Tooltip
                    hasArrow
                    label="Book Genre"
                    bg="red.500"
                    color="white"
                    aria-label="A tooltip"
                  >
                    {/* {bookGenre} */}
                  </Tooltip>
                </Text>
              </Badge>
            </HStack>
          </>
          {/* Book Title */}
          <>
            <Text
              fontSize={['sm', 'md', 'lg']}
              fontFamily={'roboto'}
              fontWeight={550}
              fontStyle="italic"
              textAlign={'center'}
            >
              <Tooltip
                hasArrow
                label="Book Title"
                bg="red.500"
                color="white"
                aria-label="A tooltip"
              >
                {bookTitle}
              </Tooltip>
            </Text>
          </>
          <Code>
            <Text fontSize={'sm'}>
              <Tooltip
                label="Book Author"
                bg="red.500"
                color="white"
                aria-label="A tooltip"
              >
                {bookAuthor}
              </Tooltip>
            </Text>
          </Code>
          <VStack align="center">
            <>
              <HStack spacing={5}>
                <Text fontSize={[12, 13, 14]}>
                  <Tooltip
                    hasArrow
                    label="Reading progress"
                    aria-label="a tooltip"
                    bg="red.500"
                    color="white"
                  >
                    <Badge colorScheme={'purple'}>Reading Progress</Badge>
                  </Tooltip>
                </Text>
                <HStack>
                  <CircularProgress value={Math.ceil(readingStatus)} size={'20px'} />
                </HStack>
              </HStack>
            </>
            <BookReview bookReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ex!"} />
          </VStack>
        </Stack>
      </Box>
    </>
  );
}


const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})


const Form = ({ bookReviewRef, onCancel }) => {
  return (
    <Stack spacing={4}>
      <TextInput
        label='First name'
        id='first-name'
        ref={firstFieldRef}
        defaultValue='John'
      />
      <TextInput label='Last name' id='last-name' defaultValue='Smith' />
      <ButtonGroup d='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled colorScheme='teal'>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}