import {
  Box,
  useColorModeValue,
  Stack,
  VStack,
  HStack,
  useDisclosure,
  Textarea,
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
  PopoverArrow,
  PopoverCloseButton,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input
} from '@chakra-ui/react';
import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import FocusLock from 'react-focus-lock';
import { forwardRef } from '@chakra-ui/react';



interface BookTemplate {
  bookTitle: string;
  bookCover?: string;
  bookAuthor: string;
  bookGenre: string;
  bookReview: string;
  readingStatus: number;
}

export default function BookSample(props: BookTemplate) {

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
              backgroundImage: `url(${props.bookCover})`,
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
              src={`${props.bookCover}`}
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
                    {props.bookGenre}
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
                {props.bookTitle}
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
                {props.bookAuthor}
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
                  <CircularProgress value={Math.ceil(props.readingStatus)} size={'20px'} />
                </HStack>
              </HStack>
            </>
            <PopoverForm bookReview={props.bookReview} />
          </VStack>
        </Stack>
      </Box>
    </>
  );
}


type TextInputProps = {
  id: string,
  label: string,
  ref: React.LegacyRef<HTMLInputElement> | undefined,
  children?: React.ReactNode;
}

const TextInput = forwardRef<TextInputProps | any, 'input'>((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Textarea  {...props} ref={ref} id={props.id} />
    </FormControl>
  )
})


const Form = ({ bookReviewRef, bookReview, onCancel }: { bookReviewRef: any; bookReview: string; onCancel: any }) => {
  const [initialReview, setReview] = React.useState(bookReview);

  const updateReview = () => {
    setReview(initialReview);
  }

  const handleReviewChange = (event: { target: any; }) => {
    const target = event.target;
    setReview(target.value);
  }
  return (
    <Stack spacing={4}>
      <TextInput
        label='Book Review'
        id='book-review'
        ref={bookReviewRef}
        // defaultValue={bookReview}
        value={initialReview}
        onChange={handleReviewChange}
      />
      <ButtonGroup d='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
        <Button colorScheme='teal' onClick={updateReview}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}


const PopoverForm = ({ bookReview }: { bookReview: string }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const bookReviewRef = React.useRef(null)

  return (
    <>
      <Box d='inline-block' mr={3}>
        {bookReview}
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={bookReviewRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size='sm' icon={<EditIcon />} aria-label={''} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form bookReviewRef={bookReviewRef} onCancel={onClose} bookReview={bookReview} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

