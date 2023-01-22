import "../styles/TaskList.css";
import Task from './Task';

function TaskList({tasks, updateTasks}){
    const tasksDone = tasks.filter(t => t.done);
    const tasksNotDone = tasks.filter(t => !t.done);
    return (
        <div className="di-task-list colonne">
            <div className="ligne">
                <h3>Tasks 🚧:</h3>
            </div>
            <div className="ligne">
                <div className="colonne">
                    {tasksNotDone.map((t) => (
                        <Task task={t} tasks={tasks} updateTasks={updateTasks} key={t.id} />
                    ))}
                </div>
            </div>
            <div className="ligne">
                <h3>Tasks done ✅</h3>
            </div>
            <div className="ligne">
                <div className="colonne">
                    {tasksDone.map((t) => (
                        <Task task={t} tasks={tasks} updateTasks={updateTasks} key={t.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TaskList;