import '../styles/App.css';
import Banner from './Banner';
import ActionBanner from './ActionBanner';
import TaskList from './TaskList';
import Config from './Config';
import { useEffect, useState } from 'react';
import Task from '../classes/Task';
import Configuration from '../classes/Configuration';

function App() {
  // Au chargement, on récupère les potentielles tâches enregistrées
  const tasksSaved = localStorage.getItem('tasks');
  const configSaved = localStorage.getItem('config');
  const [tasks, updateTasks] = useState(tasksSaved ? JSON.parse(tasksSaved).map((t)=>new Task(t)) : []);
  const [config, updateConfig] = useState(new Configuration(configSaved ? JSON.parse(configSaved) : {}));

  // Dès qu'une modif a été ajoutée dans la variable tasks, on enregistre dans le localstorage
  useEffect(()=>{
		localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(()=>{
    localStorage.setItem('config', JSON.stringify(config));
  }, [config]);

  if(config.isConfigOpen){
    return (
      <div className='app colonne'>
        <Config config={config} updateConfig={updateConfig} />
      </div>
    );
  }
  return (
    <div className='app colonne'>
      <Banner config={config} updateConfig={updateConfig} />
      <ActionBanner tasks={tasks} updateTasks={updateTasks} />
      <TaskList tasks={tasks} updateTasks={updateTasks} />
    </div>
  );
}

export default App;
