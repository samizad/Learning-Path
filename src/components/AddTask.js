<<<<<<< HEAD
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please enter Task');
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input
          type="text"
          placeholder="Add taskDate and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          placeholder="Add task"
          value={reminder}
          onChange={(e) =>
            setReminder(e.currentTarget.checked)
          }
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
=======
import React,{useState} from 'react';




const AddTask = ({onAdd}) => {

    const[text, setText]= useState('')
    const[day, setDay]= useState('')
    const[reminder, setReminder]= useState(false)
const onSubmit=(e)=>{
  e.preventDefault()
  if(!text) {
    alert("Please enter Task")
    return
}
onAdd({text, day, reminder})
setText('')
setDay('')
setReminder(false)
}
  return(
<form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>
    <label>Task</label>
    <input type='text'
     placeholder='Add Task'
      value={text} 
      onChange={(e) => setText(e.target.value)}
      />

</div>
<div className='form-control'>
    <label>Date and Time</label>
    <input type='text' 
    placeholder='Add taskDate and Time'
    value={day} 
    onChange={(e) => setDay(e.target.value)}
    />

</div>
<div className='form-control form-control-check'>
    <label>Set Reminder</label>
    <input type='checkbox'
    checked={reminder}
     placeholder='Add task'
     value={reminder} 
     onChange={(e) => setReminder(e.currentTarget.checked)}
     />

</div>
<input type='submit'
 value='Save Task' 
 className='btn btn-block'
  />
</form>
  ) 
};

export default AddTask;
>>>>>>> 8525d5a47d59e5c6f07d269c8fd325c282bb7ee7
