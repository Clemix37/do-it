import "../styles/Task.css";
import TaskStatus from "./TaskStatus";
import TaskContent from "./TaskContent";
import TaskActions from "./TaskActions";

function Task({task, tasks, updateTasks}){
    return (
        <div className="di-task ligne">
            <div className="colonne">
                <TaskStatus task={task} tasks={tasks} updateTasks={updateTasks} />
            </div>
            <div className="colonne is-5-colonne">
                <TaskContent task={task} tasks={tasks} updateTasks={updateTasks} />
            </div>
            <div className="colonne">
                <TaskActions task={task} tasks={tasks} updateTasks={updateTasks} />
            </div>
        </div>
    )
}

export default Task;
