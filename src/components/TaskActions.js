import "../styles/TaskActions.css";

function TaskActions({task, tasks, updateTasks}){

    const handleClickDelete = () => {
        updateTasks(tasks.filter((t)=>t.id !== task.id));
    };

    return (
        <div className="ligne">
            <span className="task-action" title="Supprimer" onClick={handleClickDelete}>🗑️</span>
        </div>
    )
}

export default TaskActions;