import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { HStack, CircularProgress, Text, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, Textarea, useEditableControls, Input, EditableTextarea } from "@chakra-ui/react";
import { useState } from "react";
import bookReview from "./book-review";

export default function ReadingStatus({ readingStatus }: { readingStatus: number }) {
    const [editClick, isEditClicked] = useState(false);
    return (
        <>

            {
                !editClick ? <HStack>
                    <CircularProgress value={Math.ceil(readingStatus)} size={'20px'} />
                    <Text>
                        {Math.ceil(readingStatus)} %
                    </Text>
                </HStack> : <Editable defaultValue={readingStatus.toString()}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            }
        </>
    )
}