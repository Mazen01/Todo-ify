import { Stack, Typography, Divider } from "@mui/material";
import { useCtx } from "../context/Provider";
import { todosObj } from "./types";
import { TodoInfo } from "./TodoOptions";

export const Todo = () => {
  const { todos } = useCtx();

  return (
    <Stack spacing={3} mt={3} mb={2}>
      <Typography fontWeight={500}>TODO</Typography>
      <Divider
        sx={{
          border: "none",
          height: "2px",
          color: " #333",
          backgroundColor: "#333",
        }}
      />
      {todos
        .filter((item: todosObj) => item.completed === false)
        .map((todo: todosObj) => (
          <TodoInfo key={todo.id} todo={todo} />
        ))}
    </Stack>
  );
};