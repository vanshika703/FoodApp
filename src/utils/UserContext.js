import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy",
    email: "dummy@gmail.com",
  },
});

export default UserContext;
