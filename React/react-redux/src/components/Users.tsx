import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { UserType, create, deleteUser, setUserAdmin } from "../redux/slices/users";
import { createUser } from "../utils/createFakerUser";
import { useInitialUsers } from "../hooks/useInitialUsers";

export const Users = () => {
  const users = useAppSelector((store) => store.users);
  const dispatch = useDispatch();
  useInitialUsers();

  const onCreateUserClick = () => {
    const userData = createUser();

    dispatch(create(userData));
  };

  const onDeleteUser = (userName: string) => {
    dispatch(deleteUser(userName));
  };

  const onSetUserAdmin = (name: string) => {
    dispatch(setUserAdmin(name));
  }

  return (
    <div>
      <button onClick={onCreateUserClick}>Create User</button>

      {users.map((user: UserType) => (
        <div key={user.name}>
          <h5>{user.name}</h5>
          <p>{user.age}</p>
          <button onClick={() => onDeleteUser(user.name)}>Delete User</button>
          <button
            onClick={() => onSetUserAdmin(user.name)}
            style={{ background: user.isAdmin ? "blue" : "lightgray" }}
          >Set Admin</button>
        </div>
      ))}
    </div>
  );
};
