import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow:1,
        backgroundColor: '#f1f1f1',
    },
    title: {
        flexGrow: 1,
        justifyContent: 'center'
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Appbar position="static" >
                <Toolbar varient="h3" className={classes.title} >
                    Worldwide Covid-19 Stats
                </Toolbar>
            </Appbar>
        </div>
    )
}