import { Box, LinearProgress } from '@mui/material';
import '../../styles/ActionBanner/ProgressBar.css'

function ProgressBar({tasks}){
	const percentageDone = tasks.length > 0 ? (((tasks.filter(t => t.done)?.length ?? 0) / (tasks.length ?? 0)) * 100).toFixed(2) : 100.00;
	return (
		<div className="ligne">
			<div className="colonne">
				<span>{percentageDone}% done !</span>
				<Box sx={{ width: '60%' }}>
					<LinearProgress variant="determinate" value={parseFloat(percentageDone)} color="success" />
				</Box>
			</div>
		</div>
	);
}

export default ProgressBar;