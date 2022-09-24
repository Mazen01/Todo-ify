import { Stack, Typography, Divider } from "@mui/material";
import { useCtx } from "../context/Provider";
import { TodoInfo } from "./TodoOptions";
import { todosObj } from "./types";

export const Completed = () => {
  const { completedTodos } = useCtx();

  return (
    /** Completed Items */
    <Stack spacing={1}>
      <Typography fontWeight={500}>COMPLETED</Typography>
      <Divider
        sx={{
          border: "none",
          height: "2px",
          color: " #333",
          backgroundColor: "#333",
        }}
      />
      {completedTodos.map((todo: todosObj) => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
};