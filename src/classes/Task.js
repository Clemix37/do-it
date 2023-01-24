class Task {
    constructor({id,done=false,subTasks=[],content="",isEditMode=false,tags=[]}){
        this.id=id;
        this.done=done;
        this.subTasks=subTasks;
        this.content=content;
        this.isEditMode=isEditMode;
        this.tags=tags;
    }
}
export default Task;