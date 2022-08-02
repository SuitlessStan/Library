import { HStack, Badge, Tooltip, Text } from "@chakra-ui/react";

export default function BookGenre({ bookGenre }: { bookGenre: string }) {
    return <>
        <HStack spacing={'20'}>
            <Text color={'gray.500'} fontSize={[12, 13, 14]} fontWeight={'bold'}>
                Genre
            </Text>
            <Badge bg="orange.400">
                <Text textTransform={'uppercase'}>
                    <Tooltip
                        hasArrow
                        label="Book Genre"
                        bg="red.500"
                        color="white"
                        aria-label="A tooltip"
                    >
                        {bookGenre}
                    </Tooltip>
                </Text>
            </Badge>
        </HStack>
    </>
}