import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import Head from "next/head";

interface MainLayoutProps {
	children: React.ReactElement;
	title?: string;
	description?: string;
	keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	title,
	description,
	keywords
}) => {
    return (
        <>
            <Head>
                <title>{title || 'Mamusic'}</title>
                <meta name="description" content={`Mamusic. Everybody can make your own playlist here.` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Music, tracks, playlists"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
