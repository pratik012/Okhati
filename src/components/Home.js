import { Button, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function Startingpage(){
    return(
        <div className="homediv">
            <Grid container>
                <Grid item xs={2} sm= {2} md={2}>
                </Grid>

                <Grid item xs={4} sm= {4} md={4}>
                    <Typography variant="h3">
                        <b>Deliver Modern Healthcare With Okhati</b>
                    </Typography>
                    <Typography >
                        <div className="homecss">
                        Okhati suite comprises of a bunch of smart solutions made for clinics, labs, hospitals that consists of EMR, patient-flow management, billing, reporting, bulk-messaging, app engagement and much more.
                        </div>
                    </Typography>
                    <Typography>
                        We will call you back to tell more about our Okhati suite.
                    </Typography>
                    <Box className="homecss">
                        <TextField variant="standard" placeholder='Your phone number' type="number" />

                        <Button variant="contained" color="error"><Link to="/" className="anchor"> Submit </Link> </Button>
                    </Box>
                </Grid>

                <Grid item xs={4} sm= {4} md={4}>
                    <Typography>
                        <img src="index.png" width={500} />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Startingpage;