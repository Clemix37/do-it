import { useState } from "react";
import Task from "../../classes/Task";
import "../../styles/ActionBanner/AddTaskBanner.css";
import { TextField } from "@mui/material";

function AddTaskBanner({
  tasks,
  updateTasks,
  projects,
  updateProjects,
  projectOpened,
}) {
  const [contentTaskAdd, updateContentTaskAdd] = useState("");

  const handleKeyEnter = (e) => {
    if (e.code !== "Enter") return;
    ajouterTache();
  };

  const ajouterTache = () => {
    if (contentTaskAdd.trim().length <= 0) return;
    const content =
      contentTaskAdd.trim().charAt(0).toUpperCase() +
      contentTaskAdd.trim().slice(1);
    const tache = new Task({ content: content });
    updateTasks([tache, ...tasks]);
    updateProjects([
      ...projects.map((proj) => {
        if (proj.id === projectOpened) proj.tasks.push(tache);
        return proj;
      }),
    ]);
    updateContentTaskAdd("");
  };

  const handleChange = (e) => {
    updateContentTaskAdd(e.target.value);
  };

  return (
    <div className="ligne">
      <TextField
        fullWidth={true}
        type="text"
        name="addTask"
        value={contentTaskAdd}
        onChange={handleChange} // Obligatoire quand on a une property value={}
        placeholder="Content"
        onKeyDown={handleKeyEnter}
      />
    </div>
  );
}

export default AddTaskBanner;
