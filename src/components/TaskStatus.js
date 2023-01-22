import "../styles/TaskStatus.css";

function TaskStatus({task, tasks, updateTasks}){

    const handleClick = () => {
        const newTasks = tasks.map((t,i)=>{
            if(t.id === task.id) t.done = !t.done;
            return t;
        });
        updateTasks(newTasks);
    };

    return (
        <div className="ligne">
                <span
                    className="task-status"
                    title={task.done ? "Undo" : "Done"}
                    onClick={handleClick}
                >
                    {task.done ? "❌" : "✅"}
                </span>
        </div>
    );
}

export default TaskStatus;