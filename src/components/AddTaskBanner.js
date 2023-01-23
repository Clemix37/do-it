import { useState } from "react";
import Task from "../classes/Task";
import "../styles/AddTaskBanner.css";

function AddTaskBanner({tasks, updateTasks}){
    const [contentTaskAdd, updateContentTaskAdd] = useState("");

    const handleKeyEnter = (e) => {
        if(e.code !== "Enter") return;
        ajouterTache();
    };

    const ajouterTache = () => {
        if(contentTaskAdd.trim().length <= 0) return;
        updateTasks([
            ...tasks,
            new Task({id:tasks.length, content:contentTaskAdd})
        ]);
        updateContentTaskAdd("");
    };

    const handleChange = (e)=>{
        updateContentTaskAdd(e.target.value);
    };
    
    return (
        <div className="ligne">
            <input 
                type="text" 
                name="addTask" 
                value={contentTaskAdd} 
                onChange={handleChange} // Obligatoire quand on a une proerty value={}
                placeholder="Content" 
                onKeyDown={handleKeyEnter} />
            <span className="icone-add" onClick={ajouterTache}>➕</span>
        </div>
    )
}

export default AddTaskBanner;