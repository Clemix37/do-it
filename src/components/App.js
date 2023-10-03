import "../styles/App.css";
import Banner from "./Banner";
import ActionBanner from "./ActionBanner/ActionBanner";
import TaskList from "./TaskList";
import Config from "./Config";
import { useEffect, useState } from "react";
import Task from "../classes/Task";
import Configuration from "../classes/Configuration";
import Project from "../classes/Project";
import LeftPanel from "./LeftPanel/LeftPanel";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { TYPE_PROJECT } from "../constantes";

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#03dfff",
		},
		secondary: {
			main: "#446DF6",
		},
		error: {
			main: red[500],
		},
		success: {
			main: green[400],
		},
	},
});

const createDefaultProjects = (tasks) => {
	const defaults = [];

	defaults.push(new Project({nom:"Not started", type: TYPE_PROJECT.DEFAULT.NOT_STARTED, tasks: tasks.filter(t => !t.doing && !t.done)}));
	defaults.push(new Project({nom:"Doing", type: TYPE_PROJECT.DEFAULT.DOING, tasks: tasks.filter(t => t.doing && !t.done)}));
	defaults.push(new Project({nom:"Done", type: TYPE_PROJECT.DEFAULT.DONE, tasks: tasks.filter(t => t.done)}));

	return defaults;
};

function App() {
	// Au chargement, on récupère les potentielles tâches enregistrées
	const tasksSaved = localStorage.getItem("tasks");
	const projectsSaved = localStorage.getItem("projects");
	const configSaved = localStorage.getItem("config");
	const [tasks, updateTasks] = useState(
		tasksSaved ? JSON.parse(tasksSaved).map((t) => new Task(t)) : []
	);
	const [projects, updateProjects] = useState(
		projectsSaved ? JSON.parse(projectsSaved).map((t) => new Project(t)) : createDefaultProjects(tasks)
	);
	const [config, updateConfig] = useState(
		new Configuration(configSaved ? JSON.parse(configSaved) : {})
	);
	const [isPanelLeftOpened, updateIsPanelLeftOpened] = useState(false);
	const [projectOpened, setProjectOpened] = useState(projects[0].id);

	// Dès qu'une modif a été ajoutée dans la variable tasks, on enregistre dans le localstorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
		localStorage.setItem("config", JSON.stringify(config));
		localStorage.setItem("projects", JSON.stringify(projects));
	}, [config, tasks, projects]);

	if (config.isConfigOpen) {
		return (
			<div className="app colonne">
				<Config config={config} updateConfig={updateConfig} />
			</div>
		);
	}
	return (
		<ThemeProvider theme={theme}>
			<div className="app colonne">
				<div className="ligne">
					{isPanelLeftOpened ? <LeftPanel projects={projects} setProjectOpened={setProjectOpened} /> : <></>}
					<div className="colonne">
						<Banner
							config={config}
							updateConfig={updateConfig}
							isPanelLeftOpened={isPanelLeftOpened}
							updateIsPanelLeftOpened={updateIsPanelLeftOpened}
						/>
						<ActionBanner
							tasks={tasks}
							updateTasks={updateTasks}
							projects={projects}
							updateProjects={updateProjects}
				projectOpened={projectOpened}
				setProjectOpened={setProjectOpened}
						/>
						<TaskList tasks={tasks} updateTasks={updateTasks} projects={projects} updateProjects={updateProjects} projectOpened={projectOpened} />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
