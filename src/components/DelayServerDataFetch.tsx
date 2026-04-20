import React from "react";
import Box from "./Box";
import DynamicServerDataFetch from "./DynamicServerDataFetch";

type Todo = {
  id: number;
  todo: string;
};

const DelayServerDataFetch = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store",
  });
  const todo: Todo = await res.json();

  return (
    <div>
      <Box>
        <h2>Delay Server Data Fetch</h2>
        <dl>
          <dt>id</dt>
          <dd>{todo.id}</dd>
          <dt>todo</dt>
          <dd>{todo.todo}</dd>
        </dl>
      </Box>
    </div>
  );
};

export default DelayServerDataFetch;
