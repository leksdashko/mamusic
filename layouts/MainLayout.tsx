import React from 'react'
import Navbar from '../components/Navbar'
import {Container} from '@mui/material';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => (
	<>
		<Navbar />
		<Container style={{'marginTop':'100px'}}>
			{children}
		</Container>
	</>
)

export default MainLayout;
