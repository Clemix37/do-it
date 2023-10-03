import { Button, IconButton, TextField } from "@mui/material";
import "../styles/Banner.css";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

function Banner({config,updateConfig,title,updateTitle,isPanelLeftOpened,updateIsPanelLeftOpened}){

	const handleClickConfigurate = () => {
		updateConfig({title:config.title,isConfigOpen:true});
	};

	const handleClickGetOutConfig = () => {
		updateConfig({title:config.title,isConfigOpen:false});
	};

	const handleChangeTitle = (e) => {
		updateTitle(e.target.value);
	};

	const toggleLeftPanel = () => {
		updateIsPanelLeftOpened(!isPanelLeftOpened);
	};

	if(config.isConfigOpen){
		return (
			<div className="di-banner ligne">
				<div className="colonne">&nbsp;</div>
				<div className="colonne is-2-colonne content-centered title-banner">
					<TextField value={title} onChange={handleChangeTitle} />
				</div>
				<div className="colonne is-self-start is-flex-right">
					<Button variant="contained" title="Exit" onClick={handleClickGetOutConfig}>Exit</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="di-banner ligne">
			<div className="colonne">
				<IconButton aria-label={isPanelLeftOpened ? "Close" : "Open"} onClick={toggleLeftPanel}>
					{
						isPanelLeftOpened ? <KeyboardArrowLeftRoundedIcon /> : <NavigateNextRoundedIcon />
					}
				</IconButton>
			</div>
			<div className="colonne is-2-colonne content-centered title-banner">
				{config.title}
			</div>
			<div className="colonne is-self-start is-flex-right">
				<Button className="btn is-gray" title="Configurate" onClick={handleClickConfigurate}>Configurate</Button>
			</div>
		</div>
	)
}

export default Banner;
