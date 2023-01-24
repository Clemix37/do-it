import { useState } from 'react';
import '../styles/Config.css';
import Banner from './Banner';

function Config({config, updateConfig}){
    const [title, updateTitle] = useState(config.title);

    const handleClickSave = () => {
        updateConfig({title:title, isConfigOpen:false});
    };

    return (
        <div className="ligne">
            <div className="colonne">
                <Banner config={config} updateConfig={updateConfig} title={title} updateTitle={updateTitle} />
                <button className="btn is-gray" onClick={handleClickSave}>Save Config ! </button>
            </div>
        </div>
    );
}

export default Config;