import { AccordionItem, Box, AccordionIcon, AccordionPanel, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton } from "@chakra-ui/react";
import * as React from "react";
import { Accordion, AccordionButton, Popover, Button, PopoverHeader, PopoverBody,Textarea } from "@chakra-ui/react";

const moment = require('moment');
let now = moment().format("LLLL");

const BookReview = ({ bookReview }: { bookReview: string }) => {
  
  const [isClicked,SetIsClicked] = React.useState(false);
  let [areaReview,setAreaReview] = React.useState(bookReview);
  let [review,setReview] = React.useState(bookReview);
  
  const editClickHandler = () => {
    SetIsClicked(current => !current);
  }
  
  const saveClickHandler = () => {
    setReview(areaReview);
  }

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
     {review}
     {/* <span>{now}</span> */}
       <Popover>
         <PopoverTrigger>
           <Button float={"right"} size="sm" onClick={editClickHandler} p={3}>
             Edit
           </Button>
         </PopoverTrigger>
         <PopoverContent>
           <PopoverArrow />
           <PopoverCloseButton />
           <PopoverHeader>Edit review</PopoverHeader>
           <PopoverBody zIndex={"base"}>
           <Textarea placeholder='your review' resize="vertical" value={areaReview} onChange={(e) => setAreaReview(e.target.value) } variant={"md"} />
           <Button variant={"ghost"} bg="red.500" float={"right"} marginTop={3} onClick={saveClickHandler}>
             Save
           </Button>
           </PopoverBody>
         </PopoverContent>
       </Popover>
    </AccordionPanel>
     </AccordionItem>
     </Accordion>
    </>
  );

}
  
export default BookReview;
