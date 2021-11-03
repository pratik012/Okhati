import * as React from 'react';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="Footer">
            <Grid container>
                <Grid item xs={3} sm={4} md={4}>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <ButtonGroup>
                    <Link className="Footercss" to="/"> Okhati Clinic Suite</Link>
                    <Link className="Footercss" to="/"> About Us </Link>
                    <Link className="Footercss" to="/"> Terms &amp; Condition </Link>
                    <Link className="Footercss" to="/"> Blog </Link>
                    </ButtonGroup>
                </Grid>
            </Grid>
            
            <div className='last'>
                <Typography>Okhati</Typography>
                <Typography>9851154810, 015320826</Typography>
                <Typography>Tripura Marg, Teku, Kathmandu</Typography>
                <Typography>info@okhati.com.np</Typography>
            </div>
              
        </div>
    );
}

export default Footer;