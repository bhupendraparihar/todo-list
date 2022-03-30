import { useState } from 'react';
import Task from './Task';
import CreateTask from './CreateTask';

function List() {
    const [title, setTitle] = useState('Title');
    const [tasks, setTasks] = useState([]);
    const [showAddNewTask, setShowAddNewTask] = useState(false);
    const styleTitle= {
        border: '0px',
        borderBottom: '1px solid GREY',
        fontWeight: 600

    }
    const createTask = () => {
        setShowAddNewTask(true);
    }

    const handleCreateTask = (taskObj) => {
        setTasks([...tasks, {
            text: taskObj.text,
            expiryDate: taskObj.expiryDate,
            finished: taskObj.finished
        }]);
        setShowAddNewTask(false);
    }

    const handleTaskCancel = () => {
        setShowAddNewTask(false);
    }

    return (
        <section className="list"> 
            <input className="title" style={styleTitle} type="text" onChange={(event) => setTitle(event.target.value)} value={title}/>
            { tasks.map(task => {
                return (
                    <>
                        <Task task={task}/>
                    </>
                );
            })}
            {!showAddNewTask && <button className="createTaskBtn" onClick={createTask}>Add New Task</button>}

            {showAddNewTask && <CreateTask createHandler={handleCreateTask} cancelHandler={handleTaskCancel}/>}
        </section>
    );
}

export default List;