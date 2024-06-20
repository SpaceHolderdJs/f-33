import React, { FC } from "react";

type Props = {
  user?: {
    email: string;
    password: string;
    name: string;
    age: number;
  };
};

export const UserProfile: FC<Props> = ({ user }) => {
  if (!user) return <h1>There is no user passed</h1>;

  const { age, email, name } = user;
  return (
    <div>
      <h2>Email: {email}</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
