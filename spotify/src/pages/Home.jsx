import React from 'react';
import NavBar from '../components/NavBar';
import {Form, Button} from 'react-bootstrap'
import AlbumsPage from './AlbumsPage';

function Home(props) {
    return(
        <div className={"col-sm-9 col-md-9 col-lg-10 pb-sm-4 "}>
        <AlbumsPage />
</div>
    )
    
};

export default Home;
