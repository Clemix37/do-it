import "../../styles/Task/Task.css";
import TaskStatus from "./TaskStatus";
import TaskContent from "./TaskContent";
import TaskActions from "./TaskActions";
import SubTask from "../SubTask/SubTask";

function Task({task, tasks, updateTasks}){
    return (
        <div className="ligne">
            <div className="colonne">
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
                {task.subTasks.map((s)=>(
                  <SubTask task={task} updateTasks={updateTasks} subtask={s} tasks={tasks} />  
                ))}
            </div>
        </div>
    )
}

export default Task;
