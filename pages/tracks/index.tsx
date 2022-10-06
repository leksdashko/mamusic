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
			picture: "http://localhost:5000/image/8e919da3-c34a-4054-b699-c50d477d2ec5.png", 
			audio: "http://localhost:5000/audio/3173c896-aac6-43f5-a037-2720d9349ad3.mp3",
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
