import { ILoginErrors, ILoginProps, IRegisterProps, TRegisterErrors } from "@/interfaces";

export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginErrors = {}

    if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid";
      }
    
      if (!values.password) {
        errors.password = "Password is required";
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)
      ) {
        errors.password =
          "Password must have at least 8 characters, one letter, one number, and one special character";
      }
      
    return errors;
}

export function validateRegisterForm(values: IRegisterProps):TRegisterErrors {
    const errors: TRegisterErrors = {}

if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is not valid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)
  ) {
    errors.password =
      "Password must have at least 8 characters, one letter, one number, and one special character";
  }

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!values.address) {
    errors.address = "Address is required";
  } else if (values.address.length < 5) {
    errors.address = "Address must be at least 5 characters";
  }

  const phoneRegexColombia = /^(?:\+57|0)?(3\d{9})$/;
  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!phoneRegexColombia.test(values.phone)) {
    errors.phone = "Phone must be a valid Colombian number";
  }

  return errors;
}