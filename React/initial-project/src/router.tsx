import { createBrowserRouter } from "react-router-dom";
import { Counter } from "./components/Counter";
import { LoginForm } from "./components/LoginForm";
import App from "./App";
import { UserProfile } from "./components/UserProfile";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/login",
    element: (
      <LoginForm email="default-email@gmai.com" password="default-password" />
    ),
  },
  {
    path: "/user-profile",
    element: (
      <UserProfile />
    ),
  },
]);