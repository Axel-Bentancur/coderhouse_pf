import { ValidatorFn, AbstractControl } from '@angular/forms';

// VARIABLES
const MIN_LENGTH_STRING = 3;
const LENGTH_PHONE = 10;

// STUDENTS VALIDATORS
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

      const isValid = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(value);
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

      const isValid = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(value);
      if (!isValid) {
        return { error_msg: `Please enter a valid ${fieldName}.` };
      }

    return null;
  };
};

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

  const isValid = /^[a-zA-Z0-9\s.,-ÁÉÍÓÚáéíóúÑñ]*$/.test(value);
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


export const passwordValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value || '';

  if (!value) {
    return { error_msg: "This field is required." };
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValid = passwordPattern.test(value);

  if (!isValid) {
    return {
      error_msg: "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
    };
  }

  return null;
};

export const sexValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value;

  if (!value) {
    return { error_msg: "Please select a gender." };
  }

  return null;
};

export const roleValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value;

  if (!value) {
    return { error_msg: "Please select a role." };
  }

  return null;
};

// COURSES VALIDATORS

export const courseNameValidator: (fieldName: string) => ValidatorFn = (fieldName: string) => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const minLength = MIN_LENGTH_STRING;
    const value = control.value || '';

    if (!value) {
      return { error_msg: "This field is required." };
    }

    if (value.length < minLength) {
      return { error_msg: `Minimum length is ${minLength} characters.` };
    }

    const isValid = /^[a-zA-Z0-9\s.,-ÁÉÍÓÚáéíóúÑñ]*$/.test(value);

    if (!isValid) {
      return { error_msg: `Please enter a valid ${fieldName}.` };
    }

    return null;
  };
};

export const numberValidator: (fieldName: string) => ValidatorFn = (fieldName: string) => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (value === null || value === '') {
      return { error_msg: "This field is required." };
    }

    const isValid = /^[0-9]+$/.test(value.toString());
    if (!isValid) {
      return { error_msg: `Please enter a valid ${fieldName} (only numbers are allowed).` };
    }

    return null;
  };
};

export const teacherNameValidator: (fieldName: string) => ValidatorFn = (fieldName: string) => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value || '';

    if (!value) {
      return { error_msg: "This field is required." };
    }

    const nameParts = value.trim().split(' ');
    if (nameParts.length < 2) {
      return { error_msg: `Please enter both first and last name for the ${fieldName}.` };
    }

    const isValid = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(value);

    if (!isValid) {
      return { error_msg: `Please enter a valid ${fieldName} (only letters and spaces are allowed).` };
    }

    return null;
  };
};
