import React, { useReducer, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { todoAction } from "../store/todoSlice";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

type formStateType = {
  titleInput: string;
  detailsInput: string;
};
type changeInputActionType = {
  type: "CHANGE";
  payload: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
};
type resetFormActionType = {
  type: "RESET";
};
type actionType = changeInputActionType | resetFormActionType;

const formInitialState: formStateType = {
  titleInput: "",
  detailsInput: "",
};
function formReducer(
  prevState: formStateType,
  action: actionType
): formStateType {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...prevState,
        [action.payload.target.name]: action.payload.target.value,
      };
    }
    case "RESET": {
      return formInitialState;
    }
    default: {
      return prevState;
    }
  }
}

function TodoCreate() {
  const [formState, formDispatchFn] = useReducer(formReducer, formInitialState);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function formSubmitHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!formState.titleInput || !formState.detailsInput) {
      setShowModal(true);
      return;
    }

    dispatch(
      todoAction.create({
        title: formState.titleInput,
        details: formState.detailsInput,
      })
    );
    formDispatchFn({ type: "RESET" });
    navigate("/");
  }

  function modalToggleHandler() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <section className="todo-create">
      {showModal && (
        <Modal onConfirm={modalToggleHandler}>
          <h3 className="heading-3 mb-24" style={{ color: "crimson" }}>
            Error
          </h3>
          <p className="mb-12">Todo Title and Details can not be empty!</p>
          <Button variant="button">Go Back</Button>
        </Modal>
      )}
      <h2 className="heading-2">Create Todo</h2>
      <form className="form mb-24" onSubmit={formSubmitHandler}>
        <div className="form__group">
          <input
            type="text"
            name="titleInput"
            id="title"
            className="form__input"
            placeholder="Todo Title"
            value={formState.titleInput}
            onChange={(e) => formDispatchFn({ type: "CHANGE", payload: e })}
          />
        </div>
        <div className="form__group">
          <textarea
            name="detailsInput"
            id="details"
            className="form__input"
            placeholder="Todo Details"
            value={formState.detailsInput}
            onChange={(e) => formDispatchFn({ type: "CHANGE", payload: e })}
          ></textarea>
        </div>
        <button className="btn btn--primary">Add Todo</button>
      </form>
      <Button variant="link" to="/">
        &larr; Go Back
      </Button>
    </section>
  );
}

export default TodoCreate;
