import "../styles/TaskList.css";
import Task from './Task/Task';

function TaskList({tasks, updateTasks, projects, updateProjects, projectOpened}){
    const project = projects.find(proj => proj.id === projectOpened);
    return (
        <div className="di-task-list colonne">
            <div className="ligne">
                <h3>{project.nom} ({project.tasks.length}) :</h3>
            </div>
            <div className="ligne">
                <div className="colonne">
                    {project.tasks.map((t) => (
                        <Task task={t} tasks={tasks} updateTasks={updateTasks} key={t.id} projects={projects} updateProjects={updateProjects} projectOpened={projectOpened} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TaskList;