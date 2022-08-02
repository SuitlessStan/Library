import { Tooltip, Text } from "@chakra-ui/react";

export default function BookTitle({ bookTitle }: { bookTitle: string }) {
    return <>
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
                {bookTitle}
            </Tooltip>
        </Text>
    </>
}