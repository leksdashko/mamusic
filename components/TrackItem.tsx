import { Card, Grid, IconButton } from '@mui/material';
import React from 'react'
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';
import { Pause, PlayArrow } from '@mui/icons-material';
import Image from 'next/image';

interface TrackItemProps {
	track: ITrack;
	active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
	return (
		<Card className={styles.track}>
			<IconButton>
				{active
					? <Pause/>
					: <PlayArrow/>
				}
			</IconButton>
			<Image width={70} height={70} src={track.picture} alt={track.name}/>
			<Grid container direction='column' style={{width:'200px', margin: '0 20px'}}>

			</Grid>
		</Card>
	)
}

export default TrackItem