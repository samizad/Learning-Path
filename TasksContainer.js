import { useState } from 'react';
import Task from './Task';
import Button from './Button';
import AddTask from './AddTask';
const initialTasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'food shopping',
    day: 'Feb 6th at 5:30pm',
    reminder: false
  }
];

const TasksContainer = (props) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAddTask, setShowAddTask] = useState(false);
  const onShow = () => {
    setShowAddTask(!showAddTask);
  };
  //add tasks
  const addTask = (task) => {
    //you should get it from backend
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  //delete task
  const deleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder  
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      <div>
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add'}
          onClick={onShow}
        />
      </div>
      <div>{showAddTask && <AddTask onAdd={addTask} />}</div>
      {tasks.length > 0
        ? tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteHandler={deleteHandler}
              onToggle={toggleReminder}
            />
          ))
        : 'there is not no task.'}
    </>
  );
};
export default TasksContainer;
