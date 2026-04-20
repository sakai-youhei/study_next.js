import React from "react";
import Box from "./Box";
import DynamicServerDataFetch from "./DynamicServerDataFetch";
import DelayServerDataFetch from "./DelayServerDataFetch";

type Todo = {
  id: number;
  todo: string;
};

const DataCache2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "force-cache",
  });
  const todo: Todo = await res.json();

  return (
    <div>
      <Box>
        <h2>Data Cache 2</h2>
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

export default DataCache2;
