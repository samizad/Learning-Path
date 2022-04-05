<<<<<<< HEAD
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
=======

import Task from './Task'
  
const Tasks = ({ tasks, onDelete, onToggle}) => {
   
    return (
        <>
            {tasks.map((task) =>  (
                <Task key={task.id} task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks
>>>>>>> 8525d5a47d59e5c6f07d269c8fd325c282bb7ee7
