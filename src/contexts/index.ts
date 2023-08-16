import { createContext } from "react";

export let basicInfoContext = createContext(null);
export let UserInfoContext = createContext({
  FirstName: "Mahmoud",
  LastName: "Casting",
  CompanyName: "dash",
  email: "+970592807566",
  PhoneNumber: "dash.casting.2023+1@gmail.com  ",
});
