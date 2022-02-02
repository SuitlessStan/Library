import { Switch, FormLabel, FormHelperText, FormErrorMessage, Box, HStack, Input } from "@chakra-ui/react";
import React, { ChangeEventHandler } from "react";



const ReadingStatus = (
    { readStatus, currentPageInputName, bookPagesInputName, current_page, pages_count, onChange, readingStatusInputName }:
        { readStatus?: number | string | boolean, current_page?: number, pages_count?: number, onChange?: ChangeEventHandler<HTMLInputElement>, readingStatusInputName: string, currentPageInputName: string, bookPagesInputName: string }) => {
    if (readStatus == false) {
        return (
            <>
                <Switch name={readingStatusInputName} onChange={onChange} />
                <HStack>
                    <FormLabel>
                        Current Page
                    </FormLabel>
                    <Input name={currentPageInputName} value={current_page} type="number" onChange={onChange} />
                </HStack>
                <HStack>
                    <FormLabel>
                        Book Pages
                    </FormLabel>
                    <Input name={bookPagesInputName} value={pages_count} type="number" onChange={onChange} />
                </HStack>
            </>

        )
    }
    else {
        return (
            <>
                <Switch name={readingStatusInputName} onChange={onChange} />
                <HStack>
                    <FormLabel>
                        Book Pages
                    </FormLabel>
                    <Input name={bookPagesInputName} value={pages_count} type="number" onChange={onChange} />
                </HStack>
            </>
        );
    }
}


export default ReadingStatus;