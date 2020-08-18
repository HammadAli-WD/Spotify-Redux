import React, {Component} from 'react';
import { createUseStyles } from 'react-jss';


function Home(props) {
const useStyles = createUseStyles((theme)=>({
    classe: {
        backgroundSize: 'cover'
    }
}))
const styles = useStyles()
return(
    <div className= {"col-sm-9 col-md-9 col-lg-10 pb-sm-4 " + styles.classe} > 
    </div>
)    
}

export default Home;
