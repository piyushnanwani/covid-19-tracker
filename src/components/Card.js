import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();
    const [stats, handleStats] = useState([]);
    const FetchData = async () => {
        const data = await fetch('https://corona.lmao.ninja/v2/all');
        const stats = await data.json();
        handleStats(stats)
    }
    useEffect(() => {
        FetchData()// the function fetching the data
        }, [])
    
    return (
        <div >
        <Box display="flex" flexDirection="row" justifyContent="space-around" >
    
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Total Cases
                 </Typography>                
                <Typography variant="h5" component="h2">
                    {stats.cases}
                </Typography>
            </CardContent>
        </Card>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Total Deaths
                    </Typography>                
                    <Typography variant="h5" component="h2">
                        {stats.deaths}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Total Recovered
                    </Typography>                
                    <Typography variant="h5" component="h2">
                        {stats.recovered}
                    </Typography>
                </CardContent>
            </Card>
        </Box>

        </div>
    );
}
