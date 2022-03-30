function Task({task}) {
    return (
        <section className="task">
            <input type="checkbox" />
            <label>{task.text}</label>
        </section>
    )
}

export default Task;