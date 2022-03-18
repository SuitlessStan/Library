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
  Badge,
  Box,
  FormControl,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddBookGenre from "./book-genre";
import AddBookReview from "./book-review";
import Book from "./interfaces/book";
import BookModalInput from "./modal-input";
import ReadingStatus from "./book-reading-status";


