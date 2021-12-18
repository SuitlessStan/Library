import * as React from "react";
import {
  VStack,
  Text,
  IconButton,
  Center,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Badge,
  HStack,
  Select
} from "@chakra-ui/react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export default function AddNewBook() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center>
        <VStack spacing="20px">
          <Text fontSize="3xl">Add a new book</Text>
          <IconButton
            size="3xl"
            aria-label="add a new book"
            icon={<AddIcon />}
            variant="ghost"
            onClick={onOpen}
          >
            Add
          </IconButton>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><Badge>Add a book</Badge></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack spacing={5}>
                    <FormControl id="book-title">
                        <FormLabel>Book Title</FormLabel>
                        <Input type="text" name="title"/>
                        <FormHelperText>The name of the book you are reading</FormHelperText>
                    </FormControl>
                    <FormControl id="book-author">
                        <FormLabel>Book Author</FormLabel>
                        <Input type="text" name="author"/>
                        <FormHelperText>
                            The author of the book
                        </FormHelperText>
                    </FormControl>
                    <FormControl id="pages_count">
                        <FormLabel>Number of Pages</FormLabel>
                        <NumberInput defaultValue={40} min={40} max={1200}>
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <FormHelperText>
                          The number of pages in the book
                        </FormHelperText>
                    </FormControl>
                    <RadioExample/>
                    <FormControl id="book-genre">
                        <FormLabel>Book Genre</FormLabel>
                        <Select>
                        <option value='Action and Adventure'>Action and Adventure</option>
                        <option value='Classics'>Classics</option>
                        <option value='Comic Book or Graphic Novel'>Comic Book or Graphic Novel</option>
                        <option value='Detective and Mystery'>Detective and Mystery</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Historical Fiction'>Historical Fiction</option>
                        <option value='Literary Fiction'>Literary Fiction</option>
                        <option value='Romance'>Romance</option>
                        <option value='Sci-Fi'>Sci-Fi</option>
                        <option value='Short Stories'>Short Stories</option>
                        <option value='Suspense and Thrillers'>Suspense and Thrillers</option>
                        </Select>
                        <FormHelperText>
                            Select book genre
                        </FormHelperText>
                    </FormControl>
                    
                    <FormControl id="book-review">
                        <FormLabel>Your review</FormLabel>
                        <Input type="text" name="review" variant="filled" size="lg"/>
                        <FormHelperText>
                            Write down your review
                        </FormHelperText>
                    </FormControl>
                    

                </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                    Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
}


function RadioExample(){
  const [value,setValue] : [string,(value:string) => void]  = React.useState('read');
  return (
    <RadioGroup onChange={setValue} value={value} float={"left"}>
      <HStack>
        <Radio value="read">Read</Radio>
        <Radio value="not read">Not read</Radio>
      </HStack>
    </RadioGroup>
  )
}

