
export default interface BookModal {
    inputName:string,
    formHelperText:string,
    formLabel:string,
    inputValue:string,
    inputValueUpdate:(e: React.ChangeEvent<HTMLInputElement>) => void,
}