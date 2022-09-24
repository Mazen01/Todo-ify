import { Stack, Typography, Button } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useCtx } from "../context/Provider";
import { todosObj } from "./types";
import { useState } from "react";
import { EditItem } from "./EditItem";

export const TodoInfo = ({ todo }: any) => {
  const [showEditItem, setShowEditItem] = useState<boolean>(false);
  const { todos, setTodos } = useCtx();

  const completedHandler = () => {
    setTodos(
      todos.map((item: todosObj) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (

    /** Checked Items */
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center">
        <Button onClick={completedHandler}>
          {todo.completed ? (
            <CheckBoxIcon sx={{ color: 'black' }}/>
          ) : (
            <CheckBoxOutlineBlankIcon sx={{ color: 'black' }}/>
          )}
        </Button>
        {!todo.completed && <Typography>{todo.text}</Typography>}
        {!!todo.completed && (
          <Typography sx={{ textDecoration: "line-through" }}>
            {todo.text}
          </Typography>
        )}
      </Stack>

        {/* Edit and Delete Buttons */}
      <Stack direction="column">

       
        <Button 
        sx={{color: 'black',':hover': {bgcolor: 'white',  color: 'black'},}} 
        style={{textTransform: 'none'}} 
        onClick={() => setShowEditItem(true)}>
          Edit 
          </Button>
        <Button 
        style={{textTransform: 'none', }}
        sx={{color: 'black',':hover': {bgcolor: 'white',  color: 'red'},}}  
        onClick={() => { setTodos(todos.filter((item: todosObj) => item.id !== todo.id)); }}>
          Delete
        </Button>
      </Stack>

      <EditItem
        showEditItem={showEditItem}
        setShowEditItem={setShowEditItem}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
      />
    
    </Stack>
  );
};