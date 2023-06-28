import { IconButton } from "@mui/material";
import "../../styles/Task/TaskStatus.css";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import { TYPE_PROJECT } from "../../constantes";

function TaskStatus({task, tasks, updateTasks, projects, updateProjects, projectOpened}){

    const handleClick = (typeToAdd) => {
        const newTasks = tasks.map((t,i)=>{
            if(t.id === task.id) {
                t.done = (typeToAdd === TYPE_PROJECT.DEFAULT.DONE) ? true : false;
                t.doing = false;
            }
            return t;
        });
        updateTasks([...newTasks]);
        updateProjects([...projects.map(proj => {
            if(proj.type === typeToAdd) {
                task.done = (typeToAdd === TYPE_PROJECT.DEFAULT.DONE) ? true : false;
                task.doing = false;
                proj.addTask(task);
            }
            if(proj.id === projectOpened){
                proj.removeTask(task.id);
            }
            return proj;
        })]);
    };

    const handleDoingClick = () => {
        const newTasks = tasks.map((t)=>{
            if(t.id === task.id) {
                t.doing = true;
                t.done = false;
            }
            return t;
        });
        updateTasks([...newTasks]);
        updateProjects([...projects.map(proj => {
            if(proj.type === TYPE_PROJECT.DEFAULT.DOING) {
                task.doing = true;
                task.done = false;
                proj.addTask(task);
            }
            if(proj.id === projectOpened){
                proj.removeTask(task.id);
            }
            return proj;
        })]);
    };

    return (
        <div className="ligne">
            {
                task.done ? (
                    <IconButton className="task-status" color="error" title="Not started" onClick={() => handleClick(TYPE_PROJECT.DEFAULT.NOT_STARTED)}>
                        <ClearRoundedIcon />
                    </IconButton>
                ) : (
                    <IconButton className="task-status" color="success" title="Set as done" onClick={() => handleClick(TYPE_PROJECT.DEFAULT.DONE)}>
                        <CheckCircleRoundedIcon />
                    </IconButton>
                )
            }
            {
                task.done || task.doing ? (<></>) : (
                    <IconButton className="task-status" color="warning" title="Doing" onClick={handleDoingClick}>
                        <EngineeringRoundedIcon />
                    </IconButton>
                )
            }
        </div>
    );
}

export default TaskStatus;