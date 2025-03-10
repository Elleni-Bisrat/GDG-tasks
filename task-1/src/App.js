import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [create, setCreate] = useState(false);
  const [addtask, setAddtask] = useState([]);
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editIndex, setEditIndex] = useState("");

  const Create = () => {
    setCreate(true);
  };

  const Add = () => {
    if (task.trim() !== "") {
      let updatedTasks = [...addtask];

      if (editIndex !== "") {
        updatedTasks[editIndex] = { title: task, description, dueDate, option };
        setEditIndex("");
      } else {
        updatedTasks.push({ title: task, description, dueDate, option });
      }

      setAddtask([...addtask, { title: task, description, dueDate, option }]);
      setTask("");
      setDescription("");
      setDueDate("");
      setOption("started");
      setCreate(true);
    }
  };

  const EditTask = (index) => {
    const taskToEdit = addtask[index];
    setTask(taskToEdit.title);
    setDescription(taskToEdit.description);
    setDueDate(taskToEdit.dueDate);
    setOption(taskToEdit.option);
    setEditIndex(index);
    setCreate(true);
  };

  const DeleteTask = (index) => {
    setAddtask(addtask.filter((_, i) => i !== index));
  };

  const ReadTask = () => {
    if (addtask.trim !== "") {
      setAddtask([...addtask, { title: task, description, dueDate, option }]);
      setCreate(false);
    }
  };

  return (
    <div className="App">
      <h1>Task Management application</h1>
      <div className="btn">
        <button onClick={Create}> Create</button>
        <button onClick={ReadTask}>Read Tasks</button>
      </div>

      {create ? (
        <div className="createdTask">
          <p>Title</p>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <p>Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>dueDate</p>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <p>Status</p>
          <select
            className="status"
            id=""
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="started">started</option>
            <option value="onprogress">on Progress</option>
            <option value="completed">completed</option>
            <option value="notCompleted">not Completed</option>
          </select>
        </div>
      ) : (
        ""
      )}

      <button onClick={Add} className="addbtn">
        Add
      </button>
      <div className="taskAddedBox">
        <h3>TaskLists</h3>
        {addtask.map((accu, index) => (
          <div key={index} className="taskList">
            <strong>Title:</strong>
            {accu.title} <br />
            <strong>Description:</strong>
            {accu.description} <br />
            <strong>DueDate:</strong>
            {accu.dueDate} <br />
            <strong>status:</strong>
            {accu.option}
            <button onClick={() => EditTask(index)} className="editbtn">
              Edit
            </button>
            <button onClick={() => DeleteTask(index)} className="deletebtn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
