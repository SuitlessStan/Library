import { Code, Tooltip, Text } from "@chakra-ui/react"

export default function bookAuthor({ bookAuthor }: { bookAuthor: string }) {
    return (
        <>
            <Code>
                <Text fontSize={'sm'}>
                    <Tooltip
                        label="Book Author"
                        bg="red.500"
                        color="white"
                        aria-label="A tooltip"
                    >
                        {bookAuthor}
                    </Tooltip>
                </Text>
            </Code>
        </>
        )
}