import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Textarea,
  Select,
} from "@chakra-ui/react";
import validator from "../utils/validator";

type ModalInput = {
  formControlID: string;
  Validator: boolean;
  inputID: string;
  formLabel: string;
  formikSubjectValue: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  formHelperText: string;
  formikSubjectError: string | undefined;
  formikSubjectTouched: boolean | undefined;
  inputName?: string;
  inputType?: string;
  placeholder?: string;
};


const ModalInput = (props: ModalInput) => {
  if (props.inputType === "textarea") {
    return (
      <Box width={"100%"}>
        <FormControl
          variant="floating"
          id={props.formControlID}
          isInvalid={props.Validator}
        >
          <FormLabel htmlFor={props.inputID}>{props.formLabel}</FormLabel>
          <Textarea
            name={props.inputName}
            id={props.inputID}
            value={props.formikSubjectValue}
            onChange={props.onChange}
            onBlur={props.onBlur}
            size="md"
            resize={"none"}
            placeholder={props.placeholder}
          />
          <FormHelperText>{props.formHelperText}</FormHelperText>
          {props.formikSubjectError && props.formikSubjectTouched && (
            <FormErrorMessage>{props.formikSubjectError}</FormErrorMessage>
          )}
        </FormControl>
      </Box>
    );
  }
  else if (props.inputType === "select") {
    return (
      <Box w="100%">
        <FormControl
          id={props.formControlID}
          isInvalid={props.Validator}
        >
          <FormLabel htmlFor={props.inputID}>{props.formLabel}</FormLabel>
          <Select
            placeholder="Select book genre"
            name={props.inputName}
            id={props.inputID}
            value={props.formikSubjectValue}
            onChange={props.onChange}
            onBlur={props.onBlur}
            size="md"
          >
            <option value="Action and Adventure">
              Action and Adventure
            </option>
            <option value="Classics">Classics</option>
            <option value="Comic Book or Graphic Novel">
              Comic Book or Graphic Novel
            </option>
            <option value="Detective and Mystery">
              Detective and Mystery
            </option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical Fiction">
              Historical Fiction
            </option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction (Sci-Fi)">
              Science Fiction (Sci-Fi)
            </option>
            <option value="Short Stories">Short Stories</option>
            <option value="Suspense and Thrillers">
              Suspense and Thrillers
            </option>
            <option value="Women's Fiction">Women s Fiction</option>
            <option value="Biographies and Autobiographies">
              Biographies and Autobiographies
            </option>
            <option value="Cookbooks">Cookbooks</option>
            <option value="Essays">Essays</option>
            <option value="History">History</option>
            <option value="Memoir">Memoir</option>
            <option value="Poetry">Poetry</option>
            <option value="Self-Help">Self-Help</option>
            <option value="True Crime">True Crime</option>
          </Select>
          <FormHelperText>Select the book s genre</FormHelperText>
          {props.formikSubjectError && props.formikSubjectTouched && (
            <FormErrorMessage>
              {props.formikSubjectError}
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
    )
  }
  return (
    <Box width={"100%"}>
      <FormControl
        variant="floating"
        id={props.formControlID}
        isInvalid={props.Validator}
      >
        <FormLabel htmlFor={props.inputID}>{props.formLabel}</FormLabel>
        <Input
          id={props.inputID}
          type="text"
          value={props.formikSubjectValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
        />
        <FormHelperText>{props.formHelperText}</FormHelperText>
        {props.formikSubjectError && props.formikSubjectTouched && (
          <FormErrorMessage>{props.formikSubjectError}</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );

};

export default ModalInput;
