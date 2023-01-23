class Configuration {
    constructor(obj = {}){
        this.title = obj.title ?? "Do it ! ✅";
        this.isConfigOpen = !!obj.isConfigOpen;
    }
}

export default Configuration;