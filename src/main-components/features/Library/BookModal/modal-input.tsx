import { Input, FormHelperText,FormErrorMessage, Box } from "@chakra-ui/react";
import React from "react";
import { FormLabel } from "@chakra-ui/react";
import BookModal from "./interfaces/BookModal";




const BookModalInput: React.FC<BookModal> = ({formLabel,formHelperText,formErrorMessage,inputName,inputValue,inputValueUpdate}: BookModal) => {
    return (
    <Box w={"100%"}>
        <FormLabel>{formLabel}</FormLabel>
        <Input isRequired type="text" name={inputName} value={inputValue} onChange={inputValueUpdate} />
        <FormHelperText>{formHelperText}</FormHelperText>
        <FormErrorMessage>{formErrorMessage}</FormErrorMessage>
    </Box>
    );
}

export default BookModalInput;