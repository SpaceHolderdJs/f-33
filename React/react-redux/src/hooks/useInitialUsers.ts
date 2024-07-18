import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../utils/createFakerUser";
import { setInitialUsers } from "../redux/slices/users";
import { useAppSelector } from "../redux/hooks";

export const useInitialUsers = () => {
    const users = useAppSelector((store) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!users.length) {
            const users = new Array(5).fill({}).map(() => createUser());
            dispatch(setInitialUsers(users));
        }
    }, [dispatch, users.length]);
};
