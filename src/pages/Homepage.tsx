import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

import styles from "./Homepage.module.scss";

function Homepage() {
  const todoState = useAppSelector((state) => state.todoState);

  return (
    <section className={styles["todo-list"]}>
      <h2 className={`heading-2 ${styles["todo-list__title"]}`}>
        <span>Todo List</span>{" "}
        <Link to="/create" className="btn btn--primary">
          Add Todo
        </Link>
      </h2>
      <ul className={styles["todo-list__list"]}>
        {todoState.length > 0 &&
          todoState.map((todoItem, idx) => (
            <li key={idx} className={styles["todo-list__item"]}>
              <Link
                to={`/${todoItem.id}`}
                className={`${styles["todo-list__link"]}`}
              >
                {todoItem.title}
              </Link>
            </li>
          ))}
      </ul>
      {todoState.length === 0 && (
        <p className={styles["todo-list__message"]}>No Todo found!</p>
      )}
    </section>
  );
}

export default Homepage;
