import '../../styles/SubTask/SubTask.css';

function SubTask({tasks, task, updateTasks, subtask}){
    return (
        <div className="di-task ligne">
            <div className="colonne di-sub-task-icon"><div className="ligne di-sub-task-box"></div></div>
            <div className="colonne">{subtask.content}</div>
            <div className="colonne"></div>
        </div>
    );
}

export default SubTask;