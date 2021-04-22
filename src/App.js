import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/actions";
// import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const users = useSelector((state) => state.user.user);

  return (
    <div className="App">
      { users &&
        users.map((user) => (
          <h1 key={user.id}> {user.id}. {user.name} </h1>
        ) ) 
      }
    </div>
  );
}