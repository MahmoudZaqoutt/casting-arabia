import * as yup from "yup";

export const schema = yup.object().shape({
  Talent: yup.string().required("required"),
  TalentSeeker: yup.string().required("required"),
  FirstName: yup.string().required("required"),
  LastName: yup.string().required("required"),
  TalentType: yup.string().required("required"),
  talent: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  Gender: yup.string().required("required"),
  Country: yup.string().required("required"),
  PhoneNumber: yup.number().required("required"),
  Password: yup.string().required("required"),
  CompanyName: yup.string().required("required"),
  City: yup.string().required("required"),
});
