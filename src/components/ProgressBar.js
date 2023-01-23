import '../styles/ProgressBar.css'

function ProgressBar({tasks}){
    const percentageDone = (((tasks.filter(t => t.done)?.length ?? 0) / (tasks.length ?? 0)) * 100).toFixed(2);
    return (
        <div className="ligne">
            <div className="colonne">
                <span>{percentageDone}% done !</span>
                <progress value={percentageDone} max="100">{percentageDone}%</progress>
            </div>
        </div>
    );
}

export default ProgressBar;