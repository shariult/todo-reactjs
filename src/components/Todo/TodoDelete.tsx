import { type ReactNode } from "react";
import { type todoType } from "../../types";
import Button from "../ui/Button";
import { todoAction } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

type todoDeletePropsType = {
  children?: ReactNode;
} & todoType;

function TodoDelete(props: todoDeletePropsType) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function todoDeleteHandler() {
    dispatch(todoAction.delete({ id: props.id }));
    navigate("/");
  }
  return (
    <>
      <h3 className="heading-3 mb-24">Delete Todo "{props.title}"?</h3>
      <Button
        variant="button"
        variant-type="danger"
        onClick={todoDeleteHandler}
      >
        Confirm
      </Button>
    </>
  );
}

export default TodoDelete;
