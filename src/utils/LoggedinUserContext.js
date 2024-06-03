import { createContext } from "react";

let username = "";
const LoggedInUser = createContext(username);
//createContext({username:"abz",age:23})

export default LoggedInUser;
