import "../../styles/SubTask/SubTask.css";

function SubTaskStatus({subtask, task, tasks, updateTasks}){

    const handleClick = () => {
        const newTasks = tasks.map((t,i)=>{
            if(t.id === task.id) {
                t.subTasks.map((s)=>{
                    if(s.id === subtask.id) s.done=true;
                    return s;
                });
                t.done = !t.done;
            }
            return t;
        });
        updateTasks(newTasks);
    };

    return (
        <div className="ligne">
            <span
                className="subtask-status"
                title={subtask.done ? "Undo" : "Done"}
                onClick={handleClick}
            >
                {subtask.done ? "❌" : "✅"}
            </span>
        </div>
    );
}

export default SubTaskStatus;