<<<<<<< HEAD
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task  ${
        task.reminder ? 'reminder' : ''
      } `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
=======
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task  ${task.reminder ? 'reminder' :''} `} onDoubleClick={() =>onToggle(task.id)}>
            <h3>{task.text}
            <FaTimes
             style={{color:'red', cursor:'pointer'}}
             onClick={() => onDelete(task.id)}
             />
                </h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task
>>>>>>> 8525d5a47d59e5c6f07d269c8fd325c282bb7ee7
