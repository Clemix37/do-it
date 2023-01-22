class Task {
    constructor({id,done=false,content="",isEditMode=false}){
        this.id=id;
        this.done=done;
        this.content=content;
        this.isEditMode=isEditMode;
    }
}
export default Task;