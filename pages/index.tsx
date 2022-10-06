import React from 'react'
import MainLayout from '../layouts/MainLayout';

const Index = () => {
	return (
		<>
			<MainLayout>
				<div className='center'>
					<h1>Welcome!</h1>
					<p>Here is the best track list ever</p>
				</div>
			</MainLayout>

			<style jsx>
				{`
					.center {
						margin-top: 150px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
					}
				`}
			</style>
		</>
	);
}

export default Index;
