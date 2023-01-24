class SubTask {
    constructor({id,content,isEditMode=false,tags=[]}){
        this.id=id;
        this.content=content;
        this.isEditMode=isEditMode;
        this.tags=tags;
    }
}

export default SubTask;