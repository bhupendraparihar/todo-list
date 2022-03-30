import { useState } from "react";

function CreateTask({createHandler, cancelHandler}) {

    const [taskDescription, setTaskDescription] = useState('');

    const style = {
        display: 'flex',
        width: '200px',
        flexDirection: 'column',
        border: '1px solid GREY',
        padding: '5px',
        borderRadius: '5px'
    };
    return (
        <div style={style}>
            <input type="text" placeholder="Description" onChange={(event) => setTaskDescription(event.target.value)}></input>
            <label>
            <input type="checkbox"></input>Finished</label>
            <label>Expiry Date
            <input type="datetime-local" /></label>
            <div>
                <button onClick={() => {createHandler({
                    text: taskDescription
                })}}>Create</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>
        </div>
    );
}

export default CreateTask;