import "../../styles/ActionBanner/ActionBanner.css";
import AddTaskBanner from "./AddTaskBanner";
import ProgressBar from "./ProgressBar";
import ProjectsBanner from "./ProjectsBanner";

function ActionBanner({
	tasks,
	updateTasks,
	projects,
	updateProjects,
	projectOpened,
	setProjectOpened,
}) {
	return (
		<div className="di-action-banner ligne">
			<div className="colonne">
				<ProgressBar tasks={tasks} />
				<AddTaskBanner
					tasks={tasks}
					updateTasks={updateTasks}
					projects={projects}
					updateProjects={updateProjects}
					projectOpened={projectOpened}
				/>
				<ProjectsBanner projects={projects} setProjectOpened={setProjectOpened} />
			</div>
		</div>
	);
}

export default ActionBanner;
