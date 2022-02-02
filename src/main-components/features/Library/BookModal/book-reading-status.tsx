import { Switch } from "@chakra-ui/react";
import React, { ChangeEventHandler } from "react";



const ReadingStatus = ({ readStatus, onChange, inputName }: { readStatus: number | string | undefined, onChange?: ChangeEventHandler<HTMLInputElement> ,inputName:string}) => {
    return (
        <Switch  name={inputName} value={readStatus} onChange={onChange} />
    );
}

export default ReadingStatus;