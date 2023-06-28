import { v4 as uuidv4 } from 'uuid';
import { TYPE_PROJECT } from '../constantes';

export default class Project {
    constructor({nom,type=TYPE_PROJECT.OTHER,defaut=true,tasks=[],icone}){
        this.id = uuidv4();
        this.nom = nom;
        this.type = type;
        this.default = defaut;
        this.tasks = tasks;
        this.icone = icone;
    }
    addTask(t){
        this.tasks.push(t);
    }
    removeTask(id){
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}