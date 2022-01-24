import { AccordionItem, Box, AccordionIcon, AccordionPanel, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton } from "@chakra-ui/react";
import * as React from "react";
import { Accordion, AccordionButton, Popover, Button, PopoverHeader, PopoverBody } from "@chakra-ui/react";




const BookReview = ({ bookReview }: { bookReview: string }) => {
    return (
      <>
        <Accordion allowToggle w={"100%"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Review
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {bookReview}
              <Popover>
                <PopoverTrigger>
                  <Button float={"right"} size="sm">
                    Edit
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Edit review</PopoverHeader>
                  <PopoverBody>{bookReview}</PopoverBody>
                </PopoverContent>
              </Popover>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    );
  }
  
export default BookReview;