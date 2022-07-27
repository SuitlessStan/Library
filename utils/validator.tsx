const validator = (
  first: boolean | undefined,
  second: string | undefined | number
) => {
  if (first && second) {
    return true;
  } else {
    return false;
  }
};
export default validator;
