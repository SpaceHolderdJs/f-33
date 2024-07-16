import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { faker } from "@faker-js/faker";
import { UserType, create } from "../redux/slices/users";

export const Users = () => {
  const users = useAppSelector((store) => store.users);
  const dispatch = useDispatch();

  const onCreateUserClick = () => {
    const userData = {
      name: faker.person.fullName(),
      age: faker.number.int({ max: 50, min: 10 }),
    };

    dispatch(create(userData));
  };

  return (
    <div>
      <button onClick={onCreateUserClick}>Create User</button>

      {users.map((user: UserType) => (
        <div key={user.name}>
          <h5>{user.name}</h5>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
};
