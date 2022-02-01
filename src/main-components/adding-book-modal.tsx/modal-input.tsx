import { Input, FormHelperText,Box } from "@chakra-ui/react";
import React from "react";
import { FormLabel } from "@chakra-ui/react";
import BookModal from "../interfaces/BookModal";




const BookModalInput: React.FC<BookModal> = ({formLabel,formHelperText,inputName,inputValue,inputValueUpdate}: BookModal) => {
    return (
    <Box w={"100%"}>
        <FormLabel>{formLabel}</FormLabel>
        <Input type="text" name={inputName} value={inputValue} onChange={inputValueUpdate} />
        <FormHelperText>{formHelperText}</FormHelperText>
    </Box>
    );
}

export default BookModalInput;