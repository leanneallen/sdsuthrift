import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ListingList from './ListingList';
import NewListing from './SideMenu';
export default function PMenu() {
  return (
    <Paper sx={{padding: 5}}>
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <NewListing/>
      </Grid>
      <Grid item xs={12}>
      <ListingList/>
      </Grid>
    </Grid>
    </Paper>
  );
}
