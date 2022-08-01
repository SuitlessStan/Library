import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { useEditableControls, ButtonGroup, IconButton, Flex, Editable, EditablePreview, Textarea, EditableInput, Tooltip, useColorModeValue } from "@chakra-ui/react"




export default function BookReview({ bookReview }: { bookReview: string }) {
    /* Here's a custom control */
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm" w="full" spacing={2} mt={2}>
                <IconButton icon={<CheckIcon />} aria-label="check-icon" {...getSubmitButtonProps()} />
                <IconButton
                    aria-label="close-icon"
                    icon={<CloseIcon boxSize={3} />}
                    {...getCancelButtonProps()}
                />
            </ButtonGroup>
        ) : null;
    }

    return (
        <Editable
            textAlign='center'
            defaultValue={bookReview}
            fontSize='md'
            isPreviewFocusable={true}
            selectAllOnFocus={false}
        >
            <Tooltip label="Click to edit">
                <EditablePreview
                    py={2}
                    px={4}
                    _hover={{
                        background: useColorModeValue("gray.100", "gray.700")
                    }}
                />
            </Tooltip>
            <Textarea py={2} px={4} as={EditableInput} />
            <EditableControls />
        </Editable>
    )
}