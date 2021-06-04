import React from "react";
import { Typography, Grid} from '@material-ui/core';

function noticeHeader () {
    return (
        <Grid container justify="center" alignItems="center">
        <Typography gutterBottom>
        Players/DM/Chat please let bingo squares be organically occuring. 
      </Typography>
      <Typography gutterBottom>
          <p>
      Do not force or attempt to cause players to match them.
      </p>
      </Typography>
      </Grid>

    )
}

export default noticeHeader;