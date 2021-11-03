import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static" className="align">
        <Toolbar className="navbarcolor">
            <Grid container >
                <Grid item xs={1} sm={1} md={2}>
                </Grid>
                <Grid item xs={2} sm= {2} md={2} className='align'>
                    <Typography variant="h6" component="div">
                    <Link to="/" className="anchor"> Okhati </Link>
                    </Typography>
                </Grid>
                <Grid item xs={1} sm={4} md={3}>
                </Grid>
                <Grid item xs={8} sm={4} md={3} className="align1">
                    <ButtonGroup>
                    <Button variant="text" color="inherit" ><Link to="/" className="anchor"> Home </Link> </Button>
                    <Button variant="text" color="inherit"><Link to="/signup" className="anchor"> SignUp </Link></Button>
                    <Button variant="text" color="inherit"><Link to="/signin" className="anchor"> SignIn </Link></Button>
                    </ButtonGroup>
                </Grid>
                
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
