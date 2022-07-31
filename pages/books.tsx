import {
  useDisclosure,
} from "@chakra-ui/react";

import Nav from "../components/books-nav";
import BookModal from "../components/modal";



export default function BookLibrary() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Nav onOpen={onOpen} />
      <BookModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

