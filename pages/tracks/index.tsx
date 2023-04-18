import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Grid, Card, Box, Button} from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

const Index = () => {
	const router = useRouter();
	const tracks: ITrack[] = [
		{
			_id: "1", 
			name: "Track", 
			artist: "Stas", 
			text: "Text", 
			listens: 5, 
			picture: "", 
			audio: "",
			comments: []
		}
	];

	return (
		<MainLayout>
				<Grid container justifyContent='center'>
					<Card style={{'width':'900px'}}>
							<Box p={2}>
								<Grid container justifyContent='space-between'>
									<h1>Track list</h1>
									<Button onClick={() => router.push('/tracks/create')}>Import</Button>
								</Grid>
							</Box>
							<TrackList tracks={tracks} />
					</Card>
				</Grid>
		</MainLayout>
	)
}

export default Index;
