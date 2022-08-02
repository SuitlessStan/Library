import { Box, Image } from "@chakra-ui/react"
export default function BookCover({ bookCover, bookTitle }: { bookCover: string | undefined, bookTitle: string }) {
    return (
        <Box
            rounded={'lg'}
            mt={0}
            pos={'relative'}
            height={['50vh', '50vh', '50vh']}
            _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${bookCover})`,
                filter: 'blur(15px)',
                zIndex: -1,
            }}
            _groupHover={{
                _after: {
                    filter: 'blur(30px)',
                },
            }}
        >
            <Image
                alt={bookTitle}
                rounded={'md'}
                height="full"
                width="full"
                src={`${bookCover}`}
                justifyContent="center"
            />
        </Box>
    )
}