import styles from "./App.module.css";
import {Button} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
    helloThereStyle:{
        fontStyle:"oblique"
    },
    root:{
        backgroundColor:"red",
        color:props=>props.color,
    }
})
export default function App(){
    const classes =useStyles();
    return(
        <div className={styles.con}>
        <Typography className={classes.helloThereStyle} variant="h1" color="secondary">Application</Typography>
        <Button color="primary">this is button</Button>
        </div>
    )
}