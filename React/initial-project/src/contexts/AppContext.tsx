import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { APIUserType, UserType } from "../types";

type AppContextType = {
  users: UserType[] | APIUserType[];
  setUsers?: Dispatch<UserType[] | APIUserType[]>;

  createUser?: (user: APIUserType | UserType) => APIUserType | UserType;
};

export const AppContext = createContext<AppContextType>({
  users: [],
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<UserType[] | APIUserType[]>([]);

  const createUser = (user: APIUserType | UserType) => {
    console.log(user, 'user');
    setUsers([...users, user] as APIUserType[]);

    return user;
  };

  console.log(users, 'users');

  return (
    <AppContext.Provider value={{ users, setUsers, createUser }}>
      {children}
    </AppContext.Provider>
  );
};
