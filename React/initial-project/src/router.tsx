import { createBrowserRouter } from "react-router-dom";
import { Counter } from "./components/Counter";
import { LoginForm } from "./components/LoginForm";
import { UserProfile } from "./components/UserProfile";
import { UsersList } from "./components/UsersList";
import { users } from "./constants";
import { Users } from "./components/Users";
import { UserForm } from "./components/UserForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoginForm email="default-email@gmai.com" password="default-password" />
    ),
  },
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "login",
    element: (
      <LoginForm email="default-email@gmai.com" password="default-password" />
    ),
  },
  {
    path: "user-profile",
    element: <UserProfile />,
  },
  {
    path: "users-list",
    element: <UsersList users={users} />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "user-create",
    element: <UserForm />,
  },
  { path: "user-edit/:email", element: <UserForm /> },
]);
