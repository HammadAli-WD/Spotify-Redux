import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import NavBar from '../components/NavBar';

function GeneralLayout(props) {
    
    const useStyles = createUseStyles((theme) => ({
        body: {
            color: "whitesmoke",
            height: "100vh",
            paddingLeft: "0"
        }
    }))
    const styling = useStyles()
    return (
        <Container fluid>
            
            <NavBar />
            {/* if you check the Router.jsx, its clear that 
            the components are the childeren of layouts and 
            its pass through props in route render*/}
            {props.children}
            
           
        </Container>
    )
}

export default GeneralLayout;
