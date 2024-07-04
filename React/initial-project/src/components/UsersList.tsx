import { FC, useContext } from "react";
import { APIUserType, UserType } from "../types";
import { Button, Card } from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";

type Props = {
  users: UserType[] | APIUserType[];
};

export const UsersList: FC<Props> = ({ users }) => {
  const { deleteUser } = useContext(AppContext);

  return (
    <div>
      {users.map((user) => (
        <Card key={user.email} className="mt-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.email}
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
           { !("age" in user) && <Button
              onClick={() => deleteUser && deleteUser(user)}
              variant="danger"
            >
              Delete
            </Button>}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};
