import '../styles/App.css';
import Banner from './Banner';
import ActionBanner from './ActionBanner';
import TaskList from './TaskList';
import { useEffect, useState } from 'react';

function App() {
  // Au chargement, on récupère les potentielles tâches enregistrées
  const tasksSaved = localStorage.getItem('tasks');
  const [tasks, updateTasks] = useState(tasksSaved ? JSON.parse(tasksSaved) : []);

  // Dès qu'une modif a été ajoutée dans la variable tasks, on enregistre dans le localstorage
  useEffect(()=>{
		localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='app colonne'>
      <Banner />
      <ActionBanner tasks={tasks} updateTasks={updateTasks} />
      <TaskList tasks={tasks} updateTasks={updateTasks} />
    </div>
  );
}

export default App;
