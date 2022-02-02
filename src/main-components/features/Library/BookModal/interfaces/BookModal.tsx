import { ReactElement } from "react";

export default interface BookModal {
    inputName:string,
    formHelperText:string,
    formErrorMessage:string,
    formLabel:string,
    inputValue:string | number,
    inputValueUpdate:(e: React.ChangeEvent<HTMLInputElement>) => void,
    children?:ReactElement,
}