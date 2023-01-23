class Task {
    constructor({id,done=false,content="",isEditMode=false,tags=[]}){
        this.id=id;
        this.done=done;
        this.content=content;
        this.isEditMode=isEditMode;
        this.tags=tags;
    }
}
export default Task;