import { v4 as uuidv4 } from 'uuid';

class Task {
    constructor({done=false,content="",doing=false,isEditMode=false,tags=[]}){
        this.id=uuidv4();
        this.done=done;
        this.content=content;
        this.doing=doing;
        this.isEditMode=isEditMode;
        this.tags=tags;
    }
}
export default Task;