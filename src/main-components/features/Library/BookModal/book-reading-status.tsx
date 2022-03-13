import { FormLabel, HStack, Container, Switch } from "@chakra-ui/react"
import {
    NumberInput,
    NumberInputField,
} from '@chakra-ui/react'
import React from "react"



type ReadingStatusProps = {
    readStatus?: string,
    current_page?: number,
    pages_count?: number,
    onChange?: any,
}


const ReadingStatus = ({ current_page, pages_count, onChange, readStatus }: ReadingStatusProps) => {
    const [hasReadBook, setHasReadBook] = React.useState<boolean>(false);

    return (
        <>
            <FormLabel>Have you read this book ?</FormLabel>
            {/*you might have to tweak the onChange a little bit because it might be apssing in the whole event object or some shit like that */}
            <Switch isChecked={hasReadBook} value={readStatus} onChange={() => setHasReadBook(hasReadBook => !hasReadBook)} />
            {hasReadBook && (
                <Container>
                    <HStack>
                        <FormLabel fontSize={"xs"}>Current page</FormLabel>
                        <NumberInput defaultValue={15} min={10}>
                            <NumberInputField
                                name="current-page"
                                value={current_page}
                                onChange={onChange}
                            />
                        </NumberInput>
                        <FormLabel fontSize={"xs"}>Book pages</FormLabel>
                        <NumberInput>
                            <NumberInputField
                                name="pages-count"
                                value={pages_count}
                                onChange={onChange}
                            />
                        </NumberInput>
                    </HStack>
                </Container>
            )}
        </>
    );
}



export default ReadingStatus;