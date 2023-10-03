import { IconButton } from "@mui/material";
import "../../styles/Task/TaskActions.css";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function TaskActions({task, tasks, updateTasks, projects, updateProjects, projectOpened}){

	const handleClickDelete = () => {
		// On supprime la tâche des tâches totales
		updateTasks(tasks.filter((t)=>t.id !== task.id));
		// On supprime la tâche du projet
		updateProjects([...projects.map(proj => {
			if(proj.id === projectOpened){
				proj.removeTask(task.id)
			}
			return proj;
		})]);
	};

	return (
		<div className="ligne">
			<IconButton className="task-action" color="error" title="Supprimer" onClick={handleClickDelete}><DeleteRoundedIcon /></IconButton>
		</div>
	)
}

export default TaskActions;