import { ValidatorFn, AbstractControl } from '@angular/forms';

const MIN_LENGTH_STRING = 3;

export const firstNameValidator: (fieldName: string) => ValidatorFn = (fieldName: string) => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const minLength = MIN_LENGTH_STRING;
    const value = control.value || '';

      if (!value) {
        return { error_msg: "This field is required." };
      }

      if (value.length < minLength) {
        return { error_msg: `Minimum length is ${minLength} characters.` };
      }

      const isValid = /^[A-Za-z\s]*$/.test(value);
      if (!isValid) {
        return { error_msg: `Please enter a valid ${fieldName}.` };
      }

    return null;
  };
};

export const lastNameValidator: (fieldName: string) => ValidatorFn = (fieldName: string) => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const minLength = MIN_LENGTH_STRING;
    const value = control.value || '';

      if (!value) {
        return { error_msg: "This field is required." };
      }

      if (value.length < minLength) {
        return { error_msg: `Minimum length is ${minLength} characters.` };
      }

      const isValid = /^[A-Za-z\s]*$/.test(value);
      if (!isValid) {
        return { error_msg: `Please enter a valid ${fieldName}.` };
      }

    return null;
  };
};


const LENGTH_PHONE = 10;

export const phoneNumberValidator: ValidatorFn = (control) => {
  const value = control.value || '';

  if (!value) {
    return { error_msg: "This field is required." };
  }

  if (value.length !== LENGTH_PHONE) {
    return {
      error_msg: `Phone number must be ${LENGTH_PHONE} digits long (numbers only).`
    };
  }

  const isValid = /^[0-9]+$/.test(value);
  if (!isValid) {
    return {
      error_msg: "Please enter a valid phone number."
    };
  }

  return null;
};

export const addressValidator: ValidatorFn = (control) => {
  const value = control.value || '';

  if (!value) {
    return { error_msg: "This field is required." };
  }

  const isValid = /^[a-zA-Z0-9\s.,-]*$/.test(value);
  if (!isValid) {
    return {
      error_msg: "Please enter a valid address."
    };
  }

  return null;
};


export const emailValidator: ValidatorFn = (control) => {
  const value = control.value || '';
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!value) {
    return { error_msg: "This field is required." };
  }

  const isValid = emailPattern.test(value);
  if (!isValid) {
    return {
      error_msg: "Please enter a valid email address."
    };
  }

  return null;
};

