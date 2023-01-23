import { useState } from "react";
import "../styles/TaskContent.css";

function TaskContent({task, tasks, updateTasks}){
    const [contentTask, updateContentTask] = useState(task.content);

    const handleClick = ()=>{
        updateTasks(tasks.filter((t)=>{
            if(t.id===task.id) t.isEditMode = true;
            return t;
        }));
    };

    const handleChange = (e) => {
        updateContentTask(e.target.value);
    };

    const handleKeyDown = (e) => {
        if(e.code !== "Enter") return;
        retirerModeEdition();
    };

    const handleBlur = () => {
        retirerModeEdition();
    };

    const retirerModeEdition = () => {
        updateTasks(tasks.filter((t)=>{
            if(t.id===task.id){
                t.isEditMode = false;
                t.content = contentTask;
            }
            return t;
        }));
    };

    if(task.isEditMode){
        return (
            <div className="ligne">
                <textarea className="task-content" 
                    value={contentTask} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown} 
                    autoFocus={true} 
                    onBlur={handleBlur}
                >
                </textarea>
            </div>
        );
    }
    return (
        <div className="ligne" onClick={handleClick}>{task.content}</div>
    );
}

export default TaskContent;