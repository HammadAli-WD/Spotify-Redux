import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

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
        <Container fluid className={styling.body}>
            <Row className={"w-100 ml-0 mr-0"}>

            </Row>
        </Container>
    )
}

export default GeneralLayout;
