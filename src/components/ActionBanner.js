import "../styles/ActionBanner.css";
import AddTaskBanner from './AddTaskBanner';
import ProgressBar from './ProgressBar';

function ActionBanner({tasks, updateTasks, contentTaskAdd, updateContentTaskAdd}){
    return (
        <div className="di-action-banner ligne">
            <div className="colonne">
                <ProgressBar tasks={tasks} />
                <AddTaskBanner tasks={tasks} updateTasks={updateTasks} contentTaskAdd={contentTaskAdd} updateContentTaskAdd={updateContentTaskAdd} />
            </div>
        </div>
    )
}

export default ActionBanner;