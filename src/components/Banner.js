import "../styles/Banner.css";

function Banner({config,updateConfig,title,updateTitle}){

    const handleClickConfigurate = () => {
        updateConfig({title:config.title,isConfigOpen:true});
    };

    const handleClickGetOutConfig = () => {
        updateConfig({title:config.title,isConfigOpen:false});
    };

    const handleChangeTitle = (e) => {
        updateTitle(e.target.value);
    };

    if(config.isConfigOpen){
        return (
            <div className="di-banner ligne">
                <div className="colonne">&nbsp;</div>
                <div className="colonne is-2-colonne content-centered title-banner">
                    <input value={title} onChange={handleChangeTitle} />
                </div>
                <div className="colonne is-self-start is-flex-right">
                    <button className="btn is-gray" title="Get out" onClick={handleClickGetOutConfig}>Get Out</button>
                </div>
            </div>
        );
    }

    return (
        <div className="di-banner ligne">
            <div className="colonne">&nbsp;</div>
            <div className="colonne is-2-colonne content-centered title-banner">
                {config.title}
            </div>
            <div className="colonne is-self-start is-flex-right">
                <button className="btn is-gray" title="Configurate" onClick={handleClickConfigurate}>Configurate</button>
            </div>
        </div>
    )
}

export default Banner;