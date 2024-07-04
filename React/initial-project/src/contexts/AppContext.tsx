import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { APIUserType, UserType } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

type AppContextType = {
  users: UserType[] | APIUserType[];
  setUsers?: Dispatch<UserType[] | APIUserType[]>;

  createUser?: (user: APIUserType | UserType) => APIUserType | UserType;
  deleteUser?: (user: APIUserType | UserType) => void;

  // HW: Add editUser function   
};

export const AppContext = createContext<AppContextType>({
  users: [],
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { get, set } = useLocalStorage();

  const [users, setUsers] = useState<UserType[] | APIUserType[]>(
    get("users") || []
  );

  const createUser = (user: APIUserType | UserType) => {
    const updatedUsers = [...users, user];

    setUsers(updatedUsers as Array<APIUserType>);
    set("users", updatedUsers);

    return user;
  };

  const deleteUser = (user: APIUserType | UserType) => {
    // TODO: Add types aligment
    const updatedUsers = (users as Array<APIUserType>).filter(
      ({ email }) => email !== user.email
    );

    setUsers(updatedUsers as Array<APIUserType>);
    set("users", updatedUsers);
  };

  return (
    <AppContext.Provider value={{ users, setUsers, createUser, deleteUser }}>
      {children}
    </AppContext.Provider>
  );
};
