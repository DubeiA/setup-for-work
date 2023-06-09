import { useDispatch } from 'react-redux';

import { deleteTask } from '../../../../redux/tasks/operationTasks';
import css from './TaskCard.module.css';

export const TaskCard = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
