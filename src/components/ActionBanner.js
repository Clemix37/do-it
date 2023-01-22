import "../styles/ActionBanner.css";
import AddTaskBanner from './AddTaskBanner';

function ActionBanner({tasks, updateTasks, contentTaskAdd, updateContentTaskAdd}){
    return (
        <div className="di-action-banner ligne">
            <div className="colonne">
                <AddTaskBanner tasks={tasks} updateTasks={updateTasks} contentTaskAdd={contentTaskAdd} updateContentTaskAdd={updateContentTaskAdd} />
            </div>
        </div>
    )
}

export default ActionBanner;