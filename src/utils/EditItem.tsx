import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Slide,
  } from "@mui/material";
  import { Dispatch, forwardRef, SetStateAction, useState } from "react";
  import { useCtx } from "../context/Provider";
  import { todosObj } from "./types";
  
  type propsType = {
    showEditItem: boolean;
    setShowEditItem: Dispatch<SetStateAction<boolean>>;
    todo: todosObj;
    todos: todosObj[];
    setTodos: Dispatch<SetStateAction<todosObj[]>>;
  };
  
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...(props as any)} />;
  });
  
  export const EditItem = ({
    showEditItem,
    setShowEditItem,
    todo,
    todos,
    setTodos,
  }: propsType) => {
    const [updateText, setUpdateText] = useState("");
    const [error, setError] = useState("");
    const { setSnackBarOpen } = useCtx();
  
    const editHandler = () => {
      if (updateText) {
        if (todos.find((item: todosObj) => item.text === updateText)) {
          setError("Todo already exists!");
          setSnackBarOpen(true);
          return;
        }
  
        setTodos(
          todos.map((item: todosObj) => {
            if (item.id === todo.id) {
              return {
                ...item,
                text: updateText,
              };
            }
            return item;
          })
        );
      }
      setUpdateText("");
      setShowEditItem(false);
    };
  
    return (

      /** Dialog that opens to edit an Item */
      <Dialog
        open={showEditItem}
        onClose={() => setShowEditItem(false)}
        TransitionComponent={Transition as any}
      >
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent>
          <TextField
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            label="New Value"
            type="text"
            margin="dense"
            fullWidth
            error={!!error}
            helperText={!!error && error}
          />
        </DialogContent>
        <DialogActions>
          {/* Cancel editing button */}
          <Button onClick={() => setShowEditItem(false)}>Cancel</Button>

          {/* Confirm Edit button */}
          <Button type="submit" onClick={editHandler}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };