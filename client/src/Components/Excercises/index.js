import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SimpleMediaCard from './profile/profileCard';
import ButtonBases from './profile/mainButtons';

const style = {
    paper: {
      padding: '50px',
      marginTop: '10px',
      marginBottom: '10px',
      height: '500px',
      overflowY: 'auto'
    },
    button: {
      marginLeft: '100%'
    },
    text: {
      marginLeft: '100%'
    }
  };

  export default props => (
    <Grid container >
    <Grid item sm>
        {/* <Paper style={style.paper}> */}
      <SimpleMediaCard > 
      </SimpleMediaCard>
    </Grid>
    <Grid item sm> 
      <ButtonBases >
      </ButtonBases>
        {/* </Paper> */}
    </Grid>
    </Grid> 
)
