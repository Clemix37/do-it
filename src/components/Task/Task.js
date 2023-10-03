import "../../styles/Task/Task.css";
import TaskStatus from "./TaskStatus";
import TaskContent from "./TaskContent";
import TaskActions from "./TaskActions";

function Task({
	task,
	tasks,
	updateTasks,
	projects,
	updateProjects,
	projectOpened,
}) {
	return (
		<div className="ligne">
			<div className="colonne">
				<div className="di-task ligne">
					<div className="colonne">
						<TaskStatus
							task={task}
							tasks={tasks}
							updateTasks={updateTasks}
							projects={projects}
							updateProjects={updateProjects}
							projectOpened={projectOpened}
						/>
					</div>
					<div className="colonne is-5-colonne">
						<TaskContent
							task={task}
							tasks={tasks}
							updateTasks={updateTasks}
							projects={projects}
							updateProjects={updateProjects}
							projectOpened={projectOpened}
						/>
					</div>
					<div className="colonne">
						<TaskActions
							task={task}
							tasks={tasks}
							updateTasks={updateTasks}
							projects={projects}
							updateProjects={updateProjects}
							projectOpened={projectOpened}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Task;
