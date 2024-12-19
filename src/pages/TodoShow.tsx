import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import TodoDelete from "../components/Todo/TodoDelete";

function TodoShow() {
  const todoState = useAppSelector((state) => state.todoState);
  const { tId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const todoData = todoState.filter((todoItem) => todoItem.id === tId);

  function modalToggleHandler() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <div className="p-24">
      {showModal && (
        <Modal onConfirm={modalToggleHandler}>
          <TodoDelete {...todoData[0]} />
        </Modal>
      )}
      <h2 className="heading-2">{todoData[0]?.title}</h2>
      <p className="mb-24">{todoData[0]?.details}</p>
      <Button
        variant="button"
        variant-type="danger"
        onClick={modalToggleHandler}
        className="mb-24"
      >
        Delete
      </Button>{" "}
      <br />
      <Button variant="link" to="/">
        &larr; Go Back
      </Button>
    </div>
  );
}

export default TodoShow;
