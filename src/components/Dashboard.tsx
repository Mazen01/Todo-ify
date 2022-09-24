import { Paper, Box } from "@mui/material";
import { AddItem } from "../utils/AddItem";
import { Completed } from "../utils/Completed";
import { Header } from "../utils/Header";
import { Todo } from "../utils/Todo";

export const Dashboard = () => {
  return (
    /** Main Dashboard */
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#e4e4e4" }}
    >
      <Paper
        elevation={5}
        sx={{
          width: { xs: "100%", sm: "500px" },
          height: "100%",
          margin: "1.5rem 0.5rem",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <Header />
        <AddItem />
        <Todo />
        <Completed />
      </Paper>
    </Box>
  );
};